const express = require('express')
const path = require('path')
const student = require('./routes/students')
const sayHi = require('./sayHi')

//invoke express
const app = express()

//init middlewere parser
app.use(express.json())

//middleware (static foldr)
app.use(express.static(path.join(__dirname, 'public')))
app.use(sayHi)
app.use('/api', student)


//server listen on port 5000
app.listen(5000, (err) => {
    if(err){
        throw err
    }else{
        console.log(`SERVER IS RUNNING...`)
    }
})