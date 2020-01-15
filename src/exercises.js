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

}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
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
