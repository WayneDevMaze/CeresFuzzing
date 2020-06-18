var hero_data = [],
    hero_count = [],
    hero_win = [],
    hero_lose = [];
var hero_id_name = [];
function getJsonLength(jsonData) {
    var jsonLength = 0;
    for (var item in jsonData) {
        jsonLength++;
    }
    return jsonLength;
}
function data_file(data) {
    hero_data = [];
    for (let index = 0; index < getJsonLength(data); index++) {
        hero_data[index] = data[index.toString()];      
    }
}
function count_file(data) {
    hero_count = data["hero_counts"];
    hero_win = data["hero_win"];
    hero_lose = data["hero_lose"];
}
function get_count_string(data) {
    var str = '';
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        var element_hero_id = get_key_value_json(element, 0, 0);
        if (element_hero_id > 113) element_hero_id = 113;
        str += "英雄" + hero_id_name[element_hero_id];
        str += " : " + get_key_value_json(element, 0, 1) + ";";
    }
    return str;
}
function create_hero_name() {
    var name_json=JSON.parse('{"heroes": [{"name": "antimage", "id": 1, "localized_name": "Anti-Mage"}, {"name": "axe", "id": 2, "localized_name": "Axe"}, {"name": "bane", "id": 3, "localized_name": "Bane"}, {"name": "bloodseeker", "id": 4, "localized_name": "Bloodseeker"}, {"name": "crystal_maiden", "id": 5, "localized_name": "Crystal Maiden"}, {"name": "drow_ranger", "id": 6, "localized_name": "Drow Ranger"}, {"name": "earthshaker", "id": 7, "localized_name": "Earthshaker"}, {"name": "juggernaut", "id": 8, "localized_name": "Juggernaut"}, {"name": "mirana", "id": 9, "localized_name": "Mirana"}, {"name": "nevermore", "id": 11, "localized_name": "Shadow Fiend"}, {"name": "morphling", "id": 10, "localized_name": "Morphling"}, {"name": "phantom_lancer", "id": 12, "localized_name": "Phantom Lancer"}, {"name": "puck", "id": 13, "localized_name": "Puck"}, {"name": "pudge", "id": 14, "localized_name": "Pudge"}, {"name": "razor", "id": 15, "localized_name": "Razor"}, {"name": "sand_king", "id": 16, "localized_name": "Sand King"}, {"name": "storm_spirit", "id": 17, "localized_name": "Storm Spirit"}, {"name": "sven", "id": 18, "localized_name": "Sven"}, {"name": "tiny", "id": 19, "localized_name": "Tiny"}, {"name": "vengefulspirit", "id": 20, "localized_name": "Vengeful Spirit"}, {"name": "windrunner", "id": 21, "localized_name": "Windranger"}, {"name": "zuus", "id": 22, "localized_name": "Zeus"}, {"name": "kunkka", "id": 23, "localized_name": "Kunkka"}, {"name": "lina", "id": 25, "localized_name": "Lina"}, {"name": "lich", "id": 31, "localized_name": "Lich"}, {"name": "lion", "id": 26, "localized_name": "Lion"}, {"name": "shadow_shaman", "id": 27, "localized_name": "Shadow Shaman"}, {"name": "slardar", "id": 28, "localized_name": "Slardar"}, {"name": "tidehunter", "id": 29, "localized_name": "Tidehunter"}, {"name": "witch_doctor", "id": 30, "localized_name": "Witch Doctor"}, {"name": "riki", "id": 32, "localized_name": "Riki"}, {"name": "enigma", "id": 33, "localized_name": "Enigma"}, {"name": "tinker", "id": 34, "localized_name": "Tinker"}, {"name": "sniper", "id": 35, "localized_name": "Sniper"}, {"name": "necrolyte", "id": 36, "localized_name": "Necrophos"}, {"name": "warlock", "id": 37, "localized_name": "Warlock"}, {"name": "beastmaster", "id": 38, "localized_name": "Beastmaster"}, {"name": "queenofpain", "id": 39, "localized_name": "Queen of Pain"}, {"name": "venomancer", "id": 40, "localized_name": "Venomancer"}, {"name": "faceless_void", "id": 41, "localized_name": "Faceless Void"}, {"name": "skeleton_king", "id": 42, "localized_name": "Skeleton King"}, {"name": "death_prophet", "id": 43, "localized_name": "Death Prophet"}, {"name": "phantom_assassin", "id": 44, "localized_name": "Phantom Assassin"}, {"name": "pugna", "id": 45, "localized_name": "Pugna"}, {"name": "templar_assassin", "id": 46, "localized_name": "Templar Assassin"}, {"name": "viper", "id": 47, "localized_name": "Viper"}, {"name": "luna", "id": 48, "localized_name": "Luna"}, {"name": "dragon_knight", "id": 49, "localized_name": "Dragon Knight"}, {"name": "dazzle", "id": 50, "localized_name": "Dazzle"}, {"name": "rattletrap", "id": 51, "localized_name": "Clockwerk"}, {"name": "leshrac", "id": 52, "localized_name": "Leshrac"}, {"name": "furion", "id": 53, "localized_name": "Nature\'s Prophet"}, {"name": "life_stealer", "id": 54, "localized_name": "Lifestealer"}, {"name": "dark_seer", "id": 55, "localized_name": "Dark Seer"}, {"name": "clinkz", "id": 56, "localized_name": "Clinkz"}, {"name": "omniknight", "id": 57, "localized_name": "Omniknight"}, {"name": "enchantress", "id": 58, "localized_name": "Enchantress"}, {"name": "huskar", "id": 59, "localized_name": "Huskar"}, {"name": "night_stalker", "id": 60, "localized_name": "Night Stalker"}, {"name": "broodmother", "id": 61, "localized_name": "Broodmother"}, {"name": "bounty_hunter", "id": 62, "localized_name": "Bounty Hunter"}, {"name": "weaver", "id": 63, "localized_name": "Weaver"}, {"name": "jakiro", "id": 64, "localized_name": "Jakiro"}, {"name": "batrider", "id": 65, "localized_name": "Batrider"}, {"name": "chen", "id": 66, "localized_name": "Chen"}, {"name": "spectre", "id": 67, "localized_name": "Spectre"}, {"name": "doom_bringer", "id": 69, "localized_name": "Doom"}, {"name": "ancient_apparition", "id": 68, "localized_name": "Ancient Apparition"}, {"name": "ursa", "id": 70, "localized_name": "Ursa"}, {"name": "spirit_breaker", "id": 71, "localized_name": "Spirit Breaker"}, {"name": "gyrocopter", "id": 72, "localized_name": "Gyrocopter"}, {"name": "alchemist", "id": 73, "localized_name": "Alchemist"}, {"name": "invoker", "id": 74, "localized_name": "Invoker"}, {"name": "silencer", "id": 75, "localized_name": "Silencer"}, {"name": "obsidian_destroyer", "id": 76, "localized_name": "Outworld Devourer"}, {"name": "lycan", "id": 77, "localized_name": "Lycanthrope"}, {"name": "brewmaster", "id": 78, "localized_name": "Brewmaster"}, {"name": "shadow_demon", "id": 79, "localized_name": "Shadow Demon"}, {"name": "lone_druid", "id": 80, "localized_name": "Lone Druid"}, {"name": "chaos_knight", "id": 81, "localized_name": "Chaos Knight"}, {"name": "meepo", "id": 82, "localized_name": "Meepo"}, {"name": "treant", "id": 83, "localized_name": "Treant Protector"}, {"name": "ogre_magi", "id": 84, "localized_name": "Ogre Magi"}, {"name": "undying", "id": 85, "localized_name": "Undying"}, {"name": "rubick", "id": 86, "localized_name": "Rubick"}, {"name": "disruptor", "id": 87, "localized_name": "Disruptor"}, {"name": "nyx_assassin", "id": 88, "localized_name": "Nyx Assassin"}, {"name": "naga_siren", "id": 89, "localized_name": "Naga Siren"}, {"name": "keeper_of_the_light", "id": 90, "localized_name": "Keeper of the Light"}, {"name": "wisp", "id": 91, "localized_name": "Wisp"}, {"name": "visage", "id": 92, "localized_name": "Visage"}, {"name": "slark", "id": 93, "localized_name": "Slark"}, {"name": "medusa", "id": 94, "localized_name": "Medusa"}, {"name": "troll_warlord", "id": 95, "localized_name": "Troll Warlord"}, {"name": "centaur", "id": 96, "localized_name": "Centaur Warrunner"}, {"name": "magnataur", "id": 97, "localized_name": "Magnus"}, {"name": "shredder", "id": 98, "localized_name": "Timbersaw"}, {"name": "bristleback", "id": 99, "localized_name": "Bristleback"}, {"name": "tusk", "id": 100, "localized_name": "Tusk"}, {"name": "skywrath_mage", "id": 101, "localized_name": "Skywrath Mage"}, {"name": "abaddon", "id": 102, "localized_name": "Abaddon"}, {"name": "elder_titan", "id": 103, "localized_name": "Elder Titan"}, {"name": "legion_commander", "id": 104, "localized_name": "Legion Commander"}, {"name": "ember_spirit", "id": 106, "localized_name": "Ember Spirit"}, {"name": "earth_spirit", "id": 107, "localized_name": "Earth Spirit"}, {"name": "abyssal_underlord", "id": 108, "localized_name": "Abyssal Underlord"}, {"name": "terrorblade", "id": 109, "localized_name": "Terrorblade"}, {"name": "phoenix", "id": 110, "localized_name": "Phoenix"}, {"name": "techies", "id": 105, "localized_name": "Techies"}, {"name": "oracle", "id": 111, "localized_name": "Oracle"}, {"name": "winter_wyvern", "id": 112, "localized_name": "Winter Wyvern"}, {"name": "arc_warden", "id": 113, "localized_name": "Arc Warden"}]}');
    for (let index = 0; index < name_json["heroes"].length; index++) {
        hero_id_name[index + 1] = name_json["heroes"][index]["localized_name"];
    }
}
create_hero_name();

layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function () {
    //upload&download

    var $ = layui.jquery
        , upload = layui.upload;
    var table = layui.table;

    var creattable = table.render({
        elem: '#date_table'
        , cellMinWidth: 60 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        , cols: [[
            { field: 'hero1', title: '英雄1_id', sort: true }
            , { field: 'hero2', title: '英雄2_id', sort: true }
            , { field: 'hero3', title: '英雄3_id', sort: true } //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
            , { field: 'hero4', title: '英雄4_id', sort: true }
            , { field: 'hero5', title: '英雄5_id', sort: true }
            , { field: 'win', title: '赢得比赛', sort: true }
        ]]
        , data: hero_data
        , page: true
    });
    
    var uploadInst = upload.render({
        elem: '#uploadDataJson' //绑定页面的元素
        , url: 'http://localhost:8812/api/map/upload3/' //改成您自己的上传接口
        , accept: 'file' //不加这个默认只允许上传图片,加了这个才可以传文件
        , exts: 'json|xlsx' //允许上传的文件后缀，这里可以说一波为了防止木马文件攻击，对文件传输类型进行了限制
        // , before: function (obj) {
        //     //预读本地文件示例，不支持ie8
        //     obj.preview(function (index, file, result) {
        //         $('#demo1').attr('src', result); //图片链接（base64）
        //     });
        // }
        , done: function (res) {
            //如果上传失败
            if (res.status != true) {
                return layer.msg('上传失败');
            }
            //上传成功
            layer.msg('读取成功');
            data_file(JSON.parse(res.data));
            console.log(hero_data);
            creattable.reload({
                elem: '#date_table'
                , cellMinWidth: 60 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
                , cols: [[
                    { field: 'hero1', title: '英雄1_id', sort: true }
                    , { field: 'hero2', title: '英雄2_id', sort: true }
                    , { field: 'hero3', title: '英雄3_id', sort: true } //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
                    , { field: 'hero4', title: '英雄4_id', sort: true }
                    , { field: 'hero5', title: '英雄5_id', sort: true }
                    , { field: 'win', title: '赢得比赛', sort: true }
                ]]
                , data: hero_data
                , page: true
            });
        }
        , error: function () {
            //演示失败状态，并实现重传
            var demoText = $('#demoText');
            demoText.html('<span style="color: #FF5722;">读取失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function () {
                uploadInst.upload();
            });
        }
    });
    var uploadCount = upload.render({
        elem: '#uploadCountsJson' //绑定页面的<i>元素
        , url: 'http://localhost:8812/api/map/upload3/' //改成您自己的上传接口
        , accept: 'file' //不加这个默认只允许上传图片,加了这个才可以传文件
        , exts: 'json' //允许上传的文件后缀，这里可以说一波为了防止木马文件攻击，对文件传输类型进行了限制
        // , before: function (obj) {
        //     //预读本地文件示例，不支持ie8
        //     obj.preview(function (index, file, result) {
        //         $('#demo1').attr('src', result); //图片链接（base64）
        //     });
        // }
        , done: function (res) {
            //如果上传失败
            if (res.status != true) {
                return layer.msg('上传失败');
            }
            //上传成功
            layer.msg('读取成功');
            count_file(JSON.parse(res.data));
            console.log(hero_count);
            document.getElementById("count_show").innerHTML = "出场次数按序排列: "+get_count_string(hero_count);
            document.getElementById("win_show").innerHTML =  "赢场次数按序排列: "+get_count_string(hero_win);
            document.getElementById("lose_show").innerHTML =  "输场次数按序排列: "+get_count_string(hero_lose);
        }
        , error: function () {
            //演示失败状态，并实现重传
            var demoText = $('#demoText');
            demoText.html('<span style="color: #FF5722;">读取失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function () {
                uploadCount.upload();
            });
        }
    });
});
