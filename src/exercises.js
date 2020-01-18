function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  afirst = a[0];
  bfirst = b[0];
  alast = a[a.length - 1];
  blast = b[b.length - 1]

  if (afirst === bfirst) {
  return true;
  } else if (alast === blast) {
    return true;
  } else {
    return false;
}
}

function endsMeet(values, n) {
  let new_array = [];

  if (!values || values.length < n || n <= 0 || !Number.isInteger(n)) {
    return new_array;
  } else {
      if (n === 0) {
        return values;
      } else {
        for (let z = 0; z < n; z++) {
          if (!(values[z] === undefined)) {
            new_array.push(values[z]);
          }
        }
        for (let z = n; z > 0; z--) {
          if (!(values[values.length - z] === undefined)) {
            new_array.push(values[values.length - z]);
          }
        }
        return new_array;
      }
   }
}

function difference(numbers) {

let minimum = Number(Math.min.apply(null, numbers));
let maximum = Number(Math.max.apply(null, numbers));

  if (!numbers || numbers.length < 1 || numbers.some(isNaN)) {
    return undefined;
  } else {
    let answer = maximum - minimum;
    return answer;
    }
}

function max(numbers) {
  if (!numbers || numbers.length % 2 === 0 || numbers.length < 3 || !isNumeric(numbers)) {
    return undefined;
  } else {
    let newArray = [];
    let first = numbers[0];
    let last = numbers[numbers.length - 1];
    let middle = numbers[Math.floor(numbers.length/2)];
    newArray.push(first, middle, last);
    let maximum = Number(Math.max.apply(null, newArray));
    return maximum;
  }
}

function isNumeric(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      return false;
    }
  }

  return true;
}

function middle(values) {
  if (!values || values.length % 2 === 0 || values.length < 3) {
    return [];
  } else {
    let newArray = [];
    let mid = Math.floor(values.length/2);
    newArray.push(values[mid - 1], values[mid], values[mid + 1]);
    return newArray;
  }
}

function increasing(numbers) {
  let num = numbers;
  if (!num || num.length < 3 || num.some(isNaN)) {
    return false;
  }
  for (x = 0; x < num.length; x++) {
    if (num[x] % 1 != 0) {
      return false;
    }
  }
  let cnt = 0
  let final = -1
  for (z = 0; z < num.length; z++) {
    if (num[z] === final + 1) {
      final = num[z]
      if (num[z + 1] === final + 1) {
        return true;
        cnt = 1;
        break;
      }
      else {
      final = -1;
    }
      }
    else {
      final = num[z];
    }
  }
  if (cnt === 0) {
    return false;
  }
}


function everywhere(values, x) {

let num1;
let num2;
let num3;
let cnt;
let val = values;

if (!val || val.length < 1 || !x) {
  return false;
} else {
  for (let w = 0; w < val.length - 1; w++) {
    if (val[w].isNaN) {
      return false;
      cnt = false;
    }
  }
  for (let z = 0; z < val.length - 1; z++) {
    if (z === 0) {
      if (val[z] === x) {
        cnt = true;
      } else if (val[z + 1] === x) {
        cnt = true;
      } else {
        return false;

      }
  } else if (z === (val.length - 1)) {
    if (val[z] === x) {
      cnt = true;
    } else if (val[z - 1]) {
      cnt = true;
    } else {
      return false;
      cnt = false;
    }
 } else {
   num1 = val[z - 1];
   num2 = val[z];
   num3 = val[z + 1];
   if (num1 === x) {
     cnt = true;
   } else if (num2 === x) {
     cnt = true;
   } else if (num3 === x) {
     cnt = true;
   } else {
     return false;
     cnt = false;
   }
 }
  }
  if (cnt === false) {
    return false;
  } else {
    return true;
  }
}
}

function consecutive(numbers) {
let num = numbers
let cnt;
let num1;
let num2;
let num3;

if (!num || num.length < 3 || num.some(isNaN)) {
  return false;
  cnt = false;
} else {
    for (let x = 0; x < num.length - 1; x++) {
      if (Number.isInteger(num[x] !== true)) {
        return false;
        cnt = false;
      }
    }
    for (let z = 0; z < numbers.length - 2; z++) {
      num3 = num[z + 2];
      num2 = num[z + 1];
      num1 = num [z];

    if (num3 % 2 === 0 && num2 % 2 === 0 && num1 % 2 === 0) {
      return true;
      cnt = true;
    } else if (num3 % 2 === 1 && num2 % 2 === 1 && num1 % 2 === 1) {
      return true;
      cnt = true;
    }
}
if (cnt == true) {
  return true;
} else {
  return false;
}
}
}
function balance(numbers) {
let sumHalf;
let sumB = 0;
let cnt;
let sumOne = 0;

if (!numbers || numbers.length < 2 || numbers.some(isNaN)) {
    return false;
    cnt = false;
    } else {
    for (let x = 0; x < numbers.length - 1; x++) {
        if (Number.isInteger(numbers[x]) === false){
            return false;
            cnt = false;
        }
    }
    for (let i = 0; i < numbers.length; i++){
        sumOne = sumOne + numbers[i];
      }
    sumHalf = sumOne / 2;
    if(sumOne % 2 === 1) {
        return false;
        cnt = false;
    }
    for (let w = 0; w < numbers.length - 1; w++) {
        sumB = sumB + numbers[w];
        if (sumB === sumHalf) {
            return true;
            cnt = true;
        }
    }
    if (cnt === true) {
        return true;
    } else {
        return false;
    }
}
}

function clumps(values) {
let clumpFinalIndex;
let clump = 0;
let value;
let sameValues;

if (!values) {
  return -1;
} else {
   for (let w = 0; w < values.length - 1; w++) {
       let test2 = w + 1;
       let test1 = w;
       value = values[test1];
       sameValues = values[test2];
       if (value === sameValues) {
           while (value === sameValues) {
               value = values[test1++];
               sameValues = values[test2++];
            }
           clump++;
           clumpFinalIndex = test1 - 1;
           w = clumpFinalIndex;
        }
     }
      return clump;
   }
}


/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
