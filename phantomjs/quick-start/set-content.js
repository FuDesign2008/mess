'use strict';

var webPage = require('webpage');
var page = webPage.create();
var expectedContent = '<html><body><div>Test div</div></body></html>';
var expectedLocation = 'http://www.phantomjs.org/';

page.onLoadFinished = function (status) {
  console.log('load finished: ' + status);
  var content = page.content;
  console.log(content);
};
page.setContent(expectedContent, expectedLocation);
