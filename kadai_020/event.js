
// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// 表示文章を変更するための要素を取得
const text = document.getElementById("text");


// ボタンがクリックされたときの処理
btn.addEventListener("click", () => {
    // 表示文章を変更
    text.textContent = "ボタンをクリックしました";
});

