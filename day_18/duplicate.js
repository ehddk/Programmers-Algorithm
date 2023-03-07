function solution(my_string){
    let str=my_string.split('');
    for(let i=0;i<str.length;i++){
        if(str.indexOf(i)===-1)
            str.push(i);
    }return str.join('');
}



//set 함수 사용 
//set -> 중복되지 않는 유일한 값들의 집합.
function solution(my_string) {
    var answer = Array.from(new Set(my_string)).join('');
    return answer;
}