# ARIA Buttons
Use this script in combination with other scripts to reduce the amount of times one needs to set `role="button"` elements to accept both <kbd>Space</kbd> and <kbd>Enter</kbd> keys.


## What's it do?  
This script will search the DOM for any instances of `role="button"` and will make sure that <kbd>Space</kbd> and <kbd>Enter</kbd> key presses fire the `click` event associated with the element.  

Next, the script will determine if the element with the `role="button"` needs a `tabindex`. If the element does not have a `tabindex` set, and if it is __not__ an `<a>` with an `href`, then a `tabindex="0"` will be applied to the element.  

### Optional Functionality
The script will check if elements with `role="button"` have an `aria-controls` attribute. If an element doesn't, but has a `data-controls` or `href` set, then the script will add an `aria-controls` pulling in the `IDREF` of either `data-controls` or `href`.  

If the element with `role="button"` is meant to be treated as a toggle button, the script will check for a `data-pressed` attribute.  If `data-pressed` has a value of "true", then the script will add an `aria-pressed="true"` to the "button".

If the element has a `data-pressed` with an empty string, or any other value than "true", then the script will add an `aria-pressed="false"` to the "button".


## Why do you need this?  
As long as you're setting up `role="button"` elements to work with the appropriate keyboard controls in your own scripts, then you likely don't need this.

If you __don't__ want to set ARIA buttons to work correctly in each of your scripts, and want to use a single script to do it for you once and for all, then maybe this script is for you!


## License & Such  
This script was written by [Scott O'Hara](https://twitter.com/scottohara).

It has an [MIT license](https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md).

Do with it what you will :)
