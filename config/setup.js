require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    places: process.env.PLACES,
    personal: process.env.PERSONAL,
    main_path: process.env.MAIN_PATH_ECOTRIA_API
}