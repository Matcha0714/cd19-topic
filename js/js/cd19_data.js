
$(function(){
    var cd19_data = $('#js-cd19-data');

    var color = ['#63a745', '#17a2b8', '#343a40', '#dc3545'];
    var title = [
        ['累計確診', '新增確診', '總接種人次', '台灣疫苗涵蓋率'],
        ['累計確診', '新增確診', '第一劑', '第二劑']
    ];
    var res = [
        ['台灣','981,141', '+85,356', '1,135', '86.24%'],
        ['新北市','372,720', '+27,230', '86%', '81.5%'],
        ['台北市','176,096', '+12,069', '84.5%', '80.6%'],
        ['基隆市','36,598', '+2,428', '87.6%', '82.8%'],
        ['宜蘭縣','22,448', '+1,936', '86.8%', '81.7%'],
        ['桃園市','153,382', '+9,658', '87.1%', '82.4%']
    ];

    // Initial Element
    // cd19 data
    for(let i=0; i<4; i++){
        $('#js-cd19-data').find('div').eq(3).append(`
            <div class="cd19_data_box text-center m-auto">
                <div class="cd19_box_top" style="color:#555555">${title[0][i]}</div>
                <span class="cd19_box_bottom fw-bold" style="color:${color[i]}; font-size: 35px;">${res[0][i+1]}</span>
            </div>
        `);
    }
    // button
    for(let i=1; i<res.length; i++){
        var btn = $(`<button type="button" class="btn-choose-county btn btn-outline-secondary" style="margin: 0px 5px 10px 5px;">${res[i][0]}</button>`);
        cd19_data.find('div').eq(0).find('div').append(btn);
    }

    var cd19_box_top = $('.cd19_box_top'), cd19_box_bottom = $('.cd19_box_bottom');
    var btn_choose_county = $(".btn-choose-county");
    var btn_navbar_brand = $(".navbar-brand");

    // button update cd19 data
    btn_choose_county.click(function(){
        let pos = btn_choose_county.index(this)+1;

        for(let i=0; i<4; i++){
            cd19_box_top.eq(i).text(title[1][i]);
            cd19_box_bottom.eq(i).text(res[pos][i+1]);
        }
        btn_navbar_brand.text(res[pos][0]);
    });

    $.getJSON('http://cs102.nihs.tp.edu.tw:5050/job1').then((res) => { console.log(res);

    });
});

