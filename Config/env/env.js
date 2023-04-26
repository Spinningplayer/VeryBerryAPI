var env = {
    webPort: process.env.PORT || 3000,
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: process.env.DB_PORT || '',
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbDatabase: process.env.DB_DATABASE || 'VeryBerryDatabase',
    outletAddress: '192.168.1.104'
}

var link = process.env.NODE_ENV === 'production' ?
    'mongodb://' + env.dbUser + ':' + env.dbPassword + '@' + env.dbHost + ':' + env.dbPort + '/' + env.dbDatabase :
    'mongodb://127.0.0.1/' + env.dbDatabase;

module.exports = {
    env: env,
    link: link,
    token: "jd9h4k329dkg94o20rkt95p2ke0tk4yf",
    rootpwd: 'root'
};