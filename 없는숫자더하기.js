// reduce 함수 살펴보기
function solution(numbers) {
  var answer = 45;
  for(let i = 0; i<10; i++)
  {
    if(numbers.includes(i))
     answer -= i;
  }
  return answer;
}
/**function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
} */

const number = [1,2,3,4,6,7,8,0];
console.log(solution(number));