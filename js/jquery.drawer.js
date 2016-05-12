(function($) {

  var rightDrawer = {

    init: function(options, div){
      var wrapper = $(div).wrap('<div class="drawer-wrapper drawer-right"></div>').parent();
      var btnId = div.attr('id') + '-left-btn'
      wrapper.append('<button id=' + btnId + ' class="toggle-drawer-btn left-btn"></button>');
      var btn = $('#' + btnId).button({
        icons: {
          primary: "ui-icon-triangle-1-w"
        },
        text: false
      });

      toggleBtnWidth = btn.outerWidth(true);
      wrapper.width($(div).outerWidth(true) + toggleBtnWidth);
      wrapper.height($(div).height());

      if(options.type){
        wrapper.css({position: options.type});
      }
      
      if (options.top){
        wrapper.css({top: options.top});
      }

      btn.on('click', function(){
        if (wrapper.width() <= toggleBtnWidth){

          $(div).show();
          wrapper.animate( {width: $(div).outerWidth(true) + toggleBtnWidth}, function(){
            wrapper.width($(div).outerWidth(true) + toggleBtnWidth);
            wrapper.height($(div).height());
          });
        } else {
          wrapper.animate( {width: toggleBtnWidth}, function(){
            $(div).hide();
          });
        }
      });
    }
  };

  var bottomDrawer = {

    init: function(options, div){
      var wrapper = $(div).wrap('<div class="drawer-wrapper drawer-bottom"></div>').parent();
      var btnId = div.attr('id') + '-top-btn'
      wrapper.append('<button id=' + btnId + ' class="toggle-drawer-btn top-btn"></button>');
      var btn = $('#' + btnId).button({
        icons: {
          primary: "ui-icon-triangle-1-n"
        },
        text: false
      });

      toggleBtnHeight = btn.outerHeight(true);
      wrapper.width($(div).width());
      wrapper.height($(div).outerHeight(true) + toggleBtnWidth);

      if (options.left){
        wrapper.css({left: options.left});
      }

      btn.on('click', function(){
        if (wrapper.height() <= toggleBtnHeight){

          $(div).show();
          wrapper.animate( {height: $(div).outerHeight(true) + toggleBtnHeight}, function(){
            wrapper.height($(div).outerHeight(true) + toggleBtnHeight);
            wrapper.width($(div).width());
          });
        } else {
          wrapper.animate( {height: toggleBtnHeight}, function(){
            $(div).hide();
          });
        }
      });

    }
  };

  $.fn.drawer = function( options ) {

    var options = $.extend({
      align: 'right',
      top: '100px',
      type: 'fixed'
    }, options);

    if (options.align == 'right'){
      return rightDrawer.init(options, this);
    }

    if (options.align == 'bottom'){
      return bottomDrawer.init(options, this);
    }

  };

}(jQuery));
