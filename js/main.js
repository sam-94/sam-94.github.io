$(document).ready(function(){
    $('.toggle').click(function(){
    	 $(this).toggleClass('open');
       $('.menu, .innermenu').toggleClass('active');
    });
$(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    });
});
