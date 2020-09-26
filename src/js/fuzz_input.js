// 功能函数
var sleep = function(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};

var fuzz_out_data;
// json
var fuzz_out_data_json = [];

function visableExample() {
    console.log("hide examples");
    $("#examples").hide();
    // style = "display: none;";
    // document.getElementById("examples").style.display = "none";
}
visableExample();

function show_form(show_case) {
    $("#fuzztarget").hide();
    $("#fuzztestcase").hide();
    $("#fuzzcreater").hide();
    $("#fuzzdict").hide();
    $("#fuzzrun").hide();
    switch (show_case) {
        case 1:
            $("#fuzztarget").show();
            break;
        case 2:
            $("#fuzztestcase").show();
            break;
        case 3:
            $("#fuzzcreater").show();
            break;
        case 4:
            $("#fuzzdict").show();
            break;
        case 5:
            $("#fuzzrun").show();
            break;
    }
}

show_form(1);

function fuzztarget() {
    console.log("set fuzz target");
    show_form(1);
}
function fuzztestcase() {
    console.log("set fuzz test cases");
    show_form(2);
}
function fuzzcreater() {
    console.log("set fuzz creater");
    show_form(3);
}
function fuzzdict() {
    console.log("set fuzz dict");
    show_form(4);
}
function fuzzrun() {
    console.log("run fuzz");
    show_form(5);
    //运行fuzz
}

//layui part
layui.use('upload', function () {
    var $ = layui.jquery
        , upload = layui.upload;
    //选完文件后不自动上传
    upload.render({
        elem: '#choose_target'
        , url: 'https://httpbin.org/post' //改成您自己的上传接口
        , auto: false
        , accept: 'file' //普通文件
        //,multiple: true
        , bindAction: '#upload_target'
        , done: function (res) {
            layer.msg('上传成功');
            console.log(res)
        }
    });
})

layui.use('table', function(){
    var table = layui.table;
    
    //展示已知数据
    fuzz_out_data = table.render({
      elem: '#fuzz_data'
      ,cols: [[ //标题栏
        {field: 'id', title: '指标', width: 200, sort: true}
        ,{field: 'data', title: '数值', width: 160}
        ,{field: 'time', title: '更新时间', width: 160}
        ]]
      ,data: [{
        "id": "路径总数"
        ,"data": "1"
        ,"time": "2020-9-26/23/23"
      }, {
        "id": "当前路径"
        ,"data": "0"
        ,"time": "2020-9-26/23/23"
      }, {
        "id": "pending_favs"
        ,"data": "0"
        ,"time": "2020-9-26/23/23"
      }, {
        "id": "pending_total"
        ,"data": "0"
        ,"time": "2020-9-26/23/23"
      }, {
        "id": "完成轮数"
        ,"data": "93238"
        ,"time": "2020-9-26/23/23"
      }, {
        "id": "独一无二crash"
        ,"data": "93238"
        ,"time": "2020-9-26/23/23"
      }, {
        "id": "独一无二hangs"
        ,"data": "0"
        ,"time": "2020-9-26/23/23"
      }, {
        "id": "最近crash之后执行次数"
        ,"data": "21130217"
        ,"time": "2020-9-26/23/23"
      }, {
        "id": "执行时间"
        ,"data": "20"
        ,"time": "2020-9-26/23/23"
      }]
      //,skin: 'line' //表格风格
      ,even: true
      //,page: true //是否显示分页
      //,limits: [5, 7, 10]
      //,limit: 5 //每页默认显示的数量
    });
  });

$(document).on('click',"#start_fuzzing",function(){
    layer.msg("开始fuzzing");
});

$(document).on('click', '#check_fuzzing', function () {
    layer.msg("查看当前fuzzing结果");
});

// fuzz数据更新
var start_show = 0;
function update_data(json_str) {
    var json = JSON.parse(json_str);

    fuzz_out_data_json[0] = {
        "id": "路径总数"
        , "data": json["paths_total"]
        , "time": "2020-9-26/23/23"
    };
    fuzz_out_data_json[1] = {
        "id": "当前路径"
        , "data": json["cur_path"]
        , "time": "2020-9-26/23/23"
    };
    fuzz_out_data_json[3] = {
        "id": "pending_favs"
        , "data": json["pending_favs"]
        , "time": "2020-9-26/23/23"
    };
    fuzz_out_data_json[4] = {
        "id": "pending_total"
        , "data": json["pending_total"]
        , "time": "2020-9-26/23/23"
    };
    fuzz_out_data_json[5] = {
        "id": "完成轮数"
        , "data": json["cycles_done"]
        , "time": "2020-9-26/23/23"
    };
    fuzz_out_data_json[6] = {
        "id": "独一无二crash"
        , "data": json["unique_crashes"]
        , "time": "2020-9-26/23/23"
    };
    fuzz_out_data_json[7] = {
        "id": "独一无二hangs"
        , "data": json["unique_hangs"]
        , "time": "2020-9-26/23/23"
    };
    fuzz_out_data_json[8] = {
        "id": "最近crash之后执行次数"
        , "data": json["execs_since_crash"]
        , "time": "2020-9-26/23/23"
    };
    fuzz_out_data_json[9] = {
        "id": "执行时间"
        , "data": json["exec_timeout"]
        , "time": "2020-9-26/23/23"
    };
}
function update() {
    if (start_show == 1) {
        // console.log("更新");
        
        var json_str;
        //这里的str是从后端传过来的json字符串，应该得想办法在这里更新一下，进行赋值

        update_data(json_str);
        fuzz_out_data.reload({
            elem: '#fuzz_data'
            ,cols: [[ //标题栏
                {field: 'id', title: '指标', width: 200, sort: true}
                ,{field: 'data', title: '数值', width: 160}
                ,{field: 'time', title: '更新时间', width: 160}
                ]]
            ,data: fuzz_out_data_json
            //,skin: 'line' //表格风格
            ,even: true
            //,page: true //是否显示分页
            //,limits: [5, 7, 10]
            //,limit: 5 //每页默认显示的数量
        });
    }
}

function start() {
    
    //这里加开启fuzz的方法，启动afl


    start_show = 1;
    setInterval("update()", 1000);

}

function check_update() {
    start_show = 1;
    update();
}

// while (1) {
//     if (start_show == 1) {
//         sleep(1000);
//         update();
//     }
// }