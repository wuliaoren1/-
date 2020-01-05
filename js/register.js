$(function(){
    $(".autoCli").trigger("click")

    //提交按钮点击事件
    $(".submit").click(function () { 
        //存储姓名
        var name = $.trim($("#name").val()) 
        $("#name").val(name)
        localStorage.setItem('name',name)
        //存储密码
        var pwd = $.trim($("#pwd").val()) 
        $("#pwd").val(pwd)
        localStorage.setItem('pwd',pwd)
        //存储年龄
        localStorage.setItem('age',$("input[name=points]").val())
        //存储性别
        localStorage.setItem('sex',$("input[name=gender]:checked").val())
        //存储颜色
        for(let i = 0 ; i < 3 ; i++){
            var color = $("input[type=checkbox]:checked").eq(i).val()
            localStorage.setItem('color'+i,color)
            console.log(localStorage.getItem('color'+i))
        }
    })
})