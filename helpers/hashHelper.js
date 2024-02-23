const bcrypt = require('bcryptjs');

module.exports = {
    generateHash(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },

    validatePassword(given_password, stored_password) {
        return bcrypt.compareSync(given_password, stored_password);
    }
}