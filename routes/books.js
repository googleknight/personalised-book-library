const Models = require('../models');
const getFormattedResposne = require('../custom_modules/getFormattedResposne');

module.exports = [{

  // First API - To show data merge from two given apis and send the formatted response
  method: 'GET',
  path: '/mylibrary/',
  handler: (request, response) => {
    getFormattedResposne().then((data) => {
      response(data);
    });
  },
}];
