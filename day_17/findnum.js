// function solution(num, k) {
//     var answer = 0;
//     let nums=num.toString().split('');
//     if(nums.indexOf('k')){
//         return nums.index;
//     }
 
// }

const solution=(num,k)=>[...num].indexOf(k+'')!== -1 ? [...num+''].indexOf(k+'')+1 : -1 ;
return solution;