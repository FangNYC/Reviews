# Reviews

The Reviews module displays reviews and ratings for a specific accommodation listing. Below is a preview of the deployed service.

![](https://github.com/FangNYC/Reviews/blob/master/reviews.gif)

## Related Projects

- https://github.com/FangNYC/Booking
- https://github.com/FangNYC/Neighborhood
- https://github.com/FangNYC/Description

## Development

### Installing dependencies

```sh
npm install
```

The microservice accesses data from a Postgres database that stores information about listings, users, bookings and reviews.

1. Create a database named "staybnb"
2. Set up a `dbConfig.js` in the database/sql directory with the following structure:

```js
module.exports = {
  user: "your_username",
  password: "your_password",
};
```

3. Run the following command in the root directory to populate it with data.

```sh
npm run seed
```

### Launching the application locally

From within the root directory:

```sh
# run webpack to build bundle
npm run dev:build-server

# start server on localhost
npm run dev:start
```

Access the application at: http://localhost:7000/listing?id=# with # representing any integer from 1 to 1000000. For example, access listing 19's information at http://localhost:7000/listing?id=19.

## API Specs

### GET /reviews

Retrieve reviews and ratings for a listing.

```sh
# query string
id: integer
```

#### GET response example (application/json)

```text
[
    {
        "review_description": "Necessitatibus beatae dolorem assumenda rerum quos enim. Expedita cumque reprehenderit autem. Aspernatur ut nam debitis sequi culpa aut aperiam perspiciatis. Voluptatem beatae voluptatum. Excepturi nulla molestiae eveniet dolores sed quis perspiciatis. Rerum praesentium debitis.",
        "photo_url": "https://picsum.photos/100/?random&t=1543943289966",
        "display_name": "Derek",
        "review_date": "2018-11-12"
    },
    {
        "review_description": "Sequi aut nihil. Consectetur numquam vitae magnam. Recusandae saepe dolorem accusamus excepturi vitae libero. Non rerum rerum ut molestiae velit. Facere dicta id dolores ratione harum. Iure nihil explicabo delectus.",
        "photo_url": "https://picsum.photos/100/?random&t=1543943283971",
        "display_name": "Gillian",
        "review_date": "2018-01-02"
    },
    {
        "review_description": "Ab omnis harum commodi aut cum. Porro officia vitae debitis et sint iure quae mollitia. Optio illo eum ut optio et nobis quo dignissimos hic. Nulla nostrum aut facere eos error possimus quae. Doloribus neque delectus quo deleniti nisi accusantium quae et excepturi. Sunt dolores repellat debitis in ea dolorum nisi eos quis.",
        "photo_url": "https://picsum.photos/100/?random&t=1543943278569",
        "display_name": "Carolanne",
        "review_date": "2017-03-23"
    },
    {
        "review_description": "Enim molestias voluptas rerum autem nemo quia occaecati sit possimus. Facilis dolorem quibusdam reprehenderit. Fugiat porro debitis at esse perferendis dolorem quisquam sunt earum. Excepturi dolore porro temporibus itaque sunt sit odit nobis. Tempore placeat quidem quia perspiciatis et amet optio dolorem et.",
        "photo_url": "https://picsum.photos/100/?random&t=1543943292132",
        "display_name": "William",
        "review_date": "2016-05-01"
    },
    {
        "review_description": "Fugiat nam reprehenderit. Provident pariatur culpa ad rerum. Rerum quas amet perspiciatis. Labore autem sapiente maiores.",
        "photo_url": "https://picsum.photos/100/?random&t=1543943280038",
        "display_name": "Esther",
        "review_date": "2016-03-26"
    }
]
```

### POST /reviews

Review and rate a listing.

```sh
# query string
id: integer
```

```sh
# request body (application/json)
bookings_id: integer
review_date: varchar (yyyy-mm-dd)
review_description: varchar(5000)
accuracy: integer
communication: integer
cleanliness: integer
location: integer
check_in: integer
value: integer
```

Example of request body
```json
{
    "bookings_id": 100002,
    "review_date": "2014-12-25",
    "review_description": "Officia qui modi. Delectus ut quo alias laudantium deserunt distinctio placeat sit et. Quasi magnam ea dolores qui vel. Repellat neque aut quia odit quidem aut et quam commodi.",
    "accuracy": 4,
    "communication": 5,
    "cleanliness": 4,
    "location": 3,
    "check_in": 5,
    "value": 4
}
```

#### POST response example (application/json)

```json
{
  "review is posted"
}
```

### PUT /reviews

Update existing review and ratings for a listing.

```sh
# query string
id: integer
```

```sh
# request body (application/json)
review_description: varchar(2000)
accuracy: integer
communication: integer
cleanliness: integer
location: integer
check_in: integer
value: integer
```

Example of request body
```json
{
    "review_description": "Officia qui modi. Delectus ut quo alias laudantium deserunt distinctio placeat sit et. Quasi magnam ea dolores qui vel. Repellat neque aut quia odit quidem aut et quam commodi.",
    "accuracy": 4,
    "communication": 5,
    "cleanliness": 4,
    "location": 3,
    "check_in": 5,
    "value": 4
}
```

#### PUT response example (application/json)

```json
{
  "review is updated"
}
```

### DELETE /reviews

Remove a review for a listing.

```sh
# query string
id: integer
```

#### DELETE response example (application/json)

```json
{
  "review is deleted"
}
```

## Data Schema

![](https://github.com/FangNYC/Reviews/blob/master/dataSchema.png)