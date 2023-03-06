// function solution(order) {
//     var answer = order.split(''); -> 먼저 문자열로 바꿔줘야함.
       var answer=order.toString.split('');
//     let cnt=0;
//     for(let i=0;i<answer.length;i++){
        
//         if(i%3===0){
//             cnt++;
//             answer.push(cnt);
//         }
//     }
//     return answer;
// }

function solution(order){
    let nums=[];
    do{
        nums.push(order%10); 
        order = Math.floor(order / 10) 
    }while(order>0){
        let result=nums.filter((num)=>num!==0 && num%3===0).length;
    
    return result;
    }
}