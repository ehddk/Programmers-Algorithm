// function solution(array) {
//     var answer = [];
//     let max=Math.max(array[i]); 
//     for(let i=0;i<array.length;i++){
//         if(array[i]===max){
//              const ind=array.indexOf(max);
//         }
//         answer.push(max,ind);
//     }
//     return answer;
// }
function solution(array) {
    const max=Math.max(...array);
    return  [max,array.indexOf(Math.max(...array))];
    return result;
}