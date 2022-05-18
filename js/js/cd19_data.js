$(function(){
    var color = ['#63a745', '#17a2b8', '#343a40', '#dc3545'];
    var title = ['累計確診', '新增確診', '累計死亡', '台灣疫苗涵蓋率'];

    $(document).ready(() => {
        $.getJSON('http://cs102.nihs.tp.edu.tw:5050/job1').then((res) => { console.log(res);
            for (let i = 0; i < 4; i++) {
                createData(title[i], color[i], res[0][i+1], i);

                if (i == 2){
                    $(`#cd19-box2`).append(`<span style="font-size: 10px; font-family: Arial, Helvetica, sans-serif;">(${res[0][5]})</span>`);
                }
            }
        })
    })
    function createData(title='標題', color='#000', text='123', pos){
        $('#js-cd19-data').append(`
            <div id="cd19-box${pos}" class="text-center m-auto">
                <div style="color:#555555">${title}</div>
                <span style="color: ${color}; font-size: 35px;" class="fw-bold">${text}</span>
            </div>
        `); 
    }

    // test
    var res = [
        ['台灣','896,059', '+65,833', '1,135', '86.24%','+38'],
        ['新北','123,459', '+36,213', '896', '85.13%','+10'],
        ['台北','123,456', '+36,213', '896', '85.13%','+10']
    ];
    for (let i = 0; i < 4; i++) {
        createData(title[i], color[i], res[0][i+1], i);
        if (i == 2) $(`#cd19-box2`).append(`<span style="font-size: 10px; font-family: Arial, Helvetica, sans-serif;">(${res[0][5]})</span>`);
    }
});