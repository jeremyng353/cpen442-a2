

let alphabet = ['A', 'B', 'C', 'D', 'E', 
                'F', 'G', 'H', 'I', 'K', 
                'L', 'M', 'N', 'O', 'P', 
                'Q', 'R', 'S', 'T', 'U',
                'V', 'W', 'X', 'Y', 'Z'];

/********************************************************************
                          Shuffled Keys                     
 ********************************************************************/

// the key is some word fit into a 5 x 5 matrix.
// There are a total of 26 letters in English
// There are 25 ways to pick 25 out of 26 letters

//there are 25! ways to rearrange the 25 letters in the 5x5 matrix

// rearrange the 25 letters 
alphabet = alphabet.reverse()
let i = 0;
let keys = permutations(alphabet);
for(let j=0; j<keys.length; j++){
    keys[j] = keys[j].reverse();
}
//keys is an array of all possible keys
// each key is a 25 character long array
// console.log(keys)
// console.log("Total keys = " + keys.length);
// console.log(keys[keys.length-1]);

// source: https://www.30secondsofcode.org/js/s/permutations

function permutations(arr) {
    i += 1;
    if(i >= 100){
        return [];
    }
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
            item,
            ...val,
          ])
        ),
      []
    );
};

/********************************************************************
                         Random Keys                      
 ********************************************************************/

function randomKey() {
  // Assumption: unlikely to repeat a key in repeated calls
  let key = [];
  let takenIndices = [];
  for (let i = 0; i < 25; i++) {
    let idx = -1;
    while (idx < 0 || takenIndices.includes(idx)) {
      idx = Math.floor(Math.random() * 25);
    }
    takenIndices.push(idx);
    key.push(alphabet[idx]);
  }
  return key;
}

export {
  keys,
  randomKey
}