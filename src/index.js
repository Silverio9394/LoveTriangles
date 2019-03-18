/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0; 
  for (var i = 0, length = preferences.length; i < length ; i++) {
    let value = preferences[i] - 1;
    if (value == i) continue;
    let value2 = preferences[value] - 1;
    if (value == value2) continue;
    let value3 = preferences[value2] - 1;
    if (value3 == value2) continue;
    if (value3 == i) {
    count++;
  }
 } 
 return count / 3;
};
