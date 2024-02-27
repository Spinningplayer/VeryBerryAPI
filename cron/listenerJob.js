const Artist = require("../models/Artist")
const request = require('request')
const cheerio = require('cheerio')

module.exports = {
    listenerJob() {
        Artist.find({}).then(artists => {
            artists.forEach( (element, index, array) =>{
                var urlString = 'https://open.spotify.com/artist/'+element.spotifyId
                request({url:urlString,headers: {'User-Agent':'Firefox'}}, function (error, response, body) {
                    const html = cheerio.load(body);
                    var result = html('meta[property="og:description"]').attr('content');
                    beginStr = result.indexOf("·")+2
                    endString = result.substring(beginStr).indexOf(" ")
                    endString = beginStr+endString
                    var spotifyListeners = result.substring(beginStr, endString)
                    Artist.findOneAndUpdate({_id: element._id}, {spotifyListeners: spotifyListeners})
                    .then(artist => {})
                })
            })
        })
    }
}        
