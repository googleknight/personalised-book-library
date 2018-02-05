const request = require('request');

function getRating(id, callback) {
  request(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`, (error, response, body) => callback(JSON.parse(body).rating));
}
module.exports = getRating;
