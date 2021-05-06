const express = require('express')
const app = express()

app.get('/',function(req,res) {
    console.log('请求成功')
    res.render('../build/index.html')
})
app.listen(5000,err =>{
    if(!err) {
        console.log('the port 5000 is running...')
    }
})