function valid(num) {
  if (num === 45 || num === 46 || num === 95 || (num >= 48 && num <= 57) || (num >= 97 && num <=122))
    return true;
  else
    return false;
}

function solution(new_id) {
  var answer = '';
  let temp = new_id.toLowerCase().split("");
  for(let i = 0; i < temp.length; i++){
    let asc = temp[i].charCodeAt([0]);
    if(!valid(asc))
      delete temp[i];
  }
  answer = temp.toString().replace(/,/g,"").replace(/\.{2,}/g,".");
  if(answer[0] === '.')
    answer = answer.slice(1);
  if(answer[answer.length-1] === '.')
    answer = answer.slice(0,-1);
  if(answer.length == 0)
    answer = 'a';
  if(answer.length>= 16)
  {
    answer = answer.slice(0,15);
    if(answer[answer.length-1] === '.')
      answer = answer.slice(0,-1);
  }
  if (answer.length <= 2)
  {
    while(answer.length < 3)
      answer += answer[answer.length-1];
  }
  return answer;
}
/* 다른 사람의 코드 => 정규 표현식 찾아보자!
function solution(new_id) {
  const answer = new_id
      .toLowerCase() // 1
      .replace(/[^\w-_.]/g, '') // 2
      .replace(/\.+/g, '.') // 3
      .replace(/^\.|\.$/g, '') // 4
      .replace(/^$/, 'a') // 5
      .slice(0, 15).replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
} */

/** 문제 요구 사항
 * 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
 * 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
 * 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
 * 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
 * 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
 * 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
    만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
 * 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
 */

const id = "...!@BaT#*..y.abcdefghijklm";
console.log(solution(id));