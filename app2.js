'use strict'

///button = .btn  i css-filen.
const switcher = document.querySelector('.btn');

/// toggle <body> till dark theme class
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);

});