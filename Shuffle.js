/**
 * Randomize array element order in-place 

 * Using the Durstenfeld shuffle algorithm.
 * Copied from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * 
 * @author: https://stackoverflow.com/users/310500/laurens-holst
 * @param array: the array to shuffle
 * @returns: the shuffled array (for convenience)
 */
export function shuffleArray(array) {
  let firstVar = array[0];
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  for (let k = 0; array.length > k; k++) {
    if (array[k] === firstVar) {
      array = array.slice(0,k).concat(array.slice(k+1,array.length))
      
    }
  }
  array.unshift(firstVar);
  return array;
}