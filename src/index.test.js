var starWars = require('./index');
var expect = require('chai').expect;

describe('starwars-names', () => {
  describe('all', () => {
    it('should be an array of strings', () =>
      expect(starWars.all).to.satisfy(
        array => array.every(item => typeof item === 'string')
      )
    );

    it('should contain `Luke Skywalker`', () =>
      expect(starWars.all).to.include('Luke Skywalker')
    );
  });

  describe('random', () => {
    it('should return a random item from the starWars.all', () =>
      expect(starWars.all).to.include(starWars.random())
    );
  });
});