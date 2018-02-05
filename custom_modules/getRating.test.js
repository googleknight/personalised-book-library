const getRating = require('./getRating');

describe('It returns back rating of the book', () => {
  it('should return 4.45', (done) => {
    function callback(data) {
      expect(data).toBe(4.45);
      done();
    }
    getRating(1, callback);
  });
});

