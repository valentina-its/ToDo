const { Sequelize } = require('sequelize');

let con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = sequelize;
