<?php
    //座標データ。本来はDBの中にある
    $locate_ary = array(
        0 => array("lat" => 36.4021542, "lng" => 138.2691977, "pic" => "ohboshi.jpg", "msg" => "おおぼし。行ったことない", "tags" => array("food"), "fav" => 100, "comments" => array("")),
        1 => array("lat" => 36.3913595, "lng" => 138.2288261, "pic" => "memmen.jpg", "msg" => "めんめん。遠い", "tags" => array("food"), "fav" => 120, "comments" => array("")),
        2 => array("lat" => 36.3957037, "lng" => 138.2545748, "pic" => "tenhou.jpg", "msg" => "テンホー。格安", "tags" => array("food"), "fav" => 50, "comments" => array("")),
        3 => array("lat" => 36.3925518, "lng" => 138.2635498, "pic" => "seikyou.jpg", "msg" => "生協。冷やし担々麺は認める", "tags" => array("food"), "fav" => 40, "comments" => array("")),
        4 => array("lat" => 36.3945184, "lng" => 138.25943, "pic" => "hachi.jpg", "msg" => "ハチ。まぁまぁうまい", "tags" => array("food"), "fav" => 140, "comments" => array("")),
        5 => array("lat" => 36.39079, "lng" => 138.2768293, "pic" => "kisaburou.jpg", "msg" => "喜三郎。上田市の次郎系ラーメン", "tags" => array("food"), "fav" => 150, "comments" => array(""))
    );

    foreach($locate_ary as $key => $val){
        echo $key."\n";
        echo $val["lat"]."\n";
        var_dump($val["tags"]);
    }

    //範囲データ取得
    $ne_lat = $_GET["ne_lat"];
    $sw_lat = $_GET["sw_lat"];
    $ne_lng = $_GET["ne_lng"];
    $sw_lng = $_GET["sw_lng"];

    //出力
    header('Context-type: text/xml; charset = utf-8');
    echo '<?xml version="1.0" standalone="yes"?>';
    echo "<locations>";
    foreach($locate_ary as $val){
        if(
            $val["lat"] < $ne_lat &&
            $val["lat"] > $sw_lat &&
            $val["lng"] < $ne_lng &&
            $val["lng"] > $sw_lng &&
        )
        {
            echo "<Locate>";
            echo "<lat>".$val["lat"]."</lat>";
            echo "<lng>".$val["lng"]."</lng>";
            echo "<pic>".$val["pic"]."</pic>";
            echo "<msg>".$val["msg"]."</msg>";
            echo "<tags>".$val["tags"]."</tags>";
            echo "<fav>".$val["fav"]."</fav>";
            echo "<comments>".$val["comments"]."<comments>";
            
        }
    }
    echo "</Locations>\n";
?>
