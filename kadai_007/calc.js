// 変数numに0～15までのランダムな整数を代入する
let num = Math.floor(Math.random() * 16);
 
// 変数numの値を出力する（確認用）
console.log(num);

// 変数numが3の倍数且つ5の倍数の場合、「3と5の倍数です」 と表示
if (num % 3 ===0 && num % 5 ===0) {
    console.log('3と5の倍数です');
}

// 変数numが3の倍数の場合、「3の倍数です」 と表示
else if (num % 3 ===0) {
  console.log('3の倍数です');
}

// 変数numが5の倍数の場合、「5の倍数です」 と表示
else if (num % 5 ===0) {
    console.log('5の倍数です');
}

// 変数numが5の倍数の場合、「5の倍数です」 と表示
else {
    console.log(num);
}