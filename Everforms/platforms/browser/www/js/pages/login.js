$('#doLogin').on('click', function() {
    $('.js-login-response').html('Something went wrong').hide();
    $.ajax({
        method: 'get',
        url: 'http://qa.everlytic.net/api/3.0/forms',
        username: $('#username').val(),
        password: $('#apikey').val(),
        dataType: 'json',
        beforeSend: function() {
            $('#doLogin').html('<i class="fa fa-gear fa-spin"></i> Login').addClass('disable').attr('disabled', true);
        },
    }).done(function (response) {
        if (response.result === 'success') {
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('lists', JSON.stringify(response.data));
            document.location.href = 'dashboard.html';
        } else {
            $('#doLogin').html('Login').removeClass('disable').removeAttr('disabled');
            $('.js-login-response').html('Something went wrong').show();
        }
    }).fail(function(jqXHR, status) {
        $('#doLogin').html('Login').removeClass('disable').removeAttr('disabled');
        if (jqXHR.statusText === "Unauthorized") {
            $('.js-login-response').html('Your username or password is wrong').show();
        }
    })
});