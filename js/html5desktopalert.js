/*
   @Copyright: jQuery4u 2012
   @Author: Sam Deering
   @Script: html5desktopalert.js
*/
(function($,W,D,undefined)
{
    W.JQUERY4U = W.JQUERY4U || {};

    W.JQUERY4U.HTML5DESKTOPALERT = {

        name: "jQuery HTML5 DESKTOP ALERT",

        namespace: "W.JQUERY4U.HTML5DESKTOPALERT",

        settings:
        {
           //turn into plugin? ...
        },

        cache:
        {
            //runtime data, dom elements etc...
        },

        init: function(settings)
        {
            this.settings = $.extend({}, this.settings, settings);
            this.cache.notifications = window.webkitNotifications;
            this.testBrowserSupport();
            this.setupEventHandlers();
        },

        setupEventHandlers: function()
        {
           var _this = this;
           $('#alert-me-btn').bind('click', function(e)
           {
               _this.checkPermission("desktopAlert");
           });
        },

        //tests HTML5 browser support and permission request
        testBrowserSupport: function()
        {
            var $browserMsg = $('#browser-support-msg');
            if(this.cache.notifications)
            {
                $browserMsg.html("Yay! Notifications are supported on this browser.").parent().addClass('alert-success');
            }
            else
            {
                $browserMsg.html("Sorry. Notifications aren't supported on this browser.").parent().addClass('alert-error');
            }
        },

        checkPermission: function(callback)
        {
            var _this = this;
            if (this.cache.notifications.checkPermission() == 0)
            {
                _this[callback]();
            }
            else
            {
                this.cache.notifications.requestPermission(function()
                {
                    if (this.cache.notifications.checkPermission() == 0) _this[callback]();
                });
            }
        },

        desktopAlert: function()
        {
            console.log('sending alert...');
            var notification = window.webkitNotifications.createNotification("", $('#da-title').val(), $('#da-message').val());
            notification.show();
        }
    }

    $(D).ready( function()
    {
        //start up the form events
        W.JQUERY4U.HTML5DESKTOPALERT.init();
    });


})(jQuery,window,document);





(function($)
{

    $(document).ready(function()
    {
          //BSA
          setTimeout(function()
          {
              var close = '<a href="#" class="close_bsap">X</a>';
              $('.bsap .bsa_it').prepend(close);
              $('.close_bsap').live('click', function(e)
              {
                  e.preventDefault();
                  $(this).closest('.bsap').hide();
              });
          }, 1500);

    });

})(jQuery);