-- DROP DATABASE IF EXISTS staybnb;
-- CREATE DATABASE staybnb;
\c staybnb;

DROP TABLE Reviews;
DROP TABLE Bookings;
DROP TABLE Users;
DROP TABLE Listings;

CREATE UNLOGGED TABLE Listings (
  l_id serial NOT NULL,
  description VARCHAR(50),
  PRIMARY KEY (l_id)
);

-- ALTER TABLE listings SET UNLOGGED;

COPY listings (description) FROM '/Users/maria/Documents/HR/Week8/Reviews/database/listings.csv';

CREATE UNLOGGED TABLE Users (
  u_id serial NOT NULL,
  username VARCHAR(100),
  display_name VARCHAR(100),
  photo_url VARCHAR(200),
  profile_url VARCHAR(200),
  PRIMARY KEY (u_id)
);

COPY users (username, display_name, photo_url, profile_url) FROM '/Users/maria/Documents/HR/Week8/Reviews/database/users.csv' DELIMITERS ',' CSV;

CREATE UNLOGGED TABLE Bookings (
  b_id serial NOT NULL,
  listings_id INTEGER NOT NULL,
  users_id INTEGER NOT NULL,
  stay_start VARCHAR(50),
  stay_end VARCHAR(50),
  PRIMARY KEY (b_id),
  FOREIGN KEY (listings_id) REFERENCES Listings(l_id),
  FOREIGN KEY (users_id) REFERENCES Users(u_id)
);

COPY bookings (listings_id, users_id, stay_start, stay_end) FROM '/Users/maria/Documents/HR/Week8/Reviews/database/bookings.csv' DELIMITERS ',' CSV;

CREATE UNLOGGED TABLE Reviews (
  r_id serial NOT NULL,
  bookings_id INTEGER NOT NULL,
  review_date VARCHAR(50),
  review VARCHAR(5000),
  accuracy INTEGER,
  communication INTEGER,
  cleanliness INTEGER,
  location INTEGER,
  check_in INTEGER,
  value INTEGER,
  PRIMARY KEY (r_id),
  FOREIGN KEY (bookings_id) REFERENCES Bookings(b_id)
);

COPY reviews (bookings_id, review_date, review, accuracy, communication, cleanliness, location, check_in, value) FROM '/Users/maria/Documents/HR/Week8/Reviews/database/reviews.csv' DELIMITERS ',' CSV;
