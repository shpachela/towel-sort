
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  
  return matrix.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
      
      acc.push(...curr);
    } else {
      
      acc.push(...curr.reverse());
    }
    return acc;
  }, []);
}
