// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;
let n=document.querySelector('span#kaisu'); 
let a=document.querySelector('input[name="yosou"]');
let r=document.querySelector('p#result');
n.textContent=kaisu;
// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
let seikai =0;
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu=kaisu+1; 
  n.textContent=kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso=Number(a.value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  if(4<kaisu || seikai==1){
    r.textContent="正解は"+kotae+"でした,すでにゲームは終わっています";
  }else if(yoso==kotae){
    r.textContent="正解です、おめでとう！";
    seikai=seikai+1;
  }else if(kaisu==4 && kotae!=yoso){
    r.textContent="まちがい．残念でした答えは"+kotae+"です";
  }else if(yoso<kotae){
    r.textContent="まちがい．答えはもっと大きいですよ";
  }else if(kotae<yoso){
    r.textContent="まちがい．答えはもっと小さいですよ";
  }
  // 　　　　  正解/不正解のときのメッセージを表示する

  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
b = document.querySelector('button#kaitou');
b.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
