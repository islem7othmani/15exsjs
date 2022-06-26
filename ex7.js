let nums = [8, 7, 2, 5, 3, 1]
let target = 10;
for(i=0;i<nums.length;i++){
    let fixednum = nums[i];
    for(j=i;j<nums.length;j++){
        if(fixednum + nums[j] === target){
            console.log("pair found" + fixednum + "+" +  nums[j] + '=' + target);
        }
    }
}