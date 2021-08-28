const DEFAULT_ID_LENGTH = 7;
const DEFAULT_CHARS_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
/**
 * Random ID generator
 * @param {Object} options The options object
 * @param {number} options.length The length of the ID, default is 7
 * @param {string} options.set A set to choose ID characters from
 * */
function generateRandomId(options = {}) {
  if(typeof options !== "object"){
    throw Error("Options should be an array of available options, mentioned in the doc");
  }
  const length = options.hasOwnProperty("length") ? options.length : DEFAULT_ID_LENGTH;
  const set = options.hasOwnProperty("set") ? options.set : DEFAULT_CHARS_SET;

  let autoId = "";
  for (let i = 0; i < length; i++) {
    autoId += set.charAt(Math.floor(Math.random() * set.length));
  }
  return autoId;
}

exports.default = generateRandomId;
