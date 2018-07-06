$('#doLogin').on('click', function() {
    $('.js-login-response').html('Something went wrong').hide();
    $.ajax({
        method: 'get',
        url: 'http://qa.everlytic.net/api/3.0/forms',
        username: $('#username').val(),
        password: $('#apikey').val(),
        dataType: 'json'
    }).done(function (response) {
        if (response.result === 'success') {
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('forms', JSON.stringify(response.data));
            document.location.href = 'dashboard.html';
        } else {
            $('.js-login-response').html('Something went wrong').show();
        }
    }).fail(function(jqXHR, status) {
        if (jqXHR.statusText === "Unauthorized") {
            $('.js-login-response').html('Your username or password is wrong').show();
        }
    })
});