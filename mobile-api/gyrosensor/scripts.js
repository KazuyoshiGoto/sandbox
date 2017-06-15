(function () {

  var $orientationObj;

  $(function () {
    $orientationObj = $(".cube");
    window.addEventListener("deviceorientation", deviceorientationHandler);
  });

  /**
   *
   * @param event
   */
  function deviceorientationHandler(event) {
    //ジャイロセンサー情報取得
    // beta = X軸
    var beta = event.beta;
    // alpha = Y軸
    var alpha = event.alpha;
    // gamma = Z軸
    var gamma = event.gamma;
    var html = "";
    html += "X回転 : " + beta + "<br>";
    html += "Y回転 : " + alpha + "<br>";
    html += 'Z回転 : ' + gamma;
    $("#debug").html(html);

    $orientationObj.css({
      //betaを-90度調整することで、スマホを立てた状態で正面にしている
      "transform": "rotateX(" + (-90 + beta) + "deg) rotateY(" + alpha + "deg) rotateZ(" + gamma + "deg)"
    })
  }
})();