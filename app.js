var express = require('express') //'()'는 매개 변수, 어떠한 라이브러리를 사용할 때 사용.
var path = require('path')
var mysql = require('mysql')
var app = express()

sql_config = {
    host:'localhost',
    user:'root',
    password:'1234',
    database:'o2'
}
var db = mysql.createConnection(sql_config)

db.connect()

app.set('views', path.resolve(__dirname + '/views')) //__dirname:현재까지의 절대경로 표시
app.set('view engine', 'ejs')

app.use(express.json()) //.use에 인자값, 미들웨어 사용.
app.use(express.urlencoded({extended:false})) //.use에 인자값, 미들웨어 사용.  


app.get('/hello', (request, respose)=>{
   // console.log(request)
    var name = "참치"
    respose.render('hello',{data:name})
})

app.get('/data', (req, res)=>{
    var sql = 'SELECT * FROM topic'
    db.query(sql, (err, result)=>{
        if(err){
            console.log(err)
        } else {
            console.log(result)
            //res.send(result[0].auther)
            //res.send(`${result[0].auther} 수업은 ${result[0].title}`)
            res.render(`data`, {data:result})
        }
    })
})

//console.log(path.resolve(__dirname + '/views'))
var port = 8000;
app.listen(port, ()=>{
    console.log(`Server is Runnig at http://localhost:${port}`) //서버를 실행 nodemon: app.js 수정시 자동 적용.
})