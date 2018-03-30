/**
 * Created by james6 on 16/12/28.
 */
$(document).ready(function(e){
    /*点击搜索 弹出搜索框*/
    $('.src').click(function(){
        if($('.srcResult').is(':hidden')){
            $('.srcResult').show();
        }else{
            $('.srcResult').hide();
        }
    });
    /*点击高级搜索 弹出高级搜索框*/
    $('.highSrc').click(function(){
        if($('.high').is(':hidden')){
            $('.high').show();
        }else{
            $('.high').hide();
        }
    });
    /*点击详情 弹出网点、取件、咨询信息*/
    $('.dropMenu').click(function(){
        if($('.titTabs').is(':hidden')){
            $('.titTabs').show();
        }else{
            $('.titTabs').hide();
        }
    });
    /*点击删除 隐藏高级搜索框并清空输入框的内容*/
    $('.delete').click(function(){
        $('.high').css('display','none');
        $('.choose').val('');
    });
    /*Tab选项卡*/
    $('.tab li').click(function(){
       $('.tab li').eq($(this).index()).addClass('active').siblings().removeClass('active');
       $('.tabCon div').hide().eq($(this).index()).show();
    });
});

/*全选或取消全选*/
function selectAllDels(){
    var allWp=document.getElementsByName("wp");
    var selOrUnsel=false;
    for(var i=0; i<allWp.length;i++){
        if(allWp[i].checked){
            selOrUnsel=true;
            break;
        }
    }
    if (selOrUnsel){
        allUnchk(allWp);
    }else{
        allchk(allWp);
    }
}
function allchk(allWp){
    for(var i=0; i<allWp.length;i++ ){
        allWp[i].checked=true;
    }
}
function allUnchk(allWp){
    for(var i=0; i<allWp.length;i++){
        allWp[i].checked=false;
    }
}

