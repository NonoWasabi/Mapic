var MyLatLng = new google.maps.LatLng(36.396471767486254, 138.24964063545846);
var Options = {
    zoom: 15,      //地図の縮尺値
    center: MyLatLng,    //地図の中心座標
    mapTypeId: 'roadmap',   //地図の種類
    styles: [
        {
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#ebe3cd"
            }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#523735"
            }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#f5f1e6"
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#c9b2a6"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#dcd2be"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#ae9e90"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#dfd2ae"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#dfd2ae"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#93817c"
            }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "labels.text",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.government",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.government",
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#a5b076"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#447530"
            }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#f5f1e6"
            }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#fdfcf8"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#f8c967"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#e9bc62"
            }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#e98d58"
            }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#db8555"
            }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#806b63"
            }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#dfd2ae"
            }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#8f7d77"
            }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#ebe3cd"
            }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#dfd2ae"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#b9d3c2"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#92998d"
            }
            ]
        }
        ]
};
var map = new google.maps.Map(document.getElementById('map'), Options);
/*
function setPointMarker(){
    //$('#pointlist > ul').empty(); //リストの内容を削除
    MarkerClear();
    var bounds = map.getBounds();
    map_ne_lat = bounds.getNorthEast().lat();
    map_sw_lat = bounds.getSouthWest().lat();
    map_ne_lng = bounds.getNorthEast().lng();
    map_sw_lng = bounds.getSouthWest().lng();

    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        var result = document.getElementById
    }
};

google.maps.event.addListener(map, 'idle', () => {
    serPointMarker();
});
*/
var ramen_json = [
    {
        "name": "ohboshi",
        "lat": 36.4021542,
        "lng": 138.2691977,
        "tags": ["gourmet", "ramen"],
        "fav": 100,
        "pic": "food_4_ohboshi.jpg",
        "comment": "行ったことない"
    },

    {
        "name": "memen",
        "lat": 36.3913595,
        "lng": 138.2288261,
        "tags": ["gourmet", "ramen"],
        "fav": 120,
        "pic": "food_3_memmen.jpg",
        "comment": "遠い"
    },

    {
        "name": "tenhou",
        "lat": 36.3957037,
        "lng": 138.2545748,
        "tags": ["gourmet", "ramen"],
        "fav": 50,
        "pic": "food_6_tenhou.jpg",
        "comment": "格安"
    },

    {
        "name": "seikyou",
        "lat": 36.3925518,
        "lng": 138.2635498,
        "tags": ["gourmet", "ramen"],
        "fav": 40,
        "pic": "food_5_seikyou.jpg",
        "comment": "冷やし担々麺は認める"
    },

    {
        "name": "hachi",
        "lat": 36.3945184,
        "lng": 138.25943,
        "tags": ["gourmet", "ramen"],
        "fav": 140,
        "pic": "food_1_hachi.jpg",
        "comment": "まぁまぁうまい"
    },

    {
        "name": "kisaburou",
        "lat": 36.39079,
        "lng": 138.2768293,
        "tags": ["gourmet", "ramen"],
        "fav": 150,
        "pic": "food_2_kisaburou.jpg",
        "comment": "上田市の次郎系ラーメン"
    }
]


