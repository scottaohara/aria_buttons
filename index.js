(function ( w, doc, undefined ) {
  /**
   * ARIA Buttons
   *
   * Author: Scott O'Hara
   * Version: 2.0.0
   * License: https://github.com/scottaohara/aria_buttons/blob/master/LICENSE
   */

  const ariaButton = function ( inst, options ) {
    const el = inst;
    let isToggle;

    /**
     * Initialize the button instance
     */
    const init = function () {
      setupButton();

      if ( isToggle ) {
        el.addEventListener('click', toggleEvent);
      }
      el.addEventListener('keydown', keyEvents);
    };


    const setupButton = function () {
      if ( !el.hasAttribute('tabindex') && el.getAttribute('aria-disabled') !== 'true' ) {
        el.tabIndex = 0;
      }
      if ( el.hasAttribute('tabindex') && el.getAttribute('aria-disabled') === 'true' ) {
        el.removeAttribute('tabindex');
      }
      if ( el.hasAttribute('aria-pressed') ) isToggle = true;
      /**
       * If an element started off as a <a href...> remove the href attribute.
       * Buttons should not return a context menu for links, if right clicked.
       */
      el.removeAttribute('href');
    };


    const toggleEvent = function ( e ) {
      if ( isToggle ) {
        el.setAttribute('aria-pressed', el.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      }
    };


    const keyEvents = function ( e ) {
      const keyCode = e.keyCode || e.which;

      switch ( keyCode ) {
        case 32:
        case 13:
          e.preventDefault();
          this.click();
          break;

        default:
          break;
      }
    }


    init.call( this );
    return this;
  }; // ariaButton()

  w.ariaButton = ariaButton;
})( window, document );
