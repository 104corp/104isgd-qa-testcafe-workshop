// 先宣告一個空字串
// 從 num1 loop開始跑進行
// 從 num2 loop開始跑進行
// 先判斷num2是否大於num1,若大於則跳過num2迴圈
// 呈上,若沒大於,就將相乘後的值加在原本的空字串後
// 每當一個num2迴圈執行完,就換行
// 每當一個num1的迴圈執行完,就印出str

let str="";
for(let num1=1;num1<10;num1++){
    for(let num2=1;num2<10;num2++){
        if(num2 > num1){
            break;
          }
        str+=num1 + "*" + num2 + "=" + num2*num1 + " ";
                
    }str+='\n';
      
}console.log(str);