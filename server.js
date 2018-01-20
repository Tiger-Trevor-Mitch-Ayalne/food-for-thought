const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const superagent = require('superagent');


const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(cors())
app.get('/', (req, res) => {
  res.sendFile('index.html')
})
app.get('/api/v2.1/geocode', (req, res) => {
    const url = `https://developers.zomato.com/api/v2.1/geocode?${req.query.lat}&lon=${req.query.long}`;
    superagent.get(url)
      .set(`user-key`, `c432c4bb526c687aabed6e596d23735f`)
      .then(
        data => res.send(data.text),
        err => res.send(err)
      )
  })

app.get('/*', cors(),(request, response) => {
    response.sendFile('index.html', { root: './public' });
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))