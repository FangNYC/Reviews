-- DROP DATABASE IF EXISTS staybnb;
CREATE DATABASE staybnb;
\c staybnb;

DROP TABLE IF EXISTS listings;
CREATE UNLOGGED TABLE Listings (
  l_id serial NOT NULL,
  name VARCHAR(50),
  PRIMARY KEY (l_id)
);

ALTER TABLE Listings SET (
  WITH (autovacuum_enabled=false)
)
-- CREATE UNLOGGED TABLE IF NOT EXISTS Users (
--   u_id serial NOT NULL,
--   username VARCHAR(50),
--   display_name VARCHAR(50),
--   photo_url VARCHAR(200),
--   profile_url VARCHAR(200),
--   PRIMARY KEY (u_id)
-- );

-- CREATE UNLOGGED TABLE IF NOT EXISTS Bookings (
--   b_id serial NOT NULL,
--   listings_id INTEGER NOT NULL,
--   users_id INTEGER NOT NULL,
--   stay_start DATE,
--   stay_end DATE,
--   PRIMARY KEY (b_id),
--   FOREIGN KEY (listings_id) REFERENCES Listings(l_id),
--   FOREIGN KEY (users_id) REFERENCES Users(u_id)
-- );

-- CREATE UNLOGGED TABLE IF NOT EXISTS Reviews (
--   r_id serial NOT NULL,
--   bookings_id INTEGER NOT NULL,
--   review_date DATE,
--   review VARCHAR(5000),
--   accuracy INTEGER,
--   communication INTEGER,
--   cleanliness INTEGER,
--   location INTEGER,
--   check_in INTEGER,
--   value INTEGER,
--   PRIMARY KEY (r_id),
--   FOREIGN KEY (bookings_id) REFERENCES Bookings(b_id)
-- );