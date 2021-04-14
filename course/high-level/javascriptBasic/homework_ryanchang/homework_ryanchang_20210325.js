 function pyramid(floor) {  // 宣告一個 function pyramid 裡面有一個參數 floor
    for(let  pyramid = 1 ; pyramid <= floor ; pyramid ++ ){ // pyramid 從 1 開始跑執行控制迴圈次數(金字塔的高度)
        let str= "" ; // 設定 str 接收值
         for(let space = 1 ; space <= ( floor - pyramid ) + 1 ; space ++ ){  // 從 space=1 開始跑執行
            str +=  " " ;  // 把 space 加到 str 結果前面
         }
        for(let floor = 1 ; floor <= ( 2 * pyramid -1 ) ; floor ++ ){     // 從 floor=1 開始跑執行，且印出為奇數(EX:1,3,5...)
            str +=  "*" ;       // 將數字結果轉成符號 *
        }
        console.log(str);       //把最後運算結果 console.log 輸出
    }
}
    pyramid(5);
    
     
 



