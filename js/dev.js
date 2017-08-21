 flash('55');
//flash(global('DEVICE'));
flash(this);



// Anonymous "self-invoking" function
(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        // Use $ here...
flash($);
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();



flash('end');