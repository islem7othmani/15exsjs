
let l1 = ['2','4','3'];
let l2 = ['5','6','4'];

let result = ' ';
let result1 =' ';

for(i=l1.length; i>0;i--){
    result = result + l1[i];
    result1 = result + l2[i];
}
console.log(result , result1 , number(result)+number(result1))