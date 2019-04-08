function format(table) {
  const double = 10;
  const triple = 100;
  var most = 0;
  var i;
  var j;
  for (i = 0; i < table.length; i++) {
    for (j = 1; j < table[i].length; j++) {
      if (table[i][j] > most)
        most = table[i][j];
    }
  } //finds greatest value in table so it can be formatted accordingly
  for (i = 0; i < table.length; i++) {
    if (most >= double)
      table[i][0] = " " + table[i][0].toString();
      //adds leading space to each row for two and three digit tables
      //(not sure why, but matches tests)
    for (j = 1; j < table[i].length; j++) {
      if (most < double)
        table[i][j-1] = table[i][j-1].toString() + " ";
     // (block above) formats single-digit tables
      else if (most >= double && most < triple) {
        if (table[i][j-1] < triple && table[i][j] >= double && table[i][j] < triple) {
          table[i][j-1] = table[i][j-1].toString() + " ";
          table[i][j] = table[i][j].toString();
        }
        else
          table[i][j-1] = table[i][j-1].toString() + "  ";
      } //formats two-digit tables
      else {
        if (table[i][j-1] < double)
          table[i][j-1] = " " + table[i][j-1].toString() + "  ";
        else if (table[i][j-1] < triple && table[i][j] < triple)
          table[i][j-1] = table[i][j-1].toString() + "  ";
        else if (table[i][j] >= triple)
          table[i][j-1] = table[i][j-1].toString() + " ";
        table[i][j] = table[i][j].toString();
      }//formats three-digit tables
    }
  }
  const tableText = table.map(function(row) {
      return row.join("");
  });
  //converts array of formatted strings into a single string to return.
  return "\n" + tableText.join("\n") + "\n";
}

module.exports = { format };
