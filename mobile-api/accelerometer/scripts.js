(function () {

  var $arrow;
  var $window;
  var stageW;
  var stageH;

  var isMotion;

  $(function () {
    $arrow = $("#arrow");
    $window = $(window);

    isMotion = false;

    $(window).on("resize", resizeHandler);
    resizeHandler();

    // DeviceMotion Event
    window.addEventListener("devicemotion", devicemotionHandler);
  });

  // 加速度が変化
  function devicemotionHandler(event) {
    if (isMotion) return;

    // 加速度
    // X軸
    var x = event.acceleration.x;
    // Y軸
    var y = event.acceleration.y;
    // Z軸
    var z = event.acceleration.z;

    var html = "";
    html += "X加速 : " + x + "<br>";
    html += "Y加速 : " + y + "<br>";
    html += 'Z加速 : ' + z;
    $("#debug").html(html);

    //$arrow.stop();

    var limit = 3; //リミットを越えたら反応
    if (x > limit) { // 右
      $arrow.css({
        x: -stageW
      });
      $arrow.children("img").css({
        //"transform": "rotate(90deg)"
        "transform": "rotate(-90deg)"
      });
    }
    else if (x < -limit) { // 左
      $arrow.css({
        x: stageW
      });
      $arrow.children("img").css({
        //"transform": "rotate(-90deg)"
        "transform": "rotate(90deg)"
      });
    }
    else if (y > limit) { // 上
      $arrow.css({
        y: stageH
      });
      $arrow.children("img").css({
        //"transform": "rotate(0deg)"
        "transform": "rotate(180deg)"
      });
    }
    else if (y < -limit) { // 下
      $arrow.css({
        y: -stageH
      });
      $arrow.children("img").css({
        //"transform": "rotate(180deg)"
        "transform": "rotate(0deg)"
      });
    }
    else return;

    //isMotion = true;

    //$arrow.delay(500).transition({x: 0, y: 0}, 300, "easeOutCubic", function () {
    //  isMotion = false
    //});
  }

  function resizeHandler(event) {
    stageW = $window.width();
    stageH = $window.height();
  }
})();