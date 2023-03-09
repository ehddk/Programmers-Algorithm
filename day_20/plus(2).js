function solution(my_string) {
    var answer = [];
    let sum=0;
    for(let i=0;i<my_string.length;i++){
        if(my_string[i]!=isNaN){
            answer.push(my_string[i]);
            sum+=answer[i];
        }
    }
    return sum;
}