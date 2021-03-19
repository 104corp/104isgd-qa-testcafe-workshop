let nums = [2,7,11,15];
let target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

let c=[];
for(let i=0;i<nums.length-1;i++){
    for(let j=1;j<nums.length-1;j++){
        if(nums[i]+nums[j] == target){
            c.push(i,j);
            return c;
        }
    }
   
}
};

console.log(twoSum(nums, target));
