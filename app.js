/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();
const bodyParser = require("body-parser");
// corsポリシーに抵触するため、その対策としてcorsを利用する
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(3000, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

const port = 3000;

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "express_db", //追加
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

app.get("/", (request, response) => {
  const messe = request.text;
  const sql = `"INSERT INTO users(name,email) VALUES("konisi",'kevin@test.com')"`;
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    response.send(result);
  });
});
/* 3. 以後、アプリケーション固有の処理 */

// 写真リストを取得するAPI

app.get("/api/photo/list", (request, response) => {
  const sql = "select * from users";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    response.send(result);
    response.json(result);
  });
});
