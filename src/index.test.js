import starWars from './index';
import {expect} from 'chai';

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

    it('should return an array of random items from starWars.all if passed a number', () => {
      const randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach((item) => expect(starWars.all).to.include(item));
    });
  });
});