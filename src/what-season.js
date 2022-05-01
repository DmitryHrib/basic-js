const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.getOwnPropertySymbols(date).length !== 0) throw new Error ('Invalid date!')  

  let hiclo = date.getMonth();
  if (hiclo === 11 || hiclo <= 1) {
    return 'winter';
  } else if (hiclo <= 4) {
    return 'spring';
  } else if (hiclo <= 7) {
    return 'summer';
  } else {
    return 'autumn';
  }

}

module.exports = {
  getSeason
};
