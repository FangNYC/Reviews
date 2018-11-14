const data = require('./generateData.js');
const db = require('./index.js');

// console.log('data collection', data.reviewCollection);

(async() => {
  console.time('reviewData');
  for (var i = 0; i < 1000; i++) {
    await new Promise(resolve => {
      resolve(data.reviewCollection());
    })
      .then(async result => {
        await db.Review.insertMany(result)
      })
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      })
    }
    console.timeEnd('reviewData')
})()


