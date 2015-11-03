$( document ).ready(function() {
    $('#welcome-blurb > em').each(function( index ){
        if( index == 5) {
            $(this).hide(0).delay(index * 2000).fadeIn("slow")
        } else {
            $(this).hide(0).delay(index * 2000).fadeIn("slow").delay(600).fadeOut("fast");
        }
    });
});

$(".navbar").data("top", $(".navbar").offset().top)
$(window).scroll(function(e){ 
        var $div = $(".navbar");
        if ($(window).scrollTop() > $div.data("top")) { 
            $div.attr("id","");
            $div.addClass("navbar-fixed-top"); 
        }
        else {
            $div.removeClass("navbar-fixed-top");
            $div.attr("id","bottom-bar");
            navbarLinks.parent().removeClass("active");
        } 
});

navbarHeight = $(".navbar").outerHeight();
navbarLinks = $(".navbar-nav").find("a");
scrollLinks = navbarLinks.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) {return item;}
});

$(window).scroll(function(){
    var atTop = $(this).scrollTop()+navbarHeight;
    
    var current = scrollLinks.map(function(){
        if ($(this).offset().top < atTop)
            return this;
    });
    
    current = current[current.length-1];
    var curId = current && current.length ? current[0].id : "";
    
    if (lastId = curId){
        lastId = curId;
        navbarLinks.parent().removeClass("active").end().filter("[href=#"+curId+"]").parent().addClass("active");
    }
});