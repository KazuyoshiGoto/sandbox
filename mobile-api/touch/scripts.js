(function () {
  var circle;
  var touchCount;
  var clientX = 0;
  var clientY = 0;
  var pageX;
  var pageY;
  var screenX;
  var screenY;
  var force;
  var radiusX;
  var radiusY;

  $(function () {
    //タッチイベント取得
    // touchstart : タッチした時
    // touchmove  : タッチ状態からドラッグした時
    // touchend   : 指が離れた時
    window.addEventListener("touchstart", touchmoveHandler, false);
    window.addEventListener("touchmove", touchmoveHandler, false);
    window.addEventListener("touchend", touchendHandler, false);
    circle = $("#circle");
  });

  // タッチ時＆ドラッグ時
  function touchmoveHandler(event) {
    //同時タッチ数
    touchCount = event.touches.length;

    //タッチされた位置座標を取得
    //クライアント座標
    clientX = event.touches[0].clientX;
    clientY = event.touches[0].clientY;

    //ページ上の座標
    pageX = event.touches[0].pageX;
    pageY = event.touches[0].pageY;

    //画面上の座標
    screenX = event.touches[0].screenX;
    screenY = event.touches[0].screenY;

    //感圧
    force = event.touches[0].force;

    //タッチ面積
    radiusX = event.touches[0].radiusX;
    radiusY = event.touches[0].radiusY;

    var html = "";
    html += "同時タッチ数 : " + touchCount + "<br>";
    html += "座標 X: " + clientX + " / Y: " + clientY + "<br>";
    html += "感圧 : " + force + "<br>";
    html += "タッチ直径 : 約" + Math.round(radiusY) * 2 + "px";
    //html += "クライアント座標X : " + clientX + "<br>";
    //html += "クライアント座標Y : " + clientY + "<br>";
    //html += "ページ座標X : " + pageX + "<br>";
    //html += "ページ座標Y : " + pageY + "<br>";
    //html += "スクリーン座標X : " + screenX + "<br>";
    //html += "スクリーン座標Y : " + screenY ;
    $("#debug").html(html);
    console.log(event.touches);

    // touch eventメモ
    //
    //clientX       クライアント座標：ブラウザのクライアント領域のうちどこをタッチしているか
    //clientY
    //force         感圧
    //identifier    マルチタッチ識別子→1つ目は0
    //pageX         ページ座標：ページ全体のうちどこをタッチしているか
    //pageY
    //radiusX       タッチしている軸のX軸半径→ペンや指の太さが影響する
    //radiusY
    //rotationAngle
    //screenX       スクリーン座標：モニタ全体のうちどこをタッチしているか
    //screenY
    //target        タッチしている対象DOM

    circle.css({
      "opacity": .8,
      "top": clientY - 100 + "px",
      "left": clientX - 100 + "px",
      "transform": "scale(" + force + ")"
    })
  }

  //指を話したら消す
  function touchendHandler(event) {
    circle.css({
      "opacity": 0
    })
  }
})();