exports.up = function(knex, Promise) {
    return knex.schema.createTable("clucks", table => {
      table.bigIncrements("id").primary();// create an autoincrementing column named `id` - "id" SERIAL
      table.string("username");
      table.text("image_url"); // "title" VARCHAR(255)
      table.text("content"); // "content" TEXT
      table.timestamp("createdAt").defaultTo(knex.fn.now())
      table.timestamp("updatedAt")
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("clucks");
  };
