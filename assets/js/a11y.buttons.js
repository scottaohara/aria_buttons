;(function ( w, doc, undefined ) {
  'use strict';

  /**
   * Local object for method references
   * and define script meta-data
   */
  var ARIAbuttons = {};
  w.ARIAbuttons   = ARIAbuttons; // make functions available outside of iffe

  ARIAbuttons.NS      = 'ARIAbuttons';
  ARIAbuttons.AUTHOR  = 'Scott O\'Hara';
  ARIAbuttons.VERION  = '0.5.0';
  ARIAbuttons.LICENSE = 'https://github.com/scottaohara/accessible_components/blob/master/LICENSE.md';


  /**
   * Create Button Instances
   */
  ARIAbuttons.create = function () {
    var widget = doc.querySelectorAll('[role="button"]');
    var self;
    var i;

    // run through all instances of role="button"
    for ( i = 0; i < widget.length; i++ ) {
      self = widget[i];

      // If there is no tabindex or href, add a tabindex="0"
      if ( !self.hasAttribute('tabindex') && !self.hasAttribute('href') ) {
        self.setAttribute('tabindex', '0');
      }

      // If the element doesn't have an aria-controls attribute, that may be on purpose.
      // BUT to try and cover all of our bases here...
      if ( !self.hasAttribute('aria-controls') ) {
        var ac = 'aria-controls';

        // The script will check to see if there's a data-controls
        // or href attribute exist on the element.  If either of these do,
        // then that means that they should have an aria-controls set to
        // the value of either of those attributes.
        if ( self.hasAttribute('data-controls') ) {
          self.setAttribute(ac, self.getAttribute('data-controls'));
        }
        else if ( self.hasAttribute('href') ) {
          self.setAttribute(ac, self.getAttribute('href').split('#')[1]);
        }

        // clean up DOM
        self.removeAttribute('data-controls');
      } // if

      // Check to see if this is meant to be a toggle button of some sort
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
      }

      // on keypress, run the keytrolls function
      self.addEventListener('keypress', ARIAbuttons.keytrolls, false);
      self.addEventListener('click', ARIAbuttons.ariaPressed, false);
    } // for(widget.length)
  }; // ARIAbuttons.create()


  /**
   * Keyboard Controls for the 'Buttons'
   */
  ARIAbuttons.keytrolls = function ( e ) {
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
    } // switch
  }; // ARIAbuttons.keytrolls();

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
   * Initialize Buttons Functions
   * if expanding this script, place any other
   * initialize functions within here.
   */
  ARIAbuttons.init = function () {
    ARIAbuttons.create();
  }; // ARIAbuttons.init()


  // go go JavaScript
  ARIAbuttons.init();

})( window, document );
