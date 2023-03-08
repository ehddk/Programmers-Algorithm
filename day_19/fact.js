function solution(n) {
    let result=1;
    for(let i=1;i<=n;i++){
        result*=i;
        
        if(result === n){
            return i;
        }
        if(result > n){
            return i-1;
        }
    }
}

//다른 풀이
function solution(n){
    var answer=1;
    var a=0;
    while(answer <= n){
        a++;
        answer*=a;
    }return a-1;
}