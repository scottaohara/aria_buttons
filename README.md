# ARIA Buttons
This script largely serves as a demonstration of a way to ensure that elements with `role=button` can be activated using <kbd>Space</kbd> and <kbd>Enter</kbd> keys.  It makes sure that if a `role=button` has an `aria-disabled=true`, then it will _not_ be keyboard focusable.  Finally, if the script detects an `aria-pressed` attribute, it will assign a function specifically to toggle the value of the attribute.


## Why do you need this?  
As long as you're setting up `role="button"` elements to work with the appropriate keyboard controls in your own scripts, then you likely don't need this.
If you are using native HTML `<button>`s, then you also likely don't need this.

In general, you likely don't need this.  Just use a `<button>` and manage your own `aria-pressed` :)


## License & Such  
This script was written by [Scott O'Hara](https://twitter.com/scottohara).

It has an [MIT license](https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md).
