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

  if (!values || values.length < n || n < 0 || !Number.isInteger(n)) {
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


function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
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
