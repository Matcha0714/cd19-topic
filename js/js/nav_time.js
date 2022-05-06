// set navbar time
console.log(new Date());

$(function(){
    // Insert<div> 
    let navbar_time = jQuery('<span>',{
        class: "navbar-text ms-auto"
    }).appendTo('#collapsibleNavbar');
    
    // UpLoadTime yyyy/MM/dd hh:mm, 1000ms
    function upLoadTime(){
        var dt = new Date();
        navbar_time.text(`
            ${dt.getFullYear()}/${setText(dt.getMonth()+1)}/${setText(dt.getDate())}
            ${setText(dt.getHours())}:${setText(dt.getMinutes())}
        `);
        setTimeout(upLoadTime, 1000);
    } 
    function setText(str){
        return str.toString().padStart(2,'0');;
    }
    upLoadTime();
})