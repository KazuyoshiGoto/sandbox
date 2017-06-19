(function () {
  var circle;
  var luxTxt;
  var lux = 0;
  var r = 0;

  $(function () {
    // AmbientLight Event
    // "deviceorientation" から照度を監視
    window.addEventListener("devicelight", devicelightHandler);
    circle = $("#circle");
    luxTxt = $("#lux_txt");
    setInterval(loop, 30 / 1000);
  });

  // 照度の変化を適用させる
  function devicelightHandler(event) {
    lux = event.value;
    luxTxt.html(lux + "lux");
  }

  //円を縮ませる
  function loop() {
    r += (lux * 0.7 - r) * 0.2;

    circle.css({
      width: r * 2,
      height: r * 2,
      marginTop: -r + "px",
      marginLeft: -r + "px",
      "border-radius": r + "px"
    });

    luxTxt.css({
      marginTop: -Math.floor(luxTxt.height() / 2)
    });
  }
})();