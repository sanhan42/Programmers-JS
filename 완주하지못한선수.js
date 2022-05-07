function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for(let i = 0; i < completion.length; i++){
    if(participant[i] !== completion[i]){
      return participant[i];
    }
  }
  return participant[participant.length-1];
}
// var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))
const p = ["marina", "josipa", "nikola", "vinko", "filipa"];
const c = ["josipa", "filipa", "marina", "nikola"];

console.log(solution(p,c));