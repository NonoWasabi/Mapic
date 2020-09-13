var id_manager = 1
function show_popup() {
    console.log("enter_the_function")
    var popup = document.getElementById('popup');
    if(!popup) return;
    popup.classList.add('is-show');

    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);

    function closePopUp(elem) {
        if(!elem) return;
        //console.log("enter-the-closepopup")
        elem.addEventListener('click', function() {
            popup.classList.remove('is-show');
            //console.log(popup) //バグあり。Showpopupには一回しか入っていないのにこのコンソールログは入るたびに表示が増え続ける
            return;
        });
    }
}

function Set_Marker(marker_name, lat, lng, img){
    console.log("Set_Marker")
    //画像のサイズを決定する関数が必要
    var MarkerPosition = {lat, lng}
    var MarkerOptions_cheki = {
        map: map,
        name: marker_name,
        position: MarkerPosition,
        clikcable: true,
        post_id:id_manager,
        icon: {
            url: img,
            oeigin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(63, 7),
            scaledSize: new google.maps.Size(124,124)
        },
    };
    id_manager += 1;
    var MarkerOptions_phi = {
        map: map,
        position: MarkerPosition,
        clikcable: false,
        icon: {
            url: '../static/img/phi.svg',
            scaledSize: new google.maps.Size(24.5,37.5)
        },
        animation: google.maps.Animation.DROP 
    };

    var cheki_marker = new google.maps.Marker(MarkerOptions_cheki)
    var phi_marker = new google.maps.Marker(MarkerOptions_phi)
    google.maps.event.addListener(cheki_marker,'click',()=>{
        console.log(cheki_marker.post_id)
        show_popup();
    });
}

const tack = document.getElementById('tack');
var tacking_flag = false;
tack.addEventListener('click', function(e){
    console.log("tacking");
    e.preventDefault();
    tacking_flag = true;
});

map.addListener('click', function(e){
    if(tacking_flag){
        var lat = e.latLng.lat(); //緯度
        var lng = e.latLng.lng(); //経度
        console.log(lat, lng);
        //show_popup();
        Set_Marker("hoge", lat, lng, '../static/img/cheki.svg');
        tacking_flag = false;
        console.log("tacking_end");
    }
});

for (let k = 0; k < ramen_json.length; k++){
    console.log(ramen_json[k].name);
    Set_Marker(ramen_json[k].name,ramen_json[k].lat,ramen_json[k].lng, '../static/img/ramen/' + ramen_json[k].pic);
}