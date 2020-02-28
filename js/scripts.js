
jQuery(window).scroll(function(){
    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if ( scroll > top && scroll < bottom) {       
            if (id == undefined) {
                $('li.active-menu-item').removeClass('active-menu-item');
                $('#menu ul li:first').addClass('active-menu-item');
            }
            else {
                $('li.active-menu-item').removeClass('active-menu-item');
                $('a[href="#'+id+'"]').parent().addClass('active-menu-item');
            }
        }
    })
});

$("nav, .promo-btns-container").on("click","a", function (event) {
   event.preventDefault();
   var id  = $(this).attr('href'),
       top = $(id).offset().top;
   $('body,html').animate({scrollTop: top}, 800);
});

$("#navToggle").click(function() {
    $('#menu').toggleClass("overlayMenu");
    $('.social-container').toggleClass("mobile");
    $(this).toggleClass("active");
    $(".nav-container").toggleClass("overlay");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});

$('.nav-container').click(function() {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
    $(".nav-container").removeClass("overlay");
    $("body").removeClass("locked");
    $('#menu').removeClass("overlayMenu");
    $('.social-container').removeClass("mobile");
});

$( () => {
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('header').addClass('navShadow') : $('header').removeClass('navShadow');
		windowTop > 100 ? $('#menu ul').css('top','100px') : $('#menu ul').css('top','160px');
	});
});