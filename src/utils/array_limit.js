export function arrLimit(num, arr) {
  if (arr.length <= num) {
    return arr;
  }
  arr.length = num;
  return arr;
}
