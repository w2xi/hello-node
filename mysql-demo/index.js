const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'w2xi',
  password: '123456',
  database: 'node_blog',
  port: 3306,
})

db.connect()

const sql = `select * from blog`

db.query(sql, (err, result) => {
  if (err) {
    console.log('error', err)
  } else {
    console.log('result', result)
    console.log(result.id);
  }
})

db.end()