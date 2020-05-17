// 179000545 张文
$(function () {
    $(".product-jian").on('click',function (event) {
        let num = Number($(this).next().val())
        if(num<=1) return
        $(this).next().val(num-1)
    })

    $(".product-add").on('click',function (event) {
        let num = Number($(this).prev().val())
        $(this).prev().val(num+1)
    })

    $(".product-del").on("click",function (event) {
        if (!confirm("确定删除？")) return
        $(this).parent().parent().remove()
    })

    $(".product-em").on("click",function(){
        if ($(this).hasClass("product-xz")){
            $(this).removeClass("product-xz")
            $(".product-all em").removeClass('product-xz')
        }
        else $(this).addClass("product-xz")
    })

    $(".product-all").children().first().children().first().on("click",function(){
        console.log(this)
        if ($(this).hasClass('product-xz')) {
            $(this).removeClass('product-xz product-em')
            $('.product-em').removeClass('product-xz')
        }else {
            $(this).addClass('product-xz product-em')
            $('.product-em').addClass('product-xz')
        }
    })



    $(window).on('click',function () {
        let goods = $('.product-box')
        let sum = 0
        goods.each((index,item)=>{
            if ($(item).find('.product-xz').length ===0 ) return
            sum += Number($(item).find('.price').text()) * Number($(item).find('.product-num').val())
        })
        $(".all-price").text(sum)

        if ($('.product-xz').length == 0){
            $('.product-sett').addClass('product-sett-a')
        }else{
            $('.product-sett').removeClass('product-sett-a')
        }

        if ($('.product-box').length==0){
            $('.kon-cat').removeClass('kon-cat')
        }

    })

    $(".product-sett").on('click',function(){
        $('.product-box .product-xz').parent().parent().remove()
    })

    $(window).trigger('click')
})