const express = require('express')

const app=express()
const sum = require('./sum')
var boyParse = require('body-parser');
const { Console } = require('console');

app.use(boyParse());

app.post('/get_num',function(req,res){
    let result = req.body
    console.log(result)
    let a = parseInt(result.a)
    let b = parseInt(result.b)
    result = add(a,b)
    console.log(result)
    res.send(result.toString())

})

app.get('/',function (req,res){
    res.send('欢迎来到express服务！')
})
app.listen(3000,()=>{
    console.log("开启服务，端口3000")
})
