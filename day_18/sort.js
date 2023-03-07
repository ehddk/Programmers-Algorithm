function solution(my_string) {
    var answer = my_string.toLowerCase();
    var result=answer.split('').sort().join('');
    return result;
}