$(document).ready(() => {
    // Insert<div> 
    jQuery('<span>',{
        id: "navbar-time",
        class: "navbar-text"
    }).appendTo('#collapsibleNavbar');
    // UpLoadTime yyyy/MM/dd hh:mm, 1000ms
    function upLoadTime(){
        var dt = new Date();
        $('#navbar-time').text( dt.getFullYear()
        +`/${(dt.getMonth()+1).toString().padStart(2,'0')}`
        +`/${(dt.getDate()).toString().padStart(2,'0')}`
        +` ${(dt.getHours()).toString().padStart(2,'0')}`
        +`:${(dt.getMinutes()).toString().padStart(2,'0')}`
        );
        setTimeout(upLoadTime, 1000);
    } upLoadTime();
})
console.log(new Date());