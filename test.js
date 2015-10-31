var NBCReader = require('./index');
var toMarkdown = require('./markdown');
var reader = new NBCReader();

var sampleDom = '<p>test text node <a href="http://google.com"><p>this whole 2 par is link</p><p>im serious</p></a></p>';

var xmldom = new require('xmldom');
DOMParser = new xmldom.DOMParser({
   errorHandler: {
      warning: function() {/* Ignore */},
      error: function() {/* Ignore */}
   }
});
var dom = DOMParser.parseFromString(sampleDom);

reader.read('http://www.nbcnews.com/news/world/russian-passenger-plane-disappears-radar-n454971');