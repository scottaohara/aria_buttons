;(function ( w, doc, undefined ) {
  //enable strict mode
  'use strict';

  /**
   * Local object for method references
   * and define script meta-data
   */
  var ARIAbuttons = {};
  w.ARIAbuttons   = ARIAbuttons; // make functions available outside of iffe

  ARIAbuttons.NS      = 'ARIAbuttons';
  ARIAbuttons.AUTHOR  = 'Scott O\'Hara';
  ARIAbuttons.VERION  = '0.3.1';
  ARIAbuttons.LICENSE = 'https://github.com/scottaohara/select-to-datalist/blob/master/LICENSE';



  /**
   * Create Button Instances
   */
  ARIAbuttons.create = function () {
    // setup / cache vars
    var widget = doc.querySelectorAll('[role="button"]');
    var self;
    var i;

    // run through all instances of role="button"
    for ( i = 0; i < widget.length; i++ ) {
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
      self.addEventListener('keypress', ARIAbuttons.keytrolls);

      // if a link has been converted to a button, then focus should
      // stay on the button when clicked/pressed. Check to see if
      // the element has an href, and if so, preventDefault.
      if ( self.hasAttribute('href') ) {
        self.addEventListener('click', function ( e ) {
          e.preventDefault();
        });
      }
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
  }; // ARIAbuttons.keytrolls()



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
