const mysql = require('mysql2');

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'26281762',
  database:'inventario'
});
connection.connect((err)=>{
  if (err) {
    console.log('Conexión mala', err.stack)
    return
  }
  console.log('Conectado como id ' + connection.threadId);
})

connection.query('SELECT * FROM articulos',(error,results,fields)=>{
  if (error) throw error
  console.log('Resultados', results)
})
connection.end()