$('#doLogin').on('click', function() {
    $.ajax({
        method: 'get',
        url: 'http://qa.everlytic.net/api/3.0/forms',
        username: $('#username').val(),
        password: $('#apikey').val(),
        dataType: 'json',
        success: function (response) {
            lists = JSON.parse(response.data);
            alert('here');
        },
    })
});