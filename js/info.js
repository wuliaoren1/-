$(function(){
    //打开页面自动触发底部按钮的点击事件
    $(".autoCli").trigger("click")

    //添加内容
    $(".name").append(localStorage.getItem('name'));
    $(".pwd").append(localStorage.getItem('pwd'));
    $(".age").append(localStorage.getItem('age'));
    
    //添加性别
    switch(localStorage.getItem('sex')){
        case 'male':
            $(".sex").append(' 男 ');
            break
        case 'female':
            $(".sex").append(' 男 ');
            break
        default:
            $(".sex").append(' 未设置 ');
    }

    //添加颜色
    for(let i = 0 ; i < 3 ; i++){
        switch(localStorage.getItem('color'+i)){
            case 'red': 
                $(".color").append(' 红色 ')
                break
            case 'green':
                $(".color").append(' 绿色 ')
                break
            case 'blue':
                $(".color").append(' 蓝色 ')
                break
            default:
                break
        }
    }


})