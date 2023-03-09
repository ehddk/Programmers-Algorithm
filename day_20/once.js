
// function solution(s) {
//     let answer=[];
//     let str=s.split('');
    
//     str.forEach((item)=>{
//         if(s.indexOf(item)===s.lastIndexOf(item)){
//             answer.push(item);
//         }
//     })
//     return answer.sort().join("");
// }

// function solution(s){
//     var answer=s.split('');
//     answer.filter(i=>{
//         const str=[...s];
//         str.splice(str.indexOf(i),1);
//         return !str.includes(i);
//     });
// }
function solution(s) {
    return s.split('').filter(i => {
        const exArr = [...s]
        exArr.splice(exArr.indexOf(i), 1)
        return !exArr.includes(i)
    }).sort().join('')
}