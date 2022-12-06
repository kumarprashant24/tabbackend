require('dotenv').config()
const express = require('express')
const cors = require('cors')
const transactionalRecords = require('./src/app/restful/routes/transactionalRecords')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({
    origin: '*',
    credentials: 'true',
  }),
)
app.get('/', (req, res) => {

  res.send("hello word");
 
});
app.use('/api/account-service/tab/accounts', transactionalRecords)

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
