function solution(array,n){ // [18,11,24] n=20 일때
    var answer=[];
    for(let i=0;i<Array.length;i++){
        answer.push(Math.abs(array[i]-n)); // [2,9,4]
    }
    const a=Math.min(...answer);  //2

    return n-a; // 20-2=18이 원래 배열의 수니까 18출력. 이 수식은 어느 배열,n에서든 성립!

}

//다른 풀이
function solution(array, n) {
        let ans = [];
        
        array.forEach((item) => {
            ans.push(Math.abs(item - n));
        })
        
        const min = Math.min(...ans);
        
        let check = [];
        
        for(let index = 0; index < ans.length; index++){
            if(ans[index] === min){
                check.push(array[index]);
            }
        }
        
        return Math.min(...check);
    }