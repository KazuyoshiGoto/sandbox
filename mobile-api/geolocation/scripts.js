var map;
var marker;
function initMap() {
  if (navigator.geolocation) {
    $("#map").html('<div class="loading"><i class="fa fa-spinner fa-spin"></i></div>');
  } else {
    $("#map").html('<p class="nogeo">この端末では位置情報が取得できません</p>');
    return false;
  }

  // 現在地の取得
  navigator.geolocation.getCurrentPosition(function(position) {
    // 緯度経度の取得
    latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    console.log(position);
    console.log(latLng);

    var html = "";
    html += "緯度 : " + position.coords.latitude + "<br>";
    html += "経度 : " + position.coords.longitude + "<br>";
    html += '緯度経度の誤差 : ' + position.coords.accuracy + "<br>";
    html += "高度 : " + position.coords.altitude + "<br>";
    html += "方角 : " + position.coords.heading + "<br>";
    html += "スピード : " + position.coords.heading;
    $("#debug").html(html);

    // 地図の作成
    map = new google.maps.Map(document.getElementById('map'), {
      center: latLng,
      zoom: 17
    });

    // マーカーの追加
    marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  },
    //取得失敗した場合
    function (error) {
      switch (error.code) {
        case 1: //PERMISSION_DENIED
          alert("位置情報の利用が許可されていません");
          break;
        case 2: //POSITION_UNAVAILABLE
          alert("現在位置が取得できませんでした");
          break;
        case 3: //TIMEOUT
          alert("タイムアウトになりました");
          break;
        default:
          alert("その他のエラー(エラーコード:" + error.code + ")");
          break;
      }
    }
  );
}

// APIドキュメントでは呼び出し時に initMap をコールバックしていたが、
// それでは読み込み速度の都合、スマホでエラーが出るため確実に initMap を実行する
$(document).ready(function() {
  initMap();
});