/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

@@ -11,16 +11,16 @@ if (typeof jQuery === 'undefined') {
+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 2)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

@@ -77,10 +77,10 @@ if (typeof jQuery === 'undefined') {
}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

@@ -96,7 +96,7 @@ if (typeof jQuery === 'undefined') {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.6'
  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

@@ -109,7 +109,7 @@ if (typeof jQuery === 'undefined') {
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)
    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

@@ -172,10 +172,10 @@ if (typeof jQuery === 'undefined') {
}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.6
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

@@ -192,7 +192,7 @@ if (typeof jQuery === 'undefined') {
    this.isLoading = false
  }

  Button.VERSION  = '3.3.6'
  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
@@ -214,10 +214,10 @@ if (typeof jQuery === 'undefined') {

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }
@@ -281,10 +281,15 @@ if (typeof jQuery === 'undefined') {

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
@@ -293,10 +298,10 @@ if (typeof jQuery === 'undefined') {
}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.6
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

@@ -324,7 +329,7 @@ if (typeof jQuery === 'undefined') {
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.6'
  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

@@ -531,13 +536,14 @@ if (typeof jQuery === 'undefined') {
}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';
@@ -561,7 +567,7 @@ if (typeof jQuery === 'undefined') {
    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.6'
  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

@@ -743,10 +749,10 @@ if (typeof jQuery === 'undefined') {
}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.6
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

@@ -763,7 +769,7 @@ if (typeof jQuery === 'undefined') {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.6'
  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')
@@ -909,10 +915,10 @@ if (typeof jQuery === 'undefined') {
}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

@@ -943,7 +949,7 @@ if (typeof jQuery === 'undefined') {
    }
  }

  Modal.VERSION  = '3.3.6'
  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150
@@ -1050,7 +1056,9 @@ if (typeof jQuery === 'undefined') {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
@@ -1247,11 +1255,11 @@ if (typeof jQuery === 'undefined') {
}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

@@ -1274,7 +1282,7 @@ if (typeof jQuery === 'undefined') {
    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.6'
  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

@@ -1565,9 +1573,11 @@ if (typeof jQuery === 'undefined') {

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

@@ -1610,7 +1620,10 @@ if (typeof jQuery === 'undefined') {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

@@ -1726,6 +1739,7 @@ if (typeof jQuery === 'undefined') {
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }

@@ -1762,10 +1776,10 @@ if (typeof jQuery === 'undefined') {
}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

@@ -1782,7 +1796,7 @@ if (typeof jQuery === 'undefined') {

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.6'
  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
@@ -1871,10 +1885,10 @@ if (typeof jQuery === 'undefined') {
}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.6
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

@@ -1900,7 +1914,7 @@ if (typeof jQuery === 'undefined') {
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.6'
  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
@@ -2044,10 +2058,10 @@ if (typeof jQuery === 'undefined') {
}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.6
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

@@ -2064,7 +2078,7 @@ if (typeof jQuery === 'undefined') {
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.6'
  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

@@ -2200,10 +2214,10 @@ if (typeof jQuery === 'undefined') {
}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

@@ -2229,7 +2243,7 @@ if (typeof jQuery === 'undefined') {
    this.checkPosition()
  }

  Affix.VERSION  = '3.3.6'
  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'
