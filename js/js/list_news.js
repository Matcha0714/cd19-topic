$(function(){
    $.getJSON('http://cs102.nihs.tp.edu.tw:5050/news').then((res) => { console.log(res);
        for(let i = 0; i < res.length; i++){
            InsertItem(res[i][0],res[i][1],res[i][2],res[i][3]);
        }   
    });
    function InsertItem(link, title, date, text) {
        jQuery('<a>', {
            class: 'list-group-item list-group-item-action',
            href: link,
            target: '_blank'
        }).append(`
            <div>${title} ${date}</div>
            <div class="fw-bold">${text}</div>
        `).appendTo('#js-insert-news');
    }

    // test
    for(let i=0; i<12; i++){
        InsertItem('index.html','[測試]',`${i}/00`,'蔡智凱發文反對不斷封城後 又自刪文章')
    }
});