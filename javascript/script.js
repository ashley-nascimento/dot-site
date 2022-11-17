const swiper = new Swiper('.sliderContainer', {
    direction: 'horizontal',
  
    pagination: {
      el: '.sliderPagination',
    },
  
    navigation: {
      nextEl: '.sliderButtonNext',
      prevEl: '.sliderButtonPrev',
    },
})

$(function(){
    var gray900 = '#353535'
    var gray500 = '#707070'
    var purple = ' #7A2B58'
    var red = '#FF3737'
    var yellow = '#FFCC33'
    var green = '#03B5B0'

    $(".accordionTitle").click(function(){
        if ($(this).next('.accordionContent').is(":visible")) {
            $('.accordionContent').slideUp()
            $(this).toggleClass('accordionOpen accordionClose')
            $(this).find('img').attr('src', './public/icons/icon-plus.svg')
            
        } else {
            if($('.accordionContent').is(":visible")){
                $('.accordionContent').slideUp()
                $('.accordionTitle').removeClass('accordionOpen').addClass('accordionClose')
                $('.accordionTitle').find('img').attr('src', './public/icons/icon-plus.svg')
            }
            $(this).next().slideDown()
            $(this).toggleClass('accordionClose accordionOpen')
            $(this).find('img').attr('src', './public/icons/icon-minos.svg')
            
        }
    })

    $(".dropdownButton").click(function(){
        if ($(this).next('p').is(":visible")) {
            $(this).next().slideUp('slow')
            $(this).find('img').attr('src', './public/icons/icon-arrow-down.svg')
            $(this).parent().css('background-color', purple)
            $(this).find('button').css('background-color', 'white')

        } else {
            $(this).next().slideDown('slow')
            $(this).find('img').attr('src', './public/icons/icon-arrow-up.svg')
            $(this).parent().css('background-color', yellow)
            $(this).find('button').css('background-color', purple)
        }
    })

    $(".interactiveButtonYellow").click(function(){
        $('.interactiveContent').css('background-color', yellow)
        $('.interactiveContent').css('color', gray900)
        $('.interactiveText').html(`Este texto é referente ao botão que está sobre a flecha <b>amarela</b>!`)
        
        $(this).css('background-color', purple)
        $('.interactiveButtonRed').css('background-color', green)
        $('.interactiveButtonGray').css('background-color', green)

        $(this).find('img').attr('src', './public/icons/icon-minos.svg')
        $('.interactiveButtonRed').find('img').attr('src', './public/icons/icon-plus.svg')
        $('.interactiveButtonGray').find('img').attr('src', './public/icons/icon-plus.svg')
    })

    $(".interactiveButtonRed").click(function(){
        $('.interactiveContent').css('background-color', red)
        $('.interactiveContent').css('color', gray900)
        $('.interactiveText').html(`Este texto é referente ao botão que está sobre a flecha <b>vermelha</b>!`)
        
        $(this).css('background-color', purple)
        $('.interactiveButtonYellow').css('background-color', green)
        $('.interactiveButtonGray').css('background-color', green)

        $(this).find('img').attr('src', './public/icons/icon-minos.svg')

        $('.interactiveButtonYellow').find('img').attr('src', './public/icons/icon-plus.svg')
        $('.interactiveButtonGray').find('img').attr('src', './public/icons/icon-plus.svg')
    })

    $(".interactiveButtonGray").click(function(){
        $('.interactiveContent').css('background-color', gray500)
        $('.interactiveContent').css('color', 'white')
        $('.interactiveText').html(`Este texto é referente ao botão que está sobre a flecha <b>cinza</b>!`)
        
        $(this).css('background-color', purple)
        $('.interactiveButtonYellow').css('background-color', green)
        $('.interactiveButtonRed').css('background-color', green)

        $(this).find('img').attr('src', './public/icons/icon-minos.svg')
        $('.interactiveButtonRed').find('img').attr('src', './public/icons/icon-plus.svg')
        $('.interactiveButtonYellow').find('img').attr('src', './public/icons/icon-plus.svg')
    })
})