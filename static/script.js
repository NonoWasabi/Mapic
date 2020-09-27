var marker_ary = new Array();
var phimarker_ary = new Array();
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


function pic_size(pic_path){　//写真のサイズを取得する関数．マーカーの大きさを決定するために必要．
    var element = new Image();
    var width;
    var height;
    element.onload = function(){
        console.log("onloadされた");
        width = element.naturalWidth;
        height = element.naturalHeight;
    };
    element.src = pic_path; //ここでonloadが発動してほしいがうまくいかない
    console.log(pic_path);
    // setTimeout(
        //     function(){
            //         element.src = pic_path;
            //         console.log(pic_path);
            //     },
            //     "100"
            // );
            console.log(width, height);
        };
        
        function find_marker(lat, lng){
            var r = Math.sqrt(Math.pow(lat, 2) + Math.pow(lng, 2))
            console.log(r);
};

function Set_Marker(marker_name, lat, lng, img){
    console.log("Set_Marker");
    var id_manager = marker_ary.length;
    //画像のサイズを決定する関数が必要
    //pic_size(img);
    var MarkerPosition = {lat, lng};
    var MarkerOptions_cheki = {
        map: map,
        name: marker_name, //画像の名前
        position: MarkerPosition, //画像の座標
        clikcable: true,
        post_id:id_manager, //画像の個別id
        img_url: img, //画像のurl保存場所
        visible: true,
        icon: {
            url: img,
            oeigin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(63, 7),
            scaledSize: new google.maps.Size(124,124)
        },
    };
    var MarkerOptions_phi = {
        map: map,
        position: MarkerPosition,
        clikcable: false,
        visible: true,
        icon: {
            url: '../static/img/phi.svg',
            scaledSize: new google.maps.Size(24.5,37.5)
        },
        animation: google.maps.Animation.DROP 
    };
    
    marker_ary[id_manager] = new google.maps.Marker(MarkerOptions_cheki);
    phimarker_ary[id_manager] = new google.maps.Marker(MarkerOptions_phi);

    google.maps.event.addListener(marker_ary[id_manager],'click',()=>{
        console.log(marker_ary[id_manager].post_id)
        show_popup();
    });
    google.maps.event.addListener(map, 'zoom_changed', ()=>{
        var zoom_level = map.getZoom();
        //zoomlevelに合わせて画像の表示・非表示
        if(zoom_level <= 14){
            marker_ary[id_manager].visible = false;
        }
        else{
            marker_ary[id_manager].visible = true;
        }
        
        //zoomレベルに応じてマーカーの表示数を変更させたい。
        
    });
}

function Marker_Clear(){
    if(marker_ary.length > 0){
        for(i = 0; i < marker_ary.length; i++){
            marker_ary[i].setMap(); //マーカー削除
            phimarker_ary[i].setMap();
        }
        var ary_count = marker_ary.length
        for(i = 0; i < ary_count; i++){
            marker_ary.shift(); //マーカーがあった部分のインデックスを削除
            phimarker_ary.shift();
            console.log(marker_ary.length)
        }
    }
}

const tack = document.getElementById('tack');
var tacking_flag = false;
tack.addEventListener('click', function(e){
    console.log("tacking");
    e.preventDefault();
    tacking_flag = true;
});

map.addListener('click', function(e){ //地図に張り付けた写真はサーバーに送るべし
    var lat = e.latLng.lat(); //緯度
    var lng = e.latLng.lng(); //経度
    console.log(lat, lng);
    find_marker(lat, lng);
    if(tacking_flag){
        //Set_Marker("hoge", lat, lng, '../static/img/cheki.svg');
        Marker_Clear(); //makerclearの検査用
        tacking_flag = false;
        console.log("tacking_end");
    }
});

google.maps.event.addListener(map, 'zoom_changed', function(){
    var zoom_level = map.getZoom(); //zoom_level = 16以上は見やすい．15以下は少し窮屈な感じあり．
});

for (let k = 0; k < ramen_json.length; k++){ //ラーメン情報読み込み．範囲設定した方がいい
    console.log(ramen_json[k].name);
    Set_Marker(ramen_json[k].name,ramen_json[k].lat,ramen_json[k].lng, '../static/img/ramen/' + ramen_json[k].pic);
}

/*
google.map.event.addListener(map, 'idle', function(){
    
});
*/