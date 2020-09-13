// expressモジュールを読み込む
const express = require('express');
// corsポリシーに抵触するため、その対策としてcorsを利用する
const cors = require('cors');
// const ejs = require('ejs')
const mysql = require('mysql')
const bodyParser = require('body-parser');
// expressアプリを生成する
const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.set('ejs', ejs.renderFile);

const con = mysql.createConnection({
  host: 'miotyon.c0mbtloblzo0.ap-northeast-1.rds.amazonaws.com',
  user: 'tatsuya',
  password: 'zsEdcfTgb!1',
  database: 'mydb'
});
con.connect(function (err) {
  if (err) throw err;
  console.log('Connected');
});



app.get('/', function (req, res) {
  const sql = "select * from todo"
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.send({
      message: result,
    });
  })
});

let num = 4

app.get('/insert', function (req, res) {
  num = num + 1
  const sql = "INSERT INTO todo(idtodo,content,status) VALUES('6','work','done')"
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result)
  })
});


app.post('/', function (req, res) {
  const sql = "select * from todo"
  console.log(req)
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result)
    res.send({
      message: result,
    });
  })
});


// ポート3000でサーバを立てる
app.listen(process.env.PORT || 3000, () =>
  console.log('Listening on port 3000'),
);
