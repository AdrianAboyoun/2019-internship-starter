function format(table) {
  var most = 0;
  //var least;
  var i;
  var j;
  for (i = 0; i < table.length; i++) {
    for (j = 1; j < table[i].length; j++) {
      if (table[i][j] > most) {
        most = table[i][j];
      }
    }
  }
  for (i = 0; i < table.length; i++) {
    if (most > 9) {
      table[i][0] = " " + table[i][0].toString();
    }
    for (j = 1; j < table[i].length; j++) {
      if (most < 10) {
        if (table[i][j-1] < 10 && table[i][j] < 10) {
          table[i][j-1] = table[i][j-1].toString() + " ";
        }
      }
      else if (most >= 10 && most < 100) {
        if (table[i][j-1] < 10 && table[i][j] >= 10 && table[i][j] < 100) {
          table[i][j-1] = table[i][j-1].toString() + " ";
          table[i][j] = table[i][j].toString();
        }
        else if (table[i][j-1] >= 10 && table[i][j-1] < 100 && table[i][j] >= 10 && table[i][j] < 100) {
          table[i][j-1] = table[i][j-1].toString() + " ";
          table[i][j] = table[i][j].toString();
        }
        else {
          table[i][j-1] = table[i][j-1].toString() + "  ";
        }
      }
      else {
        if (table[i][j-1] < 10) {
          table[i][j-1] = " " + table[i][j-1].toString() + "  ";
        }
        else if (table[i][j-1] < 100 && table[i][j] < 100) {
          table[i][j-1] = table[i][j-1].toString() + "  ";
          table[i][j] = table[i][j].toString();
        }
        else if (table[i][j-1] < 100 && table[i][j] >= 100) {
          table[i][j-1] = table[i][j-1].toString() + " ";
          table[i][j] = table[i][j].toString();
        }
        else if (table[i][j-1] >= 100 && table[i][j] >= 100) {
          table[i][j-1] = table[i][j-1].toString() + " ";
          table[i][j] = table[i][j].toString();
        }
      }
    }
  }
  const tableText = table.map(function(row) {
      return row.join("");
  });

  return "\n" + tableText.join("\n") + "\n";
}

module.exports = { format };
