var _ = require('lodash');
var moment = require('moment');
var axios = require('axios');

var date = '2017-10-01';
var template = `
<h1>Hello myWidget!</h1>
<% var date = moment(data.date, 'Y-M-D') %>
<p>La date est : <%= date.format('D/M/Y') %></p>
<p>La réponse est : <strong><%= data.answer %></strong></p>
<p>L'image est : <a href="<%= data.image %>" target="_blank"><%= data.image %></a></p>
<p><img src="<%= data.image %>" alt="<%= data.answer %>" /></p>
<p><button id="reload">Recharger</button></p>
`;

var compiled = _.template(template, {imports: {'moment': moment}});

exports.display = function(element) {
  axios.get('https://yesno.wtf/api')
    .then(function (response) {
      console.log(response.data);

      var data = {
        date: date,
        answer: response.data.answer,
        image: response.data.image
      };

      element.innerHTML = compiled({'data': data});

      var button = document.querySelector('button');

      button.addEventListener('click', function(event) {
        window.location.reload(true);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

};
