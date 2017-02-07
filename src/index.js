const stripPound = hex => hex.replace(/^#/, '');
const convertShortHex = hex =>
  `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;

module.exports = hexadecimal => {
  if (Object.prototype.toString.call(hexadecimal) === '[Object String]') {
    throw new TypeError(`Expected ${hexadecimal} to be a string.`);
  }

  let hex = stripPound(hexadecimal);

  if (hex.length === 3) hex = convertShortHex(hex);

  const int = parseInt(hex, 16);

  return [int >> 16, int >> 8 & 255, int & 255];
};
