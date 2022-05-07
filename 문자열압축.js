function solution(s) {
  var answer = s.length;
  const max = answer/2;
  for (let i = 1; i <= max; i++) {
    let arr = [];
    let index = 0;
    while (s.length - index >= i) {
      arr.push(s.substr(index, i));
      index += i;
    }
    if (index < s.length)
      arr.push(s.substr(index));
    let temp = [];
    for (let j = 0; j < arr.length; j++) {
      let count = 1;
      while (arr[j] == arr[j + 1]) {
        j++;
        count++;
      }
      temp.push(count);
      index += 1;
    }
    let length = 0;
    for (num of temp) {
      if (num >= 1000) {
        length += (i + 4)
      } else if (num >= 100) {
        length += (i + 3)
      } else if (num >= 10) {
        length += (i + 2)
      }
      else if (num > 1) { length += (i + 1) }
      else {
        length += i;
      }
    }
    let last_len = arr.pop().length;
    if (last_len < i)
      length = length - i + last_len;
    if (answer > length)
      answer = length;
  }
  return answer;
}

const str = "aaacdacdaiowjefioaejiof"
console.log(solution(str));