
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

$(document).on('click',"#start_fuzzing",function(){
    layer.msg("开始fuzzing");
});

$(document).on('click', '#check_fuzzing', function () {
    layer.msg("查看当前fuzzing结果");
});