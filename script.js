$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        if($(window).width() > 631) {
            $('nav').css('height', '60');
            $('.nav-link').css('font-size', '1.35rem');
            $('.nav-link').css('color', 'white');
        }
        $('nav').css('background', 'rgba(0, 0, 0, 0.8)');
        $('.logo').css('transition', '300ms ease-in');
        $('.infinity').css('transition', '300ms ease-in');
        $('.infinity').css('color', 'white');
        $('.bi-spotify').css('transition', '300ms ease-in');
        $('.bi-spotify').css('color', 'white');
    } else {
        $('nav').css('background', 'transparent');
        
        if($(window).width() > 631) {
            $('nav').css('height', '100');
        }
        
        $('.nav-link').css('font-size', '1.4rem');
    }
});

var actionOnce = false;
$(window).scroll(function () {
    var hT = $('#scroll-to').offset().top,
        hH = $('#scroll-to').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH)) {
        if (actionOnce == false) {
            // $('.about-content').css('left', '100px');
            $('.about-content').css('opacity', '1');
            $('.infinity-desc').css('opacity', '1');
            $('.infinity-desc-separator').css('opacity', '1');
            $('.about-content').css('height', '400');
            actionOnce = true;
        }
    }

})


function changeLogo() {
    document.getElementById('infinity').style = "opacity: 1;";
    document.getElementById('logo').style = "width: 100%;";
}

window.onload = setTimeout(changeLogo, 1100);

var banderaNavChico = true;
function navChico() {
    if(banderaNavChico == true) {
        
        $('nav').css('height', '250');
        $('.small-link').css('display', 'inline');
        $('.small-link').css('visibility', 'visible');
        // $('.small-link').css('transition', '1.2s ease-in-out');
        $('.small-link').css('opacity', '1');
        banderaNavChico = false;
    } else {
        
        $('nav').css('height', '40');
        // $('.small-link').css('display', 'none');
        $('.small-link').css('visibility', 'hidden');
        $('.small-link').css('opacity', '0');
        banderaNavChico = true;
        triggerHide()
        
        
    }
}

function triggerHide() {
    setTimeout(hideSmallLinks,250);
}


function hideSmallLinks() {
    $('.small-link').css('display', 'none');
}