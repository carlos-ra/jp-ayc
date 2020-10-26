// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA2TwrNwwV4-GPhw0dIxTSKhDCCR7FisOg",
    authDomain: "jpay-89644.firebaseapp.com",
    databaseURL: "https://jpay-89644.firebaseio.com",
    projectId: "jpay-89644",
    storageBucket: "jpay-89644.appspot.com",
    messagingSenderId: "364200558180",
    appId: "1:364200558180:web:97774b29621145f13ce971"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function() {
    $("#panel-admin").css("display", "none");

    $('.open').click(function() {
        $("#panel-admin").animate({ width: 'toggle' }, 100);
    });

    if (!document.getElementById('wrapper').className && !localStorage.getItem("selectedColor")) {
        console.log('in if');
        document.getElementById('wrapper').classList.add('blue');
    } else {
        console.log('else');
        var colorClass = localStorage.getItem("selectedColor");
        document.getElementById('wrapper').classList.add(colorClass);
    }


    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

});

//Reference contact collections
let contactInfo = firebase.database().ref("infos");

function sendContact() {
    if (($("#name").val() != "") && ($("#mail").val() != "") && ($("#service").val() != "") && ($("#message").val() != "")) {
        let newContactInfo = contactInfo.push();

        newContactInfo.set({
            name: $("#name").val(),
            mail: $("#mail").val(),
            phone: $("#phone").val(),
            company: $("#company").val(),
            service: $("#service").val(),
            message: $("#message").val()
        });
        alert("Pronto nos pondremos en contato.");
    } 
}


$(window).scroll(function() {

    if ($(this).scrollTop() > 50) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});


function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-plus fa-minus');
}

function mytheme(index) {
    switch (index) {
        case 0:
            changeColor('cyan');
            break;
        case 1:
            changeColor('orange');
            break;
        case 2:
            changeColor('lightgreen');
            break;
        case 3:
            changeColor('red');
            break;
        case 4:
            changeColor('green');
            break;
        case 5:
            changeColor('blue');
            break;
        default:
            changeColor('blue');
    }
    var selectedClass = document.getElementById('wrapper').className;
    localStorage.setItem("selectedColor", selectedClass);
}

function changeColor(color) {
    $('#wrapper').removeClass();
    $('#wrapper').addClass(color);
}
