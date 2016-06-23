/** @fileoverview See Prismacolor website:
 * PM: http://www.prismacolor.com/products/art-markers/double-ended
 * PB: http://www.prismacolor.com/products/art-markers/brush-tip-markers
 */
function _scrape(markerType) {
  var palette = {};
  for (var each in colorbar.childNodes) {
    var elem = colorbar.childNodes[each];
    if (elem.getAttribute) {
      var title = colorbar.childNodes[each].getAttribute('title');
      var separator = ' ' + markerType + ' ';
      var tokens = title.split(separator);
      var pm = {};
      pm.id = markerType + '-' + tokens[1];
      pm.name = tokens[0];
      pm.color = elem.style.background;
      palette[markerType + '-' + tokens[1]] = pm;
    }
  }
  console.log(palette);
}

function scrapePB() {
  _scrape('PB');
}

function scrapePM() {
  _scrape('PM');
}

scrapePB();
