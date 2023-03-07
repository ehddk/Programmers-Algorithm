// function solution(n){
//     var answer=0;

//     //소수인지?
//     function isPrime(n){ //만약 n=10이면?
//         for(let i=2;i<=n;i++){
//             if(n%i===0)
//                 return true;
//         }return false;

//     }
//     for(let i=0;i<=n;i++){
//         if(isPrime(i))
//             answer++;
//     }
//     return result;
// }



function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count >= 3) answer++;
    }
    return answer;
}