module.exports = function check(str, bracketsConfig) {
  let res = [];
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j].includes(str[i])) {
        res.push(true);
      }
    }
  }

  if (str.length > 2 && str.length % 2 !== 0) {
    return false;
  }
  if (str.length === res.length) {
    return true;
  } else {
    return false;
  }
}

