const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000


app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({    
 extended: true})); 
app.use(cors())
app.get('/', (req, res)=>{
res.send("Welcome to your server")
})


app.post('/login', (req, res) =>{
    console.log(req.body.billy) 
    console.log(req.body.biolet) 
    console.log(req.body.blondie) 
    console.log(req.body.bela) 
    console.log(req.body.blue) 
    console.log(req.body.blissy)
})

app.post('/signup', (req, res) =>{
    console.log(req.body.billy) 
    console.log(req.body.biolet) 
    console.log(req.body.blondie) 
    console.log(req.body.bela) 
    console.log(req.body.blue) 
    console.log(req.body.blissy)
})

app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})
