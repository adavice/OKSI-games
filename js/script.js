//define Vh
function calculateVh() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
}
calculateVh();
window.addEventListener('resize', calculateVh);
window.addEventListener('orientationchange', calculateVh);

//login
$(document).ready(function(){
    var ifLogged = false
    var clicked = 0;
    let profIcon = $('#profile');
    if (!ifLogged) showSubmenu();
    function showSubmenu() {
        function stopDefAction(evt) {
            evt.preventDefault();
        }
        profIcon.on('click', stopDefAction, false);

        profIcon.on('click',function () {
            if (clicked == 0) {
                $('#sub_menu').slideDown(500);
                clicked = 1;

            } else {
                $('#sub_menu').slideUp(500);
                clicked = 0;
            }
         });
    }


});
//hover frame
