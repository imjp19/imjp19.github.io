// var COLOURS = [ '#c3c4eb', '#FDF5E6', '#FFEBCD', '#F0F0FE', '#FFFFFF', '#FFFAFA', '#E0E0E0'];
var COLOURS = ['#003049', '#ffd166', '#06d6a0', '#c9ada7', '#d62828', '#577399', '#495867'];
var radius = 0;
var randomColor = 0;

function colourChange() {
    randomColor = parseInt(0 + (COLOURS.length - 0) * Math.random(), 10);
}

const menu = document.querySelector('.menu');
const btn = menu.querySelector('.nav-tgl');
const navItem1 = menu.querySelector('.nav-item1');
const navItem2 = menu.querySelector('.nav-item2');
const navItem3 = menu.querySelector('.nav-item3');
const navItem4 = menu.querySelector('.nav-item4');
const navItem5 = menu.querySelector('.nav-item5');
btn.addEventListener('click', evt => {
    menu.classList.toggle('active');
    colourChange();
});
navItem1.addEventListener('click', evt => {
    menu.classList.toggle('active');
    colourChange();
});
navItem2.addEventListener('click', evt => {
    menu.classList.toggle('active');
    colourChange();
});
navItem3.addEventListener('click', evt => {
    menu.classList.toggle('active');
    colourChange();
});
// navItem4.addEventListener('click', evt => {
// 	menu.classList.toggle('active');
// 	colourChange();
// });
// navItem5.addEventListener('click', evt => {
// 	menu.classList.toggle('active');
// 	colourChange();
// });

Sketch.create({

    container: document.getElementById('background-content'),
    autoclear: false,
    retina: 'auto',

    update: function() {
        radius = 300;
    },

    click: () => colourChange(),

    touchmove: function() {

        for (var i = this.touches.length - 1, touch; i >= 0; i--) {

            touch = this.touches[i];

            this.lineCap = 'round';
            this.lineJoin = 'round';
            this.fillStyle = this.strokeStyle = COLOURS[randomColor % COLOURS.length];
            this.lineWidth = radius;

            this.beginPath();
            this.moveTo(touch.ox, touch.oy);
            this.lineTo(touch.x, touch.y);
            this.stroke();
        }
    },

    touchend: () => colourChange()
});

$(document).ready(function($) {
    "use strict";

    // Element fade in animation

    $(".animate").each(function(e) {
        var $this = $(this);
        setTimeout(function() {
            $this.addClass("idle");
        }, e * 100);
    });
});

// Experiment

(function() {

    var word = ['Web Dev 👨‍💻', 'App Dev 📱', 'Student 👨‍🎓', 'CTO 👨‍💼'];
    var element = document.getElementsByClassName('flipText')[0];
    var wordIndex = 1;

    var resetAnimation = function() {
        element.classList.remove('flip');
    }

    setInterval(function() {
        switch (wordIndex) {
            case 0:
                element.classList.add('flip');
                element.textContent = word[wordIndex];
                wordIndex = 1;
                setTimeout(resetAnimation, 1000);
                break;

            case 1:
                element.classList.add('flip');
                element.textContent = word[wordIndex];
                wordIndex = 2;
                setTimeout(resetAnimation, 1000);
                break;

            case 2:
                element.classList.add('flip');
                element.textContent = word[wordIndex];
                wordIndex = 3;
                setTimeout(resetAnimation, 1000);
                break;

            case 3:
                element.classList.add('flip');
                element.textContent = word[wordIndex];
                wordIndex = 0;
                setTimeout(resetAnimation, 1000);
                break;

                // case 4:
                //     element.classList.add('flip');
                //     element.textContent = word[wordIndex];
                //     wordIndex = 0;
                //     setTimeout(resetAnimation, 1000);
                //     break;
        }
    }, 2000)
}());