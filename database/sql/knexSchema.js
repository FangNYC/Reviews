const knex = require("./knexConnection.js");

(async () => {
  await knex.schema.dropTableIfExists("reviews");
  await knex.schema.dropTableIfExists("bookings");
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("listings");

  await knex.schema.createTable("listings", table => {
    table.increments("l_id");
    table.string("listing_description");
  });

  await knex.schema.createTable("users", table => {
    table.increments("u_id");
    table.string("username");
    table.string("display_name");
    table.string("photo_url");
    table.string("profile_url");
  });

  await knex.schema.createTable("bookings", table => {
    table.increments("b_id");
    table.integer("listings_id");
    table.foreign("listings_id").references("listings.l_id");
    table.index("listings_id", "bookings_listings_index");
    table.integer("users_id");
    table.foreign("users_id").references("users.u_id");
    table.index("users_id", "bookings_users_index");
    table.string("stay_start");
    table.string("stay_end");
  });

  await knex.schema.createTable("reviews", table => {
    table.increments("r_id");
    table.integer("bookings_id");
    table.foreign("bookings_id").references("bookings.b_id");
    table.index("bookings_id", "reviews_bookings_index");
    table.string("review_date");
    table.string("review_description", 5000);
    table.integer("accuracy");
    table.integer("communication");
    table.integer("cleanliness");
    table.integer("location");
    table.integer("check_in");
    table.integer("value");
  });
})();
