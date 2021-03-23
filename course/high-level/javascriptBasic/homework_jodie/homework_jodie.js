//題目： 99 乘法表


//因數從 1 開始乘以從 1 開始的倍數
//因數從 9 為止
for (let num = 1; num <= 9; num++){
  //宣告回傳字串
  let result = "";
  //倍數到等於因數為止
  for(let next = 1; next <= num; next++){
    result = result + num + "*" + next + "=" + num * next
  }
    console.log(result);
}
