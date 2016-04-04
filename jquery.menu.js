/* jshint strict: true, undef: true, unused: true, curly: true,
   eqeqeq: true, freeze: true, funcscope: true, futurehostile: true,
   nonbsp: true */
/* globals jQuery */

(function ($) {
	"use strict";

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
    };
})(jQuery);
