/*
 * Given a list of numbers and a number `k`, return whether
 * any two numbers from the list add up to `k`
 *
 * For example, given [10, 15, 3, 7] and `k` of 17, return true
 * since 10 + 7 is 17.
 *
 * Bonus: Can you do this in one pass?
 */

const checkForNum = (arr, k) => {
  let tmp = null
  let check = 0
  for (let i = 0; i <  arr.length; i++) {
    tmp = arr[i]
    check = k - tmp
    arr[i] = null
    if (arr.includes(check)) {
      return true
    }
    arr[i] = tmp
  }
  return false
}

console.log(checkForNum([10, 15, 3, 7], 25))
console.log(checkForNum([10, 15, 3, 7], 13))
console.log(checkForNum([10, 15, 3, 7], 17))
console.log(checkForNum([10, 15, 3, 7], 18))
console.log(checkForNum([10, 15, 3, 7], 22))
console.log(checkForNum([10, 15, 3, 7], 10))
console.log(checkForNum([10, 15, 3, 7], 42))
