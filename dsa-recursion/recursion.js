/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {

  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, current=0) {

  if (i === words.length) return current;
  if (words[i].length > current) current = words[i].length;
  return longest(words, i + 1, current);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, result='') {

  if (i >= str.length) return result;
  result += str[i];
  return everyOther(str, i + 2, result);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  let start = i;
  let end = str.length - 1;

  if (start >= end) return true;
  if (str[start] !== str[end - i]) return false;

  return isPalindrome(str, i + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {

  if (i >= arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, reversed='') {

  if (reversed.length === str.length) return reversed;
  reversed += str[str.length - 1 - i]
  return revString(str, i + 1, reversed)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, result=[]) {
  for (item in obj) {
    if (typeof obj[item] === 'object') {
      gatherStrings(obj[item], result);
    }
    if (typeof obj[item] === 'string') {
      result.push(obj[item]);
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start=0, end=arr.length-1) {
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[mid] === val) return mid;
    if (arr[mid] > val) return binarySearch(arr, val, start, mid - 1);
    return binarySearch(arr, val, mid + 1, end);
  }
  return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
