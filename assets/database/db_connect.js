import { createConnection } from 'mysql';

var con = createConnection({
  host: "mysql1006.mochahost.com",
  user: "fly8574",
  password: "Bvcwn5WV7xvI3Ie"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});