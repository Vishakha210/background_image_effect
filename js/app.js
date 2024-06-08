var imgbox=document.querySelector('.img-box');
var imgwrap=document.querySelector('.img-wrap');
var line=document.getElementById('line')
var leftspace=imgbox.offsetLeft;

imgbox.onmousemove=function (e){
    var boxwidth=(e.pageX-leftspace) + "px";
    imgwrap.style.width=boxwidth;
    line.style.left=boxwidth;
}



