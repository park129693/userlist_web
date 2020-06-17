var express = require('express') //'()'는 매개 변수, 어떠한 라이브러리를 사용할 때 사용.
var path = require('path')
const { get } = require('http')
var app = express()

app.set('views', path.join(__dirname, '/views')) //__dirname:현재까지의 절대경로 표시
app.set('view engine', 'ejs')

app.use(express.urlencoded()) //.use에 인자값., 미들웨어 사용.  
app.use(express.json()) //.use에 인자값., 미들웨어 사용.


app.get('/hello', (request , respose)=>{
    console.log(request)
    respose.render('hello')
})

//console.log(path.resolve(__dirname + '/views'))
var port = 8000;
app.listen(port, ()=>{
    console.log(`Server is Runnig at http://localhost:8080`) //서버를 실행 nodemon: app.js 수정시 자동 적용.
})