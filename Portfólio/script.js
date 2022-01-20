$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    }); 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        marin: 20,
        loop: true,
        autoplayTime: 2000,
        autoplayHoverPauser:true,
        reponsive:{
            0:{
                item:1,
                nav:false
            }
            0:{
                item:1,
                nav:false
            }
        }
    });
});

window.prompt("Qual seu nome?", [""]);