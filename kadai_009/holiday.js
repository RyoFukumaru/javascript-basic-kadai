
// 祝日を配列に格納　※計16個
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]


// ＝＝for文＝＝
for (let i = 1; i <= 15; i += 1) {
    console.log(holidays[i]);
}


// ＝＝while文＝＝

// インデックスを初期化
let index = 0;

// whileループを使用して要素を順番に取り出す
while (index < holidays.length) {
  const element = holidays[index];
  console.log(element);
  index++; // インデックスをインクリメントして次の要素へ進む
}
