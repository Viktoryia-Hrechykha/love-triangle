/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  let loveTrianglesCount = 0, whoLovedBySp1, whoLovedBySp2, whoLovedBySp3;

  for (let i = 0; i < preferences.length; i++) {
    whoLovedBySp1 = preferences[i] - 1;
    whoLovedBySp2 = preferences[whoLovedBySp1] - 1;
    whoLovedBySp3 = preferences[whoLovedBySp2] - 1;

    if ((whoLovedBySp3 === i) && (whoLovedBySp1 !== whoLovedBySp2) && (whoLovedBySp2 !== whoLovedBySp3) && (whoLovedBySp1 !== whoLovedBySp3)) loveTrianglesCount++;
  }

  return loveTrianglesCount / 3;

};
