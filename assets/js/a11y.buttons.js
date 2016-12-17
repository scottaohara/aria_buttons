;(function ( w, doc ) {

  //enable strict mode
  'use strict';

  // Local object for method references
  var a11yBUTTONS = {};

  // Meta
  a11yBUTTONS.NS      = "a11yBUTTONS";
  a11yBUTTONS.AUTHOR  = "Scott O'Hara";
  a11yBUTTONS.VERION  = "0.2.0";
  a11yBUTTONS.LICENSE = "https://github.com/scottaohara/select-to-datalist/blob/master/LICENSE";

  var widget        = doc.querySelectorAll('[role="button"]');
  var widgetCount   = widget.length;

  /**
   * Create Button Instances
   */
  a11yBUTTONS.create = function () {

    // setup / cache vars
    var self;
    var i;

    // run through all instances of role="button"
    for ( i = 0; i < widgetCount; i++ ) {
      self = widget[i];

      // if the element doesn't have a tabindex or an href,
      // it is going to need one, so add the attribute
      if ( !self.hasAttribute('tabindex') && !self.hasAttribute('href') ) {
        self.setAttribute('tabindex', '0');
      }

      // if the element doesn't have an aria-controls attribute,
      // that may be on purpose.  BUT since we're trying to cover
      // all of our bases here...
      if ( !self.hasAttribute('aria-controls') ) {
        var ac = 'aria-controls';

        // the script will now check to see if there's a data-controls
        // or href attribute exist on the element.  If either of these do,
        // then that means that they should have an aria-controls set to
        // the value of either of those attributes.
        if ( self.hasAttribute('data-controls') ) {
          self.setAttribute(ac, self.getAttribute('data-controls'));
        }
        else if ( self.hasAttribute('href') ) {
          self.setAttribute(ac, self.getAttribute('href').split('#')[1]);
        }

      } // if

      // on keypress, run the keytrolls function
      self.addEventListener('keypress', a11yBUTTONS.keytrolls);

      // if a link has been converted to a button, then focus should
      // stay on the button when clicked/pressed. Check to see if
      // the element has an href, and if so, preventDefault.
      if ( self.hasAttribute('href') ) {
        self.addEventListener('click', function ( e ) {
          e.preventDefault();
        });
      }

      // cleanup data attributes that have served their purpose
      self.removeAttribute('data-controls');

    } // for(widgetCount)

  }; // a11yBUTTONS.create()


  /**
   * Keyboard Controls for the 'Buttons'
   */
  a11yBUTTONS.keytrolls = function ( e ) {

    var keyCode = e.keyCode || e.which;

    switch ( keyCode ) {

      // enter or space
      case 32:
      case 13:
        e.preventDefault();
        e.target.click();
        break;

    } // switch

  }; // a11yBUTTONS.keytrolls()


  /**
   * Initialize Buttons Functions
   */
  a11yBUTTONS.init = function () {

    a11yBUTTONS.create();

  }; // a11yBUTTONS.init()

  a11yBUTTONS.init();

})( this, this.document );
