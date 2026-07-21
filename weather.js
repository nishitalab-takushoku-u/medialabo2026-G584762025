
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("世界の天気");
  console.log("〜〜〜〜〜検索結果〜〜〜〜〜");
  console.log("[都市名]："+data.name);
  console.log("・軽度："+data.coord.lon);
  console.log("・緯度："+data.coord.lat);
  console.log("・天気："+data.weather[0].description);
  console.log("・最低気温："+data.main.temp_min);
  console.log("・最高気温："+data.main.temp_max);
  console.log("・湿度："+data.main.humidity);
  console.log("・風速："+data.wind.speed);
  console.log("・風向："+data.wind.deg);
}

// 課題5-1 の関数 printDom() はここに記述すること
let count =0
function printDom(data){
  if(0<count){
    let rset= document.querySelector('div#result');
    rset.remove();
  }
  count=count+1;

  let b= document.querySelector('select#koumoku');
  let bi = b.selectedIndex;
  let bs = b.querySelectorAll('option');
  let b1 = bs.item(bi); 
  let bset = b1.value;

  let d = document.createElement('div');
  b = document.querySelector('h2#botann');
  b.insertAdjacentElement('afterend', d);
  d= document.querySelector('div');
  d.setAttribute('id', 'result');

  let p = document.createElement('p');
  p.textContent ="〜〜〜〜〜検索結果〜〜〜〜〜"; 
  d.insertAdjacentElement('beforeend', p);
  p.setAttribute('id', 'kekka');

  let dp= document.querySelector('p#kekka');
  let s = document.createElement('strong');
  s.textContent ="[都市名]："+data.name; 
  dp.insertAdjacentElement('afterend', s);
  s.setAttribute('id', 'kuni');

  let dpp= document.querySelector('strong#kuni');
  let u = document.createElement('ul');
  dpp.insertAdjacentElement('afterend', u);

  if(bset == 'all'){

    l = document.createElement('li');
    l.textContent ="経度："+data.coord.lon; 
    u.insertAdjacentElement('beforeend', l);
  
    l = document.createElement('li');
    l.textContent ="緯度："+data.coord.lat; 
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent ="天気："+data.weather[0].description; 
    u.insertAdjacentElement('beforeend', l);
  
    l = document.createElement('li');
    l.textContent ="最低気温："+data.main.temp_min+"度"; 
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent ="最高気温："+data.main.temp_max+"度"; 
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent ="湿度："+data.main.humidity+"%"; 
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent ="風速："+data.wind.speed; 
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent ="風向："+data.wind.deg; 
    u.insertAdjacentElement('beforeend', l);

  }else if(bset =='coord.lon'){

    l = document.createElement('li');
    l.textContent ="経度："+data.coord.lon; 
    u.insertAdjacentElement('beforeend', l);

  }else if(bset =='coord.lat'){
    l = document.createElement('li');
    l.textContent ="緯度："+data.coord.lat; 
    u.insertAdjacentElement('beforeend', l);

  }else if(bset =='weather[0].description'){
    l = document.createElement('li');
    l.textContent ="天気："+data.weather[0].description; 
    u.insertAdjacentElement('beforeend', l);

  }else if(bset =='main.temp_min'){
    l = document.createElement('li');
    l.textContent ="最低気温："+data.main.temp_min+"度"; 
    u.insertAdjacentElement('beforeend', l);
    
  }else if(bset =='main.temp_max'){
    l = document.createElement('li');
    l.textContent ="最高気温："+data.main.temp_max+"度"; 
    u.insertAdjacentElement('beforeend', l);
    
  }else if(bset =='main.humidity'){
    l = document.createElement('li');
    l.textContent ="湿度："+data.main.humidity+"%"; 
    u.insertAdjacentElement('beforeend', l);
    
  }else if(bset =='wind.speed'){
    l = document.createElement('li');
    l.textContent ="風速："+data.wind.speed; 
    u.insertAdjacentElement('beforeend', l);
    
  }else if(bset =='wind.deg'){
    l = document.createElement('li');
    l.textContent ="風向："+data.wind.deg; 
    u.insertAdjacentElement('beforeend', l);
    
  }

}

// 課題6-1 のイベントハンドラ登録処理は以下に記述


// 課題6-1 のイベントハンドラ sendRequest() の定義
let push = document.querySelector('button#kensaku');
push.addEventListener('click', sendRequest);
function sendRequest() {
    let a= document.querySelector('select#kuni');
    let ai = a.selectedIndex;
    let as = a.querySelectorAll('option');
    let a1 = as.item(ai);
    let aset=a1.value;
    let id=aset;

    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+ id +'.json';

    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
