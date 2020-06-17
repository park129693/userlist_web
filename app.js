var express = require('express') //'()'는 매개 변수, 어떠한 라이브러리를 사용할 때 사용.

var app = express()

var port = 8000;

app.listen(port, function(){
    console.log(`Server is Runnig at http://localhost:8080`) //서버를 실행 nodemon: app.js 수정시 자동 적용.
})