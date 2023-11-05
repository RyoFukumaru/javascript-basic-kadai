// 現在の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から11の値を持つため、+1 する
const day = today.getDate();

// 日付をコンソールに表示
console.log(` ${year}年${month}月${day}日`);