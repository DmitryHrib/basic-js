const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
    if (options.repeatTimes > 0) {
      for (let i = 0; i < options.repeatTimes; i++) {
        result = result.concat(str);
        if (options.addition || options.addition === false || options.addition === null) {
          if (options.additionRepeatTimes > 0) {
            for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
              result = result.concat(options.addition);
              result = options.additionSeparator ? result.concat(options.additionSeparator) : result.concat('|');  
            }
            result = result.concat(options.addition)
          }  else {
            result = result.concat(options.addition)
          }         
        }
        if (i < options.repeatTimes - 1) {
          result = options.separator ? result.concat(options.separator) : result.concat('+');
        }
      }
    } else {
      result = result.concat(str);
      if (options.addition) {
        result = result.concat(options.addition);
      }
    }
    return result;
}

// function repeater(str, options) {
//   let result = "";
//   if (options.repeatTimes > 0) {
//     for (let i = 0; i < options.repeatTimes; i++) {
//       result = result.concat(str);
//       if (options.addition || options.addition === false || options.addition === null) {
//         if (options.additionRepeatTimes > 0) {
//           for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
//             result = result.concat(options.addition);
//             result = options.additionSeparator ? result.concat(options.additionSeparator) : result.concat('|');
//           }
//           result = result.concat(options.addition);
//         } else {
//           result = result.concat(options.addition);
//         }
//       }
//       if (i < options.repeatTimes - 1) {
//         result = options.separator ? result.concat(options.separator) : result.concat('+');
//       }
//     }
//   } else {
//     result = result.concat(str);
//     if (options.addition) {
//       result = result.concat(options.addition);
//     }
//   }
//   return result;
// }

module.exports = {
  repeater
};
