function solution(i,j,k){
    var answer=[];
    for(let a=i;a<=j;a++){
        answer.push(a);
    }
    return answer.split("").join("").filter(a=>a==k).length;
}



// function solution(i, j, k) {
//     let arr=[];
//     let arr2=[];
//     let cnt=0;
//     for(let a=i;a<=j;a++){
//         arr.push(String(a).split(''));
//         arr2=arr[arr.length-1];
//         for(let b=0;b<arr2.length;b++){
//             if(arr2[b]===String(k))
//                 cnt++;
//         }
//     }return answer;
    
//  }

 