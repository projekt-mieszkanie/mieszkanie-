var _oldValue=null;
function loadData(){
    var code="";
    var gray = "";
    var d=new Date();
    var date=d.getDate();
    var day=d.getDay();

    if(day==0) {
        d.setDate(d.getDate() - 6);
    }
    else if (date - day != 0) {
        d.setDate(d.getDate() - day + 1);
    }

    for(r=0;r<5;r++){
        code=code+" <div class=\"row\">";
        for(it=0;it<7;it++){
            gray=checkDate(d);
            code=code+"<div class=\"block "+gray+"\" onclick=\"buldBigBlock(this)\">"+d.getDate()+"</div>";
            d.setDate(d.getDate()+1);
        }
        code=code+"</div>";
        if(r<4)
            code=code+"<hr>";
    }
    document.getElementById("dates").innerHTML=code;
}

function checkDate(date) {
    var result="";
    var today=new Date();
    if(date<today)
        result="old";
    if(date.getFullYear()>today.getFullYear())
        result="old";
    if((date.getFullYear()==today.getFullYear())&&(date.getMonth()>today.getMonth()))
        result="old";
    if((date.getFullYear()==today.getFullYear())&&(date.getMonth()==today.getMonth())&&(date.getDate()==today.getDate())){
        result=result+" today";
    }
    return result;
}

function buildSmallBlock(x){
    x.innerHTML=_oldValue;
}

function buldBigBlock(x){
    _oldValue=x.innerHTML;
    var test;
    var code="<div class=\"activated\" onmouseout=\"buildSmallBlock(test=this.parentNode)\"></div>";
    x.innerHTML=code;
}

window.onload=loadData;
