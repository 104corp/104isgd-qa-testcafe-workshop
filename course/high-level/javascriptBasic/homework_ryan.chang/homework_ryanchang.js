//      宣告 c 為空字串
//      指定 a , b 的初始值
//      從 a 開始跑進行
//      從 b 開始跑進行
//      判斷若 b > a 則不繼續執行 a*b  
//      將 a*b 的結果指定給變數 c    
//      將 c 運算結果加上換行符號
//      將 c 運算結果印到 console.log

let c="";
for( let a=1 ; a<=9 ; a++ ){
    for( let b=1 ; b<=9 ; b++ ){
        if ( b>a ){
        break;
         }
    c+= a + "x" + b + "=" + (a*b) + " "
    }
    c=c+'\n'
}
console.log(c);