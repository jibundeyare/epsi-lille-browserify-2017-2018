var $ = global.$ = global.jQuery = require('jquery');
var bootstrap = require('bootstrap');
var myWidget = require('./myWidget.js');

$(document).ready(function() {
  console.log('ready');

  var widgetContainer = document.querySelector('#widget-container');
  myWidget.display(widgetContainer);
});
