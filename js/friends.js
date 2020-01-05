$(function(){
    $(".autoCli").trigger("click")
    //保存按钮点击事件
    $(".save").click(function(){
        //姓名
        let name = $.trim($("#friName").val()) 
        $("#friName").val('')
        //手机号
        let pho = $.trim($("#friPho").val()) 
        $("#friPho").val('')
        //性别
        let sex = $("input[type=radio]:checked").val()
        if(sex == 'male'){
            sex = "男"
        }else if(sex == 'female'){
            sex = "女"
        }else{
            sex = ' '
        }
        if(name == '' || pho == ''){
            alert("姓名或手机号不能为空")
            return false
        }

        var $newP = '<li index='+arr.length+' class="ui-li-static ui-body-inherit ui-last-child"><div class="perBox"><button class="personBtn ui-btn ui-icon-user ui-btn-icon-left"><span>'+name+' </span> <span>'+sex+' </span> <span> '+pho+' </span></button></div> <div class="rigBtnBox"> <button class="chatBtn ui-btn ui-icon-comment ui-btn-icon-left">聊天</button> <button class="deleteBtn ui-btn ui-icon-delete ui-btn-icon-left">删除</button></div></li>'
        arr.push($newP)
        $(".friends").append($newP)
        console.log($newP)
        console.log(arr.length)
    })
    let arr = $(".friends li")
    //给每一个联系人设置下标
    for(let i=0;i<arr.length;i++){
        $("li").eq(i).attr('index',i)
    }

    //事件委托-聊天按钮点击事件
    $("ul").delegate(".chatBtn","click",function(){   //事件委托，li事件冒泡到ul
        let i = $(this).parents("li").attr('index') //获取该按钮的序号
        let txt = $("li[index="+i+"]").find(".personBtn").children().eq(0).html()
        localStorage.setItem('txt',txt)

        window.location.href="chat.html"
    })
    //事件委托-删除按钮点击事件
    $("ul").delegate(".deleteBtn","click",function(){   //事件委托，li事件冒泡到ul
        let i = $(this).parents("li").attr('index') //获取该按钮的序号
        $("li[index="+i+"]").remove()
        console.log(i)
    })
})