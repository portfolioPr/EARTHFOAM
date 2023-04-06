$(function(){





    /**
     * visual slide
     */
    var visualswiper = new Swiper(".visual-slide", {
        loop:true,
        touchRatio: 0,
        effect: 'fade',
        fadeEffect: {
        crossFade: false
        },
        autoplay: {
            delay: 13000,
            disableOnInteraction: false,
        },
      });



    /**
     * menu
     */
    $('.header .btn-menu').click(function(e){ //이벤트
        e.preventDefault();
        $('.header .group-menu').toggleClass('on')
        $('.content-wrapper').toggleClass('on')
        $('body').toggleClass('notScroll')
    })
    $('.content-wrapper').click(function(e){ //이벤트
        e.preventDefault();
        $('.header .group-menu').removeClass('on')
        $(this).removeClass('on')
        $('body').removeClass('notScroll')
    })



    
    if(matchMedia("screen and (min-width: 1024px)").matches){


        /**
         * intro
         */
                
          function pageLoad() {

            let intro = gsap.timeline();

            intro
            .addLabel('a')
            .set('.sc-visual .txt-area', {yPercent:50,opacity: 0})
            .set('.header .group-tag', {opacity: 0})
            .to('.sc-visual .intro-bg .box', {delay: 1, stagger:0.8,opacity: 0, ease: 'steps(10)'})
            .to('.sc-visual .txt-area', {delay: 2.5, duration:1, yPercent:0, 
                opacity: 1,ease: "expo.out"},'a')
            .to('.header .group-tag', {delay: 3.5, duration:1, 
                opacity: 1,ease: "expo.out"},'a')
        }
        
        pageLoad();


        /**
         * 공용애니메이션
         */
       gsap.set('[data-move]',{yPercent:20,opacity:0})
            
       $('[data-move]').each(function(i,element){
       
           gsap.to(element,{
               scrollTrigger:{
                   trigger:element,
                   start:"-150% 100%",
                   end:"10% 50%",
                   // markers:true,
                   scrub:0.5,
               },
               delay: 1,
               ease:Linear.easeNone,
               yPercent:0,
               opacity:1,
               stragger:0.3,
           })
       })


      
        /**
         * header tag menu
         */
        $('.group-tag .more').mouseenter(function(){
            $('.group-tag').addClass('active')
        })

        $('.group-tag .wrap').mouseleave(function(){
            setTimeout(() => {
                $('.group-tag').removeClass('active')
            }, 1000);
        })

        /**
         * tag menu active
         */
        $(window).scroll(function(){
                    
            curr = $(this).scrollTop();
            visiable = $('#visiable').offset().top;

            if(curr <= visiable){
                $('.group-tag').addClass('active')
            }else{
                $('.group-tag').removeClass('active')
            }
        })


        /**
         * sc-products cursor
         */

        //커서좌표구하기

        $(window).mousemove(function(e){
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            gsap.to('.cursor',{
                x:mouseX,
                y:mouseY
            })
        })

        //이미지 호버시 커서 변경
        $('.sc-products .link-cursor').hover(function(){
            $(this).addClass('on')
            $('.cursor').addClass('on')
        },function(){
            $('.sc-products .link-cursor').removeClass('on')
            $('.cursor').removeClass('on')
        })

        

      
      }else if(matchMedia("screen and (max-width: 960px)").matches){


        /**
         * intro
         */
        function pageLoad() {

            let intro = gsap.timeline();

            intro
            .to('.intro', {opacity: 1, duration:1, ease: "expo.out"})
            .to('.intro', {delay: 1.5, opacity: 0, display:"none"})
        }
        
        pageLoad();


        /**
         * recomm-slide
         */
        var recommswiper = new Swiper(".recomm-slide", {
            loop:true,
            effect: 'fade',
            fadeEffect: {
            crossFade: true
            },
            autoplay: {
                delay: 2300,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".pagination",
              },
          });



      }


    /**
     * sc-recomm
     */
        $('.sc-recomm .list-item').mouseenter(function(){
        target = $(this).find('a').attr('href');
        $(this).addClass('on').siblings('li').removeClass('on')
        $(target).addClass('on').siblings('.sc-recomm .con-item').removeClass('on')
    })
        
    
    
    /**
     * sc-about
     */
    $('.sc-about .about-item').hover(function(){
        $(this).addClass('on')
    },function(){
        $('.sc-about .about-item').removeClass('on')
    })

   

    /**
     * sc-journal option
     */
    $('.sc-journal .option').click(function(e){
        e.preventDefault();
        $(this).toggleClass('on')
        $(this).siblings('ul').slideToggle()
    })
    
    

    /**
     * footer slide
     */
    var footerswiper = new Swiper(".footer-slide", {
        loop:true,
        touchRatio: 0,
        effect: 'fade',
        fadeEffect: {
        crossFade: false
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

})