const Server = require('./server');
const Routes = require('../routes');

describe('Testing the server to handle request', () => {
  test('First api ,should return 200 status code for sucessful GET request', (done) => {
    const request = {
      method: 'GET',
      url: '/mylibrary/',
    };
    Server.inject(request, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
