
// 從 Multiplicand loop開始跑
// 先宣告一個空字串str
// 從 multiplier loop開始跑,且範圍是不大於Multiplicand
// 每跑完一次multiplier loop,就加到str後面(並加上表格"\t")
// 每當跑完一次Multiplicand的迴圈,就印出str


for(let num1=1;num1<10;num1++){
    let str="";
    for(let num2=1;num2<=num1;num2++){
        str+=num1 + "*" + num2 + "=" + num2*num1 + '\t';              
    }
    console.log(str);  
}