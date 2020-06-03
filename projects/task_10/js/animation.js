// 179000545 张文
$(function () {

    $(".hd li").on('click',function () {
        $('.hd li').removeClass('on')
        $(this).toggleClass('on')
        $('.lh').hide()
        for (let index =0;index<$('.hd li').length;index++){
            if ($($('.hd li')[index]).hasClass('on')){
                $($('.lh')[index]).slideDown(500)
            }
        }
    })
    $('input').click(function () {
        $('.tabox').toggle()
        $(this).toggle()
        $('.game').toggle()
    })
    $('.game').click(function (event) {
        let rule = $('.rule')
        rule.stop()
        let cx = parseInt(rule.css('left'))
        let cy = parseInt(rule.css('top'))
        let tx = event.pageX
        let ty = event.pageY
        let duration = Math.sqrt(Math.pow(tx-134-cx,2) + Math.pow(ty-140-cy,2))

        let img =  rule.find('img')
        if(tx>=cx+134) {
            img.attr('src',img.attr('src').replace('left','right'))
        }else {
            img.attr('src',img.attr('src').replace('right','left'))
        }
        rule.animate({
            left: event.pageX - 134,
            top: event.pageY - 140
        },duration,'linear')
    })
    $('.rule').on('dblclick',function (event) {
        event.stopPropagation()
        $(this).find('img').attr('src','./img/playerbig_left.gif')
        $(window).trigger('click')
    })
})