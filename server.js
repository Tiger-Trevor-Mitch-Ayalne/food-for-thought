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
app.post('/api/v2.1/establishments', (req, res) => {
    const url = `https://developers.zomato.com/api/v2.1/establishments?lat=${req.body.lat}&lon=${req.body.long}`;
    superagent.get(url)
      .set(`user-key`, `c432c4bb526c687aabed6e596d23735f`)
      .then(
        data => res.send(data.text),
        err => res.send(err)
      )
  })

  app.post('/api/v2.1/cuisines', (req, res) => {
    //gets list of cuisines available in local area
    const url = `https://developers.zomato.com/api/v2.1/cuisines?lat=${req.body.lat}&lon=${req.body.long}`;
    superagent.get(url)
      .set(`user-key`, `c432c4bb526c687aabed6e596d23735f`)
      .then(
        data => res.send(data.text),
        err => res.send(err)
      )
  })
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))