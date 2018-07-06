var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        var formList = {
            "result": "success",
            "data": [{
                "form_name": "test double opt in",
                "form_description": "",
                "form_embed_url": "http:\/\/qa.everlytic.net\/public\/forms\/get\/zIa80rTsnKBqcezb\/MmM2NGQxOWI1ZTlmOTIxYjZlMWE2NzdkOGIyNTJjMTQxMzU2YmM0OQ=="
            }, {
                "form_name": "test sub success",
                "form_description": "",
                "form_embed_url": "http:\/\/qa.everlytic.net\/public\/forms\/get\/thIh8gz8JAYNAOpV\/ZWRmM2Q4ZTI5MGQyN2Q5M2IwMTE0ZTg3MDQzZThjNDQwNDBmY2Y0Mg=="
            }, {
                "form_name": "Test confirmation",
                "form_description": "",
                "form_embed_url": "http:\/\/qa.everlytic.net\/public\/forms\/get\/YEZbKRceC8sIx4hi\/OTgzNTE4YTUwOWYwYTI2OWE2NDBmYTMwNDE0NjVmYTEyODA2YmEzMQ=="
            }]
        };

        $.each(data.dates, function(index, element) {
            alert(element.timeStamp);
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
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};