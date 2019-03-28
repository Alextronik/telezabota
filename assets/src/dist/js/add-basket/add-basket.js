$(document).ready(function() {
    $('.js-add-basket').click(function() {
        var goodsID = $(this).closest('[data-product-id]').data('product-id');
        var width = $(this).css("width");
        var height = $(this).css("height");
        $.ajax({
            beforeSend: $.proxy(function() {
                $(this).css('min-width', '' + width + '');
                $(this).css('height', '' + height + '');
                $(this).text("");
                $('<img class="preloader mx-auto" src="dist/img/preloader.svg" alt="preloader">').appendTo($(this));
            }, this),
            type: 'POST',
            url: 'dist/server/goods.php',
            data: {
                "goodsID": goodsID // id товара
            },
            dataType: 'json',
            success: $.proxy(function(data) {

                $(this).html('');
                $(this).text('Добавлено');
                $(this).prop('disabled', true);
                $('.toast__text').html(data.title + ' ' + data.text + '<a href="'+data.link+'">'+data.linktext+'</a>');
                $('.toast').toast('show');


            }, this),
            error: function(text) {

                alert('Ошибка при отправке данных на сервер');

            }
        });
    });
});