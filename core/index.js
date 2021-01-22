// var DBURI =

module.exports = {
    DBURI: process.env.DBURI || "mongodb+srv://owais:owais@cluster0.auftw.mongodb.net/tweeter-db?retryWrites=true&w=majority",
    SERVER_SECRET: process.env.SECRET || "1234",
    // CLIENT_SEC: process.env.CLIENT_SEC || "abc"

}