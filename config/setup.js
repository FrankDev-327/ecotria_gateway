require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    places: process.env.PLACES,
    personal: process.env.PERSONAL,
}