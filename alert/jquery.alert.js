/*!
 * jQuery Alert v 1.0 10.04.17
 * ok/cancel cookies to alert form
 * Copyright 
 */

(function ($) {
    jQuery.fn.alert = function(options){
        var options = $.extend({
            sel_alert_form: '.alert-form',
            sel_ok: '.ok',
            sel_ok_link:'',
            sel_cancel: '.close',
            sel_cancel_link: '',
            expires: 366
        }, options),
            sel_alert_form = options.sel_alert_form,
            sel_ok = options.sel_ok,
            sel_ok_link = options.sel_ok_link,
            sel_cancel = options.sel_cancel,
            sel_cancel_link = options.sel_cancel_link;4

        $(this).each(function(i){
            var $e = $(this),
                $btn = $e.find(sel_ok),
                $close = $e.find(sel_cancel),
                sc = sel_alert_form  + '_' + i,
                message = $.cookie(sc);
            if (!message) {
              $e.css('display','block').removeClass('hide');
              $btn.click(function(){
                $.cookie(sc, 'ok', {expires: options.expires});
                $e.css('display','none');
                if ($(sel_ok_link).length) $(sel_ok_link).click();
              });
            };
            $close.click(function(){
              if ($(sel_cancel_link).length) $(sel_cancel_link).click();
              $e.addClass('hide');
            });
        });
    };

})(jQuery);
