//load configuration of knex
const config = require("../knexfile")
//load knex module
const knex = require("knex")

//export connection with development config
module.exports = knex(config.development)
//this grabs the config of the development
//of the knex file and imports it
//into app file
