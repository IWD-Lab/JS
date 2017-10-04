(function ($) {	
	// ok/cancel cookies to alert form
  Drupal.behaviors.alert = { 
    attach : function(context, settings) { 
      var selector = '#b-fi-sma-popup';
      $(selector, context).alert({
        sel_alert_form: '#b-fi-sma-popup',
        sel_ok: '.btn',
        sel_ok_link:'',
        sel_cancel:'.close',
        sel_cancel_link:'#quicktabs-tab-financial_intermediaries_tabs-0'
      });
    }
  };
})(jQuery);