const axios = require('axios');
// Make a request for a user with a given ID
//
const vname = $('#name').val()


function register(){
    $.ajax({
        url: '/user/motherfucker',
        type: 'get',
        dataType: 'json',
        data:{'code':300268}
    })
    .done(function(dat) {
        alert(dat.name);
    })
    .fail(function() {
        alert('服务器超时，请重试！');
    });


}
