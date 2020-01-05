$(function(){
    var name = localStorage.getItem('name') || ''
    $("#name").val(name)
    var pwd = localStorage.getItem('pwd') || ''
    $("#pwd").val(pwd)

    //登录按钮点击事件
    $(".loginBtn").click(function(){
        //存储姓名
        name = $.trim($("#name").val()) 
        $("#name").val(name)
        localStorage.setItem('name',name)
        //存储密码
        pwd = $.trim($("#pwd").val()) 
        $("#pwd").val(pwd)
        localStorage.setItem('pwd',pwd)  
    })
})