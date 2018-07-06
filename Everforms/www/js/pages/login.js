$('#doLogin').on('click', function() {
    $.ajax({
        method: 'get',
        url: 'http://qa.everlytic.net/api/3.0/forms',
        username: $('#username').val(),
        password: $('#apikey').val(),
        dataType: 'json',
        success: function (response) {
            formList = response.data;
            document.location.href = 'dashboard.html'
        },
    })
});