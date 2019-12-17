const knex = require('./client');

const queries = {
    getAll() {
        return knex("clucks").select("*")
    },
    new(taskObj){
        return knex("clucks")
        .insert(taskObj, "*")
    }
};

module.exports = queries