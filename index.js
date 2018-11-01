// ボタンがクリックされたときのイベントを追加


// GitHub APIにリクエストを送り、レスポンスを受け取る
function getUserInfo(userId) {
  // XMLHttpRequest(XHR)オブジェクトの初期化

  // URLを組み立てて、リクエストを準備する（まだリクエストは未送信）

  // サーバからレスポンスが返ってきた場合の処理を登録
  request.addEventListener("load", function (event) {
    // エラーハンドリング：①HTTPステータスコードが「200 OK」以外の場合


    // 正常時の処理

  });

  // エラーハンドリング：②サーバとの通信に際してエラーが発生した場合

  // リクエストを実際に送信する

}

// 正常時の処理
function showUserInfo(event) {
  // コンソールへの出力


  // レスポンステキスト（JSON）を連想配列（オブジェクト）に変換する


  // HTMLテキストを組み立てる
  // テンプレートリテラルを使用して、変数を埋め込む


  // 追加先の<div id="result">を検索


  // DOMを<div id="result">の下に追加

}
