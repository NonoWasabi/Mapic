function Set_Marker(lat, lng){
    console.log("Set_Marker")
    var MarkerPosition = {lat, lng}
    var MarkerOptions_cheki = {
        map: map,
        position: MarkerPosition,
        clikcable: true,
        icon: {
            url: '../static/img/cheki.svg',
            oeigin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(63, 7)
        },
    };
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
    console.log(cheki_marker)
}

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

map.addListener('click', function(e){
    var lat = e.latLng.lat(); //緯度
    var lng = e.latLng.lng(); //経度
    console.log(lat, lng);
    //show_popup();
    Set_Marker(lat, lng);
});