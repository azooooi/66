const express = require('express')
var bodyParser = require('body-parser');
var multer = require('multer');
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/fuck',(req,res) =>res.send('滚蛋'))
app.post('/login',(req,res)=>{

console.log("-----"+req.body.username)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
