//분모의 최소공배수 구하기
function solution(denum1, num1, denum2, num2) {
  const denum = denum1 * num2 + denum2 * num1;
  const num = num1 * num2;

  let minNum;
  if (denum < num) {
    minNum = denum;
  } else {
    minNum = num;
  }

  //나누어 떨어지는지?
  while (true) {
    if (denum % minNum === 0) {
      if (num % minNum === 0) {
        return [denum / minNum, num / minNum];
        //minNum= 최대공약수
      }
    }
    minNum -= 1;
  }
  return answer;
}

//분모분자의 최대공약수로 나눠줌
//그럼? 먼저 . 분모분자중 작은수 찾기
//작은 수로 분모분자 나눠보기
//나눠지면 그 나눈 수(=작은수)가 최대공약수  ex> 7 14 -> 작은수=최대공약수=7
//안나눠지면 작은수에서 -1씩 해본다음 다시 나눠보기
