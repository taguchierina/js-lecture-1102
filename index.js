// 1. ボタンがクリックされたときのイベントを追加
const button = document.getElementById("main");
button.addEventListener("click", function (){
  const userId = document.getElementById("userId").value;
  getUserInfo(userId);
});


// 1. ここまで

// 2. GitHub APIにリクエストを送り、レスポンスを受け取る
function getUserInfo(userId) {
  // XMLHttpRequest(XHR)オブジェクトの初期化
  const request = new XMLHttpRequest();
  // URLを組み立てて、リクエストを準備する（まだリクエストは未送信）
  const userIdEncoded = encodeURIComponent(userId);
  const url = `https://api.github.com/users/${userIdEncoded}`;
  request.open("GET",url);
  // サーバからレスポンスが返ってきた場合の処理を登録
  request.addEventListener("load", function (event) {
    // エラーハンドリング：①HTTPステータスコードが「200 OK」以外の場合
    if (event.target.status !== 200){
      console.log("Error: HTTPステータスが「200 OK」ではありません");
      console.log(`${event.target.status}: ${event.target.statusText}`);
      return;
    }

    // 正常時の処理：3. レスポンス（JSONテキスト）を加工し、DOMに追加する
    showUserInfo(event)
  });

  // エラーハンドリング：②サーバとの通信に際してエラーが発生した場合
  request.addEventListener("error", () => {
    console.error("Error: サーバーとの通信に失敗しました");
  });
  // リクエストを実際に送信する
  request.send();
}

// 2. ここまで

// 3. レスポンス（JSONテキスト）を加工し、DOMに追加する
function showUserInfo(event) {
  // コンソールへの出力
  console.log(`HTTPステータスコード: ${event.target.status}`);
  console.log("返ってきたJSONテキスト:");
  console.log(event.target.responseText);

  // レスポンス（JSONテキスト）を、JSON.parseメソッドで連想配列（オブジェクト）に変換する
  const text_json = event.target.responseText;
  const userInfo = JSON.parse(text_json);

  // HTMLテキストを組み立てる
  // テンプレートリテラルを使用して、変数を埋め込む（注意：バッククォートを使う！）
  const view =  `
  <h4>${userInfo.name} (@${userInfo.login})</h4>
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
  <dl>
    <dt>場所</dt>
    <dd>${userInfo.location}</dd>
    <dt>リポジトリ数</dt>
    <dd>${userInfo.public_repos}</dd>
  </dl>
  `;

  // 追加先の<div id="result">を検索
  const result = document.getElementById("result");

  // DOMを<div id="result">の下に追加
  result.innerHTML = view;
}

// 3. ここまで
