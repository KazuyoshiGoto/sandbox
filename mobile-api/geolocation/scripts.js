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