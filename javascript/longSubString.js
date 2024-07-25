function lengthOfLongestSubstring(s) {
  let l = 0;
  let r = l+1;
  let string = s.substring(l,r);

  while (r<s.length) {
    if(!string.includes(s[r])) {
      const temp = s.substring(l,++r)
      if (temp.length > string.length) string = temp;
    }
    else if(l === r) r++;
    else l++;
  }
  return string.length;
}

if (require.main === module) {

// add your own tests in here
console.log("Expecting: 3");
console.log("=>", lengthOfLongestSubstring("abcabcbb"));
console.log("=>", lengthOfLongestSubstring("pwwkew"));
}

module.exports = lengthOfLongestSubstring

// Please add your pseudocode to this file
// And a written explanation of your solution