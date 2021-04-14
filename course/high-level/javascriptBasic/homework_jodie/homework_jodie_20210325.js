//題目：金字塔

//宣告回傳字串
//設定行數迴圈，迴圈從 1 開始，到小於 floor 結束
//設定左邊空白迴圈，迴圈從 1 開始，到 floor - 行數結束(第 1 行空 4 格; 第 2 行空 3 格...以此類推)
//設定列數(星數)迴圈，迴圈從 1 開始，到小於等於 2 * 行數 - 1 結束(第 1 行 1 星; 第 2 行 3 星...以此類推)
//一行結束後換行

function pyramid(floor){
    result = "";
    //設定行數迴圈，迴圈從 1 開始，到小於 floor 結束
    for(let row = 1 ; row <= floor ; row++){
      //設定左邊空白迴圈，迴圈從 1 開始，到 floor - 行數結束(第 1 行空 4 格; 第 2 行空 3 格...以此類推)
      for(let space = 1 ; space <= floor - row; space++){
        result += " "
      }
      //設定列數(星數)迴圈，迴圈從 1 開始，到小於等於 2 * 行數 - 1 結束(第 1 行 1 星; 第 2 行 3 星...以此類推)
      for(let column = 1; column <= 2 * row - 1 ; column++){
        result += "*"
      }
      //一行結束後換行
      result += '\n'
    }
    
    return result
  }
  
  console.log(pyramid(5));