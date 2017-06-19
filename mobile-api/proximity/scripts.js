(function () {
  var near;
  var far;

  $(function () {
    near = $("#near");
    far = $("#far");

    window.addEventListener("deviceproximity", deviceproximityHandler);
  });

  // 検知範囲の状況が変化
  function deviceproximityHandler(event) {
    var html = "";
    html += "イベント値 : " + event.value;
    $("#debug").html(html);

    if (!event.value) {
      // センサーの検知範囲に物体がある
      showKin();
    } else {
      // センサーの検知範囲に物体はない
      showEn();
    }
  }

  // 近
  function showKin() {
    far
        .stop()
        .transition({scale: 0});
    near
        .stop()
        .css({display: "block", scale: 1.5})
        .transition({scale: 1}, 500, "easeOutCubic");
  }

  // 遠
  function showEn() {
    far
        .stop()
        .transition({scale: 1});
    near
        .stop()
        .transition({scale: 1.5}, 200, "easeInCubic", function () {
          $(this).css({display: "none"});
        });
  }
})();