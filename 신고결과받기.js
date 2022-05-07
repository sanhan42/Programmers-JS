function solution(id_list, report, k) {
  var answer = [];
  
  const set = new Set(report);
  let uniqueReport = [...set];
  const repoTable = [];
  for (repo of uniqueReport) {
    let temp = repo.split(' ');
    repoTable.push(temp);
  }
  // let repoTable = [...new Set(report)].map(a=>{return a.split(' ')});
  
  let reportedId = [];
  for (let i = 0; i < uniqueReport.length; i++) {
    reportedId.push(repoTable[i][1]);
  }
  const result = reportedId.reduce((accu, curr) => {
    accu.set(curr, (accu.get(curr) || 0) + 1);
    return accu;
  }, new Map());
  let out = [];
  for (let [key, value] of result.entries()) {
    if (value >= k) out.push(key);
  }
  for (id of id_list) {
    let num = 0;
    for (let i = 0; i < repoTable.length; i++) {
      if (id === repoTable[i][0]) {
        for (outId of out) {
          if (repoTable[i][1] === outId) {
            ++num;
            break;
          }
        }
      }
    }
    answer.push(num);
  }
  return answer;
}
/* 다른 사람 코드
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map(a=>{return a.split(' ')});
  let counts = new Map();
  for (const bad of reports){
      counts.set(bad[1],counts.get(bad[1])+1||1)
  }
  let good = new Map();
  for(const report of reports){
      if(counts.get(report[1])>=k){
          good.set(report[0],good.get(report[0])+1||1)
      }
  }
  let answer = id_list.map(a=>good.get(a)||0)
  return answer;
} */

const id_list = ['con', 'ryan'];
const report = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
const k = 3;
solution(id_list, report, k);