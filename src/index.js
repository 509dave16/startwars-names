import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';
const getRandomItem = uniqueRandomArray(starWarsNames);

const random = (number) => {
  if(number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for(var index = 0; index < number; index++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
};

export default {
  all: starWarsNames,
  random
}