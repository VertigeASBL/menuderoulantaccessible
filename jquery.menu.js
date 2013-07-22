(function ($) {

    $.fn.menuDeroulantAccessible = function () {

        return this.each(function () {

            $(this)
                .addClass('menuDeroulantAccessible')
                .find('li')
                .bind('mouseover focusin', function () {
                    $(this).addClass('afficher');
                })
                .bind('mouseout focusout', function () {
                    $(this).removeClass('afficher');
                });

        });
    }
})(jQuery);
