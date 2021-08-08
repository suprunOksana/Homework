
const str = 'Hillel';

function reverse(str) { 
  const result = str.split('').reverse().join('');
  getHistory('getPart', str, result);
  return result;
}

function nTimes(str, times) { 
  const result = str.repeat(times);
  getHistory('getPart', str, result);
  return result;
}

function removeDuplicates(str) { 
  const result = str.split("").filter(function (x, n, s) { return s.indexOf(x) == n }).join("");
  getHistory('removeDuplicates', str, result);
  return result;
}

function getPart(str) { 
  const result = str.slice(0, str.length / 2);
  getHistory('getPart', str, result);
  return result;
}

const history = [];
function getHistory(func, str, result) { 
  history.push(`${func}, ${str}, ${result}`);
  return history.join("\n");
}

export {
  str,
  reverse,
  nTimes,
  removeDuplicates,
  getPart,
  getHistory
};
