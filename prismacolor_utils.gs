function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems = [
    {
      name: 'Set cell bg color',
      functionName: 'setBackgroundColor_'
    }
  ];
  spreadsheet.addMenu('Prismacolor Utils', menuItems);
}

function invertColor_(hexTripletColor) {
  var color = hexTripletColor;
  color = color.substring(1);  // remove #.
  color = parseInt(color, 16);  // convert to integer.
  color = 0xFFFFFF ^ color;  // invert three bytes.
  color = color.toString(16);  // convert to hex.
  color = ('000000' + color).slice(-6);  // pad with leading zeros.
  color = '#' + color;  // prepend #.
  return color;
}

function setBackgroundColor_() {
  var range = SpreadsheetApp.getActiveSheet().getActiveRange();
  var rows = range.getNumRows();
  var cols = range.getNumColumns();
  var cell = null;
  var bgColor = null;
  var fontColor = null;
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= cols; j++) {
      cell = range.getCell(i, j);
      cell.setBackground(cell.getValue());
      bgColor = cell.getBackground();
      fontColor = invertColor_(bgColor);
      cell.setFontColor(fontColor);
    }
  }
}
