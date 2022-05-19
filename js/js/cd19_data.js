$(function(){
    var title = [
        ['累計確診', '新增確診', '累計死亡', '台灣疫苗涵蓋率'],
        ['累計確診', '新增確診', '第一劑', '第二劑']
    ];
    var res = [
        ['台灣','896,059', '+65,833', '1,135', '86.24%','+38'],
        ['台北','123,656', '+36,21', '15', '85.23%','+12'],
        ['新北','123,459', '+36,213', '896', '85.13%','+10']
    ];

    var cd19_data_box, cd19_box_top, cd19_box_bottom, cd19_box_2;
    var btn_choose_county = $(".btn-choose-county");
    var btn_navbar_brand = $(".navbar-brand");

    $.getJSON('http://cs102.nihs.tp.edu.tw:5050/job1').then((res) => { console.log(res);

    });
    
    function create_element(){
        var color = ['#63a745', '#17a2b8', '#343a40', '#dc3545'];

        for(let i=0; i<4; i++){
            $('#js-cd19-data').append(`
                <div class="cd19_data_box text-center m-auto">
                    <div class="cd19_box_top" style="color:#555555">${title[0][i]}</div>
                    <span class="cd19_box_bottom fw-bold" style="color:${color[i]}; font-size: 35px;">${res[0][i+1]}</span>
                </div>
            `);
        }
        $(`#js-cd19-data > div`).eq(2).append(`<span class="cd19_box_2" style="font-size: 10px; font-family: Arial, Helvetica, sans-serif;">(${res[0][5]})</span>`);

        cd19_data_box = $('.cd19_data_box');
        cd19_box_top = $('.cd19_box_top');
        cd19_box_bottom = $('.cd19_box_bottom');
        cd19_box_2 = $('.cd19_box_2');
    }

    function btn_update(pos){
        for(let i=0; i<4; i++){
            cd19_box_top.eq(i).text(title[1][i]);
            cd19_box_bottom.eq(i).text(res[pos][i+1]);
        }
        cd19_box_2.text(`(${res[pos][5]})`);
        btn_navbar_brand.text(res[pos][0]);
    }

    btn_choose_county.click(function(){ btn_update(btn_choose_county.index(this)+1); });

    create_element();
});

