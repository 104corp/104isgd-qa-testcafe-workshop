// 虛擬碼:
// 1.先宣告一個函式pyramid,且有帶一個數字參數
// 2.先跑一個外層迴圈(row),圈數是以floor輸入的數字為範圍
// 3.先宣告一個空字串(專門存放每一列的值)
// 4.再跑一個迴圈(column),範圍是(floor-1)的2倍再加1(以floor為中心,左右再多加floor-1次)
// 5.判斷如果Math.abs(floor-1-column)<row+1就印出"*"
// 6.呈上,否則就印出" "
// 7.每跑完一個row迴圈,就印出str


function pyramid(floor) {
for(let row=0;row<floor;row++){
    let str='';
    for(let column=0;column<(2*(floor-1)+1);column++){
        if(Math.abs(floor-1-column)<row+1){
           str+='*';
        }
        else{
           str+=' ';
        }
    }
    console .log(str);
}
}

pyramid(5);
