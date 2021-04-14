
// 從 Multiplicand loop開始跑
// 先宣告一個空字串str
// 從 multiplier loop開始跑,且範圍是不大於Multiplicand
// 每跑完一次multiplier loop,就加到str後面(並加上表格"\t")
// 每當跑完一次Multiplicand的迴圈,就印出str


for(let multiplicand=1;multiplicand<10;multiplicand++){
    let str='';
    for(let multiplier=1;multiplier<=multiplicand;multiplier++){
        str+=multiplicand + '*' + multiplier + '=' + multiplier*multiplicand + '\t';              
    }
    console.log(str);  
}