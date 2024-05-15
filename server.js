const express = require('express');
const app = express();
const path = require('path');
const { MongoClient } = require('mongodb')

let db
const url = 'mongodb+srv://admin:svneh03080308@cluster0.gmdhjhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('quack')
}).catch((err)=>{
  console.log(err)
});


app.use(express.static(path.join(__dirname, '/quack/dist')));

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//CSR 하기 위한 코드임. 다른 도메인 주소끼리 ajax 요청을 할때 필요하다고 하는데 뭔지 잘 모르곘음
var cors = require('cors');
app.use(cors());


app.listen(8080, () => {
  console.log('http://localhost:8080 으로 가보셈');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/quack/dist/index.html'))
});

app.get('/dbTest', async (req, res) => {
  let test1 = await db.collection('test1').find().toArray();
  res.json(test1)
})

app.get('*')


