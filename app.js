const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 3000
app.use(express.static('public'));

app.get('/', (req, res) => {res.send('Hello World!') })
app.get('/user/motherfucker',(req,res)=>{res.send('123')})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

