// make a 2d array of size rows x cols filled with value
export function makeArray(rows, cols, value) {
  let arr = [];
  for(let i = 0; i < rows; ++i) {
    let row = [];
    for(let j = 0; j < cols; ++j) {
      row.push(value)
    }
    arr.push(row);
  }
  return arr;
}