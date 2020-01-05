$(function(){
    $(".autoCli").trigger("click")

    $(".txt").html(localStorage.getItem('txt')||'我的好友')
    //发送按钮点击事件
    $('.sendMes').click(function(){
        if($(".writeMes").val() == '') {
            return false
        }
        //添加消息
        $(".message").append('<div class="me"><p class="myMes mes">'+$(".writeMes").val()+'</p><div class="myHead head"></div></div>')
        $(".writeMes").val('')  //清空输入框
    })
    
    //键盘按下事件
    $("body").keydown(function() {
        if (event.keyCode == "13") {//keyCode=13是回车键
            $('.sendMes').click();
        }
    })
})