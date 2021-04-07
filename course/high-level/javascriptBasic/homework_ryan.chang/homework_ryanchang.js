// 從 multiplicand 開始跑執行
// 先宣告一個空字串str
// 從 multiplier loop開始跑執行 ( 範圍不超過 multiplicand )
// 跑完一次迴圈就把值加上 stg 字串串接後面然後加上換行 "\t"
// 跑完九次迴圈後 , 跳出並印出str
 
for(let multiplicand = 1 ; multiplicand <= 9 ; multiplicand++ ){
    let str="";
    for(let multiplier = 1 ; multiplier <= multiplicand ; multiplier++ ){
        str += multiplicand + "*" + multiplier + "=" + multiplier * multiplicand + '\t';              
    }
    console.log(str);  
}