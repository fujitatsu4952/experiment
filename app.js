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
  const sql = "select * from todo"
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result)
  });
});



app.get('/', function (req, res) {
  res.send('Hello World!');
});

// ルート（http://localhost/）にアクセスしてきたときに「Hello」を返す
// app.get('/', (req, res) => connection.query('select * from title', function (error, results, fields) {
//   if (error) throw error;
//   res.send(results);
// }));
app.post('/', function (req, res) {
  res.send({
    message: req.body.text,
  });
});
app.post('/test', (req, res) => con.query('select * from title', function (error, results, fields) {
  if (error) throw error;
  res.send(results[0]);
}));

// ポート3000でサーバを立てる
app.listen(process.env.PORT || 3000, () =>
  console.log('Listening on port 3000'),
);
