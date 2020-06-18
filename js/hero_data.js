var canvas = document.getElementById("hero-canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

window.addEventListener('resize', function () {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
})
//通用性函数
//查找返回结点
function find_node(taskName) {
    var _nodes = stage.find('node');
    for (let i = 0; i < _nodes.length; i++) {
        const element = _nodes[i];
        if (element.text == taskName) {
            return element;
        }
    }
    return null;
}
//查找返回连接
function find_link(nodeA, nodeZ) {
    if (nodeA == null || nodeZ == null || nodeA == nodeZ)
        return false;
    var _links = stage.find('link');
    for (let i = 0; i < _links.length; i++) {
        const element = _links[i];
        if ((element.nodeA == nodeA && element.nodeZ == nodeZ) ||
        (element.nodeA == nodeZ && element.nodeZ == nodeA)) {
            return element;
        }
    }
    return true;
}
//查找并创建link
function find_create_link(nodeA, nodeZ) {
    _find = find_link(nodeA, nodeZ);
    if (_find == false) return null;
    if (_find == true) return newLink(nodeA, nodeZ, 0, nodeA.text + "<->" + nodeZ.text);
    return _find;
}
//创建结点
function newNode(x, y, w, h, text, hero_name) {
    var node = new JTopo.Node(text);
    node.setLocation(x, y);
    if (w || h) node.setSize(w, h);
    node.fillColor = JTopo.util.randomColor();
    node.setImage('./img/Heroes/' + hero_name + '_hphover.png');
    //node.alpha = 0.7;
    node.layout = { "hero_name": hero_name, "hero_id": text};

    scene.add(node);
    return node;
}
//创建连接
function newLink(nodeA, nodeZ, arrowsRadius, text) {
    const link = new JTopo.Link(nodeA, nodeZ, text);

    link.lineWidth = 3;
    link.bundleOffset = 60;
    link.bundleGap = 20;
    link.textOffsetY = 3;
    link.strokeColor = JTopo.util.randomColor();
    link.alpha = 0.75;
    link.arrowsRadius = arrowsRadius;

    scene.add(link);

    return link;
}
//json返回指定的key或者value, key_value(0 key:1 value)
function get_key_value_json(json_data, _index, key_value) {
    var i = 0;
    for (var key in json_data) {
        if (i == _index) {
            return ((key_value == 0) ? key : json_data[key]);
        }
        i++;
    }
}
//英雄名查找
function get_name_by_id_json(id, heroes_array) {
    for (let index = 0; index < heroes_array.length; index++) {
        const element = heroes_array[index];
        if (element["id"] == id)
            return element["name"];
    }
    console.log("未找到" + id);
}
//读取json文件
function read_json_file(url) {
    var _url = url;
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var json = JSON.parse(request.responseText);
            console.log(json);
            return json;
        }
    }
}
//跳转获取
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null && r[2] != "false")
        return unescape(r[2]);
    return false;
}
console.log(getQueryString("from"));
//初始化scene，包括通用背景等
function initScene(_scene) {
    _scene.clear();
    _scene.background = './img/grey_bg.jpg';
}
//全局变量
var stage = new JTopo.Stage(canvas);
var scene = new JTopo.Scene(stage);
var date_from = JSON.parse(getQueryString("from")),
    date_to = JSON.parse(getQueryString("to"));
update_data(date_from, date_to)
initScene(scene);

////
//设置按照次数进行展示
////
function set_link_for_hero_function(nodeA, nodeZ) {
    _link = find_create_link(nodeA, nodeZ);
    if (_link != null) _link.lineWidth += 3;
}
function set_link_text_for_hero_function(count, hero_list, count_kind_str, hero_ids) {
    var _links = stage.find('link');
    for (let i = 0; i < _links.length; i++) {
        const element = _links[i];
        element.text = (element.lineWidth / 3 - 1).toString();
    }
    for (let index = 0; index < count; index++) {
        var _find = find_node(get_key_value_json(hero_list[count_kind_str][index], 0, 0));
        if (_find != null) _find.text =
        get_name_by_id_json(get_key_value_json(hero_list[count_kind_str][index], 0, 0),hero_ids["heroes"]) +
            ":" +
            get_key_value_json(hero_list[count_kind_str][index], 0, 0) +
            ":" +
            get_key_value_json(hero_list[count_kind_str][index], 0, 1);
        else
            console.log("not find node to rename");
    }
}
function set_hero_count(count, count_kind_str, larger) {
    initScene(scene);
    var hero_dicts = hero_test;
    var hero_list = hero_list_json;
    var hero_ids = JSON.parse(hero_id_json);
    console.log(hero_dicts);
    console.log(hero_list);
    console.log(hero_ids);
    //127x71
    for (let index = 0; index < count; index++) {
        console.log(get_key_value_json(hero_list[count_kind_str][index], 0, 1));
        newNode(
            Math.random() * (canvas.width - 50) + 25,
            Math.random() * (canvas.height - 50) + 25,
            12.7 * (larger * get_key_value_json(hero_list[count_kind_str][index], 0, 1)),
            7.1 * (larger * get_key_value_json(hero_list[count_kind_str][index], 0, 1)),
            get_key_value_json(hero_list[count_kind_str][index], 0, 0),
            get_name_by_id_json(get_key_value_json(hero_list[count_kind_str][index], 0, 0), hero_ids["heroes"])
        );
    }
    //add link
    for (let index = 0; index < Object.keys(hero_dicts).length; index++){
        const current_hero_data = hero_dicts[index.toString()];
        set_link_for_hero_function(find_node(current_hero_data["hero1"]), find_node(current_hero_data["hero2"]));
        set_link_for_hero_function(find_node(current_hero_data["hero1"]), find_node(current_hero_data["hero3"]));
        set_link_for_hero_function(find_node(current_hero_data["hero1"]), find_node(current_hero_data["hero4"]));
        set_link_for_hero_function(find_node(current_hero_data["hero1"]), find_node(current_hero_data["hero5"]));
        set_link_for_hero_function(find_node(current_hero_data["hero2"]), find_node(current_hero_data["hero3"]));
        set_link_for_hero_function(find_node(current_hero_data["hero2"]), find_node(current_hero_data["hero4"]));
        set_link_for_hero_function(find_node(current_hero_data["hero2"]), find_node(current_hero_data["hero5"]));
        set_link_for_hero_function(find_node(current_hero_data["hero3"]), find_node(current_hero_data["hero4"]));
        set_link_for_hero_function(find_node(current_hero_data["hero3"]), find_node(current_hero_data["hero5"]));
        set_link_for_hero_function(find_node(current_hero_data["hero4"]), find_node(current_hero_data["hero5"]));
    }
    set_link_text_for_hero_function(count, hero_list, count_kind_str, hero_ids);
}
////
//按照出场次数
////
function set_hero_shows() {
    set_hero_count(document.getElementById('hero_show_count').value, 'hero_counts', 1);
}
////
//设置按照赢的次数进行展示
////
function set_hero_wins() {
    set_hero_count(document.getElementById('hero_win_count').value, "hero_win", 1);
}
////
//设置按照输的次数进行展示
////
function set_hero_loses() {
    set_hero_count(document.getElementById('hero_lose_count').value, "hero_lose", -1);
}
