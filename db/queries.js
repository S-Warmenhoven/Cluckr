// require connection to database
const knex = require('./client')

//we can name the query anything we want: like getAll()
const queries = {
    getAll() {
        return knex("clucks").select("*")
    },
    new(taskObj){
        return knex("clucks")
        //tasks is gthe name of the table
        .insert(taskObj, "*")
        //this will show all the new objects
    }
}

// we can define methods in here and 
//we'll export it

module.exports = queries