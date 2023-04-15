const User = require('../models/User')
const jwt = require('jsonwebtoken')
const env = require('../Config/env/env.js')
const bcrypt = require('bcrypt');
const hash = require('../helpers/hashHelper');

module.exports = {
    getUsers(req, res) {
        User.find({})
        .then(users => {
            res.status(200)
            res.json(users)
        }).catch(error => {
            res.status(500);
            res.json(error)

            console.log(error)
        })
    },

    getUser(req, res) {
        var id = req.params.id;

        User.findOne({_id: id})
        .then(user => {
            res.status(200);
            res.json(User(user));
        }).catch(error => {
            res.status(500);
            res.json(error);
        })
    },

    addUser(req, res) {
        var user = {
            name: req.params.name,
            password: User.generateHash(req.body.password)
        }
        User.findOne({name: user.name})
        .then(response => {
            if(response === null) {
                User.create(user)
                .then(user => {
                    res.status(200);
                    res.json();
                }).catch(error => {
                    res.status(500);
                    res.json(error);

                    console.log(error);
                })
            }
        })   
    },

    putUser(req, res) {
        var id = req.params.id;

        var user = {
            name: req.body.name,
            password: User.generateHash(req.body.password)
        }

        if(User.validatePassword(req.body.oldPassword)) {
            User.findOneAndUpdate({_id: id}, user)
            .then(user => {
                res.status(200);
                res.json(user._id)
            })
            .catch(error => {
                res.status(500);
                res.json(error);

                console.log(error);
            })
        } else {
            res.status(403)
        }
    },

    deleteUser(req, res) {
        var id = req.params.id;
        
        if(User.validatePassword(req.body.password)) {
            User.findOneAndDelete({_id: id})
            .then(response => {
                res.status(201)
            }).catch(error => {
                res.status(500)
            })
        } else {
            res.status(403)
        }
    },

    authenticate(req, res) {
        User.findOne({name: req.body.username})
        .then(user => {
            if(hash.validatePassword(req.body.password, user.password)) {
                const token = jwt.sign({user_id: req.body.name}, 
                    env.token,
                    {expiresIn: "2h"});
                response = {
                    name: req.body.username,
                    authToken: token 
                }
                console.log(response)
                res.status(200);
                res.json(response);
            } else {
                res.status(403);
                res.send("invalid credentials.")
            }
        })
    },

    initializeRoot() {
        var user = {
            name: "root",
            password: hash.generateHash(env.rootpwd)
        }
        User.findOne({name: user.name})
        .then(response => {
            if(response === null) {
                User.create(user)
                .then(user => {
                    console.log("root user initizalized")
                }).catch(error => {
                    console.log(error);
                })
            } else {
                console.log("root user alreay exists");
            }
        })
    }

    
}