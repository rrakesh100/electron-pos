var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run("CREATE TABLE dummy (info TEXT)");

  var stmt = db.prepare("INSERT INTO dummy VALUES (?)");
  for (var i = 0; i < 10; i++) {
    stmt.run("data " + i);
  }

  stmt.finalize();

  var rows = document.getElementById("database");
  db.each("SELECT rowid AS id, info FROM dummy", function(err, row) {
    var item = document.createElement("li");
    item.textContent = "" + row.id + ": " + row.info;
    rows.appendChild(item);
  });
});

db.close();
