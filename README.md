# A11y Buttons

Use this script in combination with other scripts to reduce the amount of times one needs to set ```role="button"``` elements to accept both <kbd>Space</kbd> and <kbd>Enter</kbd> keys.


## What's it do?

This script will search the DOM for any instances of ```role="button"``` and will make sure that <kbd>Space</kbd> and <kbd>Enter</kbd> keypresses fire the ```click``` event associated with that element.

Next, the script will determine if the element with the ```role="button"``` needs a ```tabindex```. If the element does not have a ```tabindex``` set, and if it is __not__ an ```<a>``` with an ```href```, then a ```tabindex="0"``` will be applied to the element.

Additionally, the script will check if the ```role="button"``` has an ```aria-controls``` attribute. If it doesn't, but has a ```data-controls``` or ```href``` set, then the script will add an ```aria-controls``` with a value of the set attributes.


## Why do you need this?

Well, as long as you're appropriately setting elements that have a ```role="button"``` to work with the appropriate keyboard controls in your own scripts, then you likely don't need this.

If you __don't__ want to set ARIA buttons to work correctly in each of your scripts, and want to use a single script to do it for you once and for all, then maybe this script is for you!


### License & Such

This script was written by [Scott O'Hara](https://twitter.com/scottohara).

It has an [MIT](https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md) license.

Do with it what you will :)
