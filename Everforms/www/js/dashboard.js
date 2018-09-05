var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        var formList = JSON.parse(localStorage.getItem('lists'));
        $.each(formList, function(index, element) {
            getIdFromForm(element.form_embed_url);
            $('.js-forms-list').append('<li class="list-group-item text-capitalize">' + element.form_name + '<button class="btn btn-success btn-sm float-right"><i class="fa fa-sync-alt"></i></button>' + '</li>');
        });
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

getIdFromForm = function (url) {
    $.ajax({
        type: "GET",
        url: url,
        timeout: 60
    }).done(function (response) {
        console.log(response)
    });
};