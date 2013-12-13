function setElementPerspective(elem,perspective) {
    var screenWidth = window.screen.width / 2,
        screenHeight = window.screen.height / 2,
        validPropertyPrefix = '',
        otherProperty = 'perspective(300px)';

        if(typeof elem.style.webkitTransform == 'string') {
            validPropertyPrefix = 'webkitTransform';
        } else {
            if (typeof elem.style.MozTransform == 'string') {
                validPropertyPrefix = 'MozTransform';
            }
        }

    document.addEventListener('mousemove', function (e) {
        // vars
        var centroX     = e.clientX - screenWidth,
            centroY     = screenHeight - (e.clientY ),
            degX   = centroX * 0.005,
            degY   = centroY * 0.005

        // Seta o rotate do elemento
        elem.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
        
    });
}

function removeElementPerspective(elementId) {
    document.removeEventListener('mousemove',arguments.callee,false);
}
    
function goto(id, t){
    //animate to the div id.
    $("html, body").animate({"scrollTop": ($(id).position().top)}, 1000,'easeOutBounce');
}

function adjustHeaderHeight() {
    var wh = $(window).height();
    $('header').css({height: wh});
}

/*function randomizeElementPosition(id,min,max)
{
    var randomOfset =  Math.floor(Math.random() * (max - min + 1)) + min;
    $(id).animate({"margin-left": randomOfset}, 1000,'easeInOutElastic');
    $(id).animate({"margin-right": randomOfset}, 1000,'easeInOutElastic');
    //$('.bottomText')[0].style['-webkit-mask-position'] = randomOfset+'px';
    
}*/

/*$(window).bind('resize',function () {
        //Update slider height
        adjustHeaderHeight();
});*/
        