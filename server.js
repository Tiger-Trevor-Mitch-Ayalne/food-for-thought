const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const superagent = require('superagent');
const pg = require('pg');
const fs = require('fs');
// const conString = 'postgres://postgres:1234@localhost:5432/grub';

// const client = new pg.Client(conString);

// client.connect();

const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(cors())
app.get('/', (req, res) => {
  res.sendFile('index.html')
})
app.get('/api/v2.1/geocode', (req, res) => {
  //https://developers.zomato.com/api/v2.1/geocode?lat=47.5324723999&lon=-122.2721882

    const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${req.query.lat}&lon=${req.query.long}`;
    console.log('new url',url)
    superagent.get(url)
      .set(`user-key`, `c432c4bb526c687aabed6e596d23735f`)
      .then(
        data => res.send(data.text),
        err => res.send(err)
      )
  })
//https://developers.zomato.com/api/v2.1/reviews?res_id=16726738&count=100
app.get('/api/v2.1/reviews', (req, res) => {
    const url = `https://developers.zomato.com/api/v2.1/reviews?res_id=${req.query.id}&count=100`;
    console.log('new url',url)
    superagent.get(url)
      .set(`user-key`, `c432c4bb526c687aabed6e596d23735f`)
      .then(
        data => res.send(data.text),
        err => res.send(err)
      )
  })

  // app.post('/user', (request, response) => {

  //   client.query(
  //     `INSERT INTO
  //     users(name, email, password)
  //     VALUES ($1, $2, $3);
  //     `,
  //     [
  //       request.body.name,
  //       request.body.email,
  //       request.body.password
  //     ]
  //   )
  //     .then(function() {
  //       response.send('insert complete')
  //     })
  //     .catch(function(err) {
  //       console.error(err);
  //     });
  // });

app.get('/*', cors(),(request, response) => {
    response.sendFile('index.html', { root: './public' });
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

// loadDB();

// /////database loader //////
// function loadArticles() {
//   // COMMENT: What number(s) of the full-stack-diagram.png image correspond to the following line of code? Which method of article.js is interacting with this particular piece of `server.js`? What part of CRUD is being enacted/managed by this particular piece of code?
//   // PUT YOUR RESPONSE HERE
//   client.query('SELECT COUNT(*) FROM users')
//     .then(result => {
//     // REVIEW: result.rows is an array of objects that PostgreSQL returns as a response to a query.
//     // If there is nothing on the table, then result.rows[0] will be undefined, which will make count undefined. parseInt(undefined) returns NaN. !NaN evaluates to true.
//     // Therefore, if there is nothing on the table, line 158 will evaluate to true and enter into the code block.
//       if(!parseInt(result.rows[0].count)) {
//         ///home/tigerhsu/code-301/food-for-thought/public/scripts/sample_users.json
//         fs.readFile('./public/scripts/sample_users.json', 'utf8', (err, fd) => {
//           JSON.parse(fd).forEach(ele => {
//             client.query(`
//               INSERT INTO
//               users(name, email, password)
//               VALUES ($1, $2, $3);
//             `,
//               [ele.name, ele.email, ele.password]
//             )
//           })
//         })
//       }
//     })
// }

// function loadDB() {
//   // COMMENT: What number(s) of the full-stack-diagram.png image correspond to the following line of code? Which method of article.js is interacting with this particular piece of `server.js`? What part of CRUD is being enacted/managed by this particular piece of code?
//   // PUT YOUR RESPONSE HERE
//   client.query(`
//     CREATE TABLE IF NOT EXISTS users (
//       user_id SERIAL PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       password VARCHAR(255) NOT NULL);`
//   )
//     .then(() => {
//       loadArticles();
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }