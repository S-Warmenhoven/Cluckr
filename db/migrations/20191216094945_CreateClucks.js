exports.up = function(knex, Promise) {
    return knex.schema.createTable("clucks", table => {
      table.bigIncrements("id").primary();
      table.string("username");
      table.text("image_url"); 
      table.text("content"); 
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.timestamp("updatedAt");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("clucks");
  };
