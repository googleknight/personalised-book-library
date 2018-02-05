const getFormattedResposne = require('./getFormattedResposne');

describe('It returns back the formatted output from two apis', () => {
  test('Should be object', () => {
    expect(typeof getFormattedResposne()).toBe('object');
  });
});
