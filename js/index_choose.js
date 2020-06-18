function date_compare(from, to) {
    if (from["year"] > to["year"]) { return false; }
    if (from["month"] > to["month"]) { return false; }
    if ((from["date"] > to["date"])&&(from["month"] == to["month"])) { return false; }
    console.log(from + "-" + to);
    return true;
}

//全局变量
var date_from = null,
    date_to = null;


layui.use(['form', 'layedit', 'laydate', 'element', 'jquery'], function () {
    var form = layui.form,
        laydate = layui.laydate,
        layer = layui.layer,
        element = layui.element,
        $ = layui.jquery;
    $(document).on('click','#back-to-index',function(){
        //layer.msg('hello');
        window.location.href = "index.html";
    });
    $(document).on('click', '#hero-data-search', function () {
        if (date_compare(date_from, date_to) == false)
            layer.msg("日期选择错误");
        else {
            window.open('hero_data.html?' + 'from=' + JSON.stringify(date_from) + "&to=" + JSON.stringify(date_to));

        }
    });
    element.on('nav(demo)', function(elem){
        //console.log(elem)
        layer.msg(elem.text());
        window.location.href = "index.html";
    });
    laydate.render({
        elem: '#date-choose-from'
        //这里要根据抓取的数据进行调整
        , min: '2019-01-01'
        , max: '2019-12-31'
        , done: function (value, date) {
            date_from = date;
        }
    });
    laydate.render({
        elem: '#date-choose-to'
        , min: '2019-01-01'
        , max: '2019-12-31'
        , done: function (value, date) {
            date_to = date;
        }
    });
});