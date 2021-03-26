 function pyramid(floor) {
    for(let  pyramid = 1 ; pyramid <= floor ; pyramid ++ ){
        let str="";
        for(let span=0 ; span <= 6 - pyramid  ; span ++ )
        str +=  " " ;
            for(let floor = 1 ; floor <= (2*pyramid-1) ; floor ++ ){
            str +=  "*" ; 
            }
        console.log(str);
        }
    }
     pyramid(5);
    
     //宣告一個 function pyramid 裡面有一個參數 floor
     //pyramid 從1開始跑執行控制迴圈次數(金字塔的高度)
     //設定 str 接收值
     //從 span=0 開始跑執行
     //把 span 加到 str 結果前面
     //從 floor=1 開始跑執行，並設定為奇數
     //結數字結果轉成符號 *
     //把最後運算結果 console.log 輸出


