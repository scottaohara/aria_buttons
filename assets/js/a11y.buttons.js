;(function ( w, doc, undefined ) {
  'use strict';

  /**
   * Local object for method references
   * and define script meta-data
   */
  var ARIAbuttons = {};
  w.ARIAbuttons   = ARIAbuttons;

  ARIAbuttons.NS      = 'ARIAbuttons';
  ARIAbuttons.AUTHOR  = 'Scott O\'Hara';
  ARIAbuttons.VERION  = '1.1.0';
  ARIAbuttons.LICENSE = 'https://github.com/scottaohara/aria_buttons/blob/master/LICENSE';

  /**
   * Create Button Instances
   */
  ARIAbuttons.create = function () {
    var widget = doc.querySelectorAll('[role="button"]');
    var self;
    var i;

    // Setup all instances of role="button"
    for ( i = 0; i < widget.length; i++ ) {
      self = widget[i];

      /**
       * Buttons need to be focusable by keyboard users.
       * If no tabIndex was set, set one.
       */
      if ( !self.hasAttribute('tabindex') ) {
        self.tabIndex = 0;
      }

      /**
       * If a "button" doesn't have an aria-controls attribute,
       * do additional checks to see if it *should* have one.
       */
      if ( !self.hasAttribute('aria-controls') ) {
        var ac = 'aria-controls';

        /**
         * Check for the presence of an href (if the element was a link),
         * or check for a data-controls attribute. If one of these exist,
         * get the current value and use it as the IDREF for the
         * aria-controls attribute.
         */
        if ( self.hasAttribute('data-controls') ) {
          self.setAttribute(ac, self.getAttribute('data-controls'));
        }
        else if ( self.hasAttribute('href') ) {
          self.setAttribute(ac, self.getAttribute('href').split('#')[1]);
        }

        // clean up DOM
        self.removeAttribute('data-controls');
      } // if

      /**
       * If an element started off as a <a href...> remove the href attribute.
       * Buttons should not return a context menu for links, if right clicked.
       */
      self.removeAttribute('href');

      /**
       * Check to see if this is meant to be a toggle button.
       *
       * If the element has an aria-pressed already, move on. If it doesn't,
       * check for the presence of a data-pressed attribute. If one exists,
       * add an aria-pressed with the appropriate value.
       */
      if ( !self.hasAttribute('aria-pressed') ) {
        var ap = 'aria-pressed';

        if ( self.hasAttribute('data-pressed') && self.getAttribute('data-pressed') === 'true' ) {
          self.setAttribute(ap, 'true');
        }
        else if ( self.hasAttribute('data-pressed') ) {
          self.setAttribute(ap, 'false');
        }

        // clean up DOM
        self.removeAttribute('data-pressed');
      } // if

      /**
       * Run event listeners for each instance.
       */
      self.addEventListener('keypress', ARIAbuttons.keyEvents, false);
      self.addEventListener('click', ARIAbuttons.ariaPressed, false);
    } // for(widget.length)
  }; // ARIAbuttons.create()


  /**
   * Keyboard Controls for the 'Buttons'
   */
  ARIAbuttons.keyEvents = function ( e ) {
    var keyCode = e.keyCode || e.which;

    switch ( keyCode ) {
      // enter or space
      case 32:
      case 13:
        e.preventDefault();
        e.target.click();
        break;

      default:
        break;
    }
  }; // ARIAbuttons.keyEvents();

  /**
   * Toggle the value of aria-pressed.
   */
  ARIAbuttons.ariaPressed = function ( e ) {
    e.preventDefault();

    if ( this.getAttribute('aria-pressed') === 'true' ) {
      this.setAttribute('aria-pressed', 'false');
    }
    else {
      this.setAttribute('aria-pressed', 'true');
    }
  } // ARIAbuttons.ariaPressed()


  /**
   * Initialize Buttons Functions.
   * If expanding this script, place any other
   * initialize functions within here.
   */
  ARIAbuttons.init = function () {
    ARIAbuttons.create();
  };

  // go go JavaScript
  ARIAbuttons.init();

})( window, document );
