const $ = require('jquery');
const _ = require('lodash');
require('./bear.css');
require('./index.less');
module.exports = $('<div/>').html('ola lalal alala');

var person = [{
  "id": 1,
  "first_name": "Louis",
  "last_name": "Brooks",
  "email": "lbrooks0@google.cn",
  "gender": "Male",
  "ip_address": "59.143.211.118"
}, {
  "id": 2,
  "first_name": "Carolyn",
  "last_name": "Peterson",
  "email": "cpeterson1@boston.com",
  "gender": "Female",
  "ip_address": "233.196.141.74"
}, {
  "id": 3,
  "first_name": "Joshua",
  "last_name": "West",
  "email": "jwest2@economist.com",
  "gender": "Male",
  "ip_address": "89.55.42.24"
}, {
  "id": 4,
  "first_name": "Antonio",
  "last_name": "Simmons",
  "email": "asimmons3@census.gov",
  "gender": "Male",
  "ip_address": "142.199.179.153"
}, {
  "id": 5,
  "first_name": "Nicole",
  "last_name": "Powell",
  "email": "npowell4@meetup.com",
  "gender": "Female",
  "ip_address": "152.18.247.111"
}, {
  "id": 6,
  "first_name": "Russell",
  "last_name": "Rodriguez",
  "email": "rrodriguez5@barnesandnoble.com",
  "gender": "Male",
  "ip_address": "187.43.226.78"
}, {
  "id": 7,
  "first_name": "Anne",
  "last_name": "Jacobs",
  "email": "ajacobs6@yahoo.co.jp",
  "gender": "Female",
  "ip_address": "154.27.227.217"
}, {
  "id": 8,
  "first_name": "Russell",
  "last_name": "Jenkins",
  "email": "rjenkins7@latimes.com",
  "gender": "Male",
  "ip_address": "99.184.16.71"
}, {
  "id": 9,
  "first_name": "Bruce",
  "last_name": "Lopez",
  "email": "blopez8@skype.com",
  "gender": "Male",
  "ip_address": "197.168.53.207"
}, {
  "id": 10,
  "first_name": "Phillip",
  "last_name": "Campbell",
  "email": "pcampbell9@ebay.co.uk",
  "gender": "Male",
  "ip_address": "17.197.139.247"
}];

console.log(_.head(person),_.last(person));
