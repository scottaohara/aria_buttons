# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]
...

## 1.1.0 - 2018-08-26
### Changed
- Remove `href` attributes from links that have been converted to `role=button`. Doing so will ensure that a link context menu won't appear if someone right clicks on a "button."
- Change 'keytrolls' function to 'keyEvents'.
- Add `tabindex=0` to all converted elements, since the condition for `href` no longer exists.

## 1.0.0 - 2018-02-08
### Changed
- Update documentation and features. Declare script version 1.0.0.

### Added
- `aria-pressed` and `data-pressed` functionality added to script.


## 0.3.1 - 2017-03-31
### Changed
- Add `undefined` to iffe
- Revised naming of function from `a11yBUTTONS` to `ARIAbuttons`.
- Remove `widgetCount` variable.


## 0.3.0 - 2017-03-24
### Changed
- Move `var widget` to be within the `create` function.  Add `default break` to switch.


## 0.2.0 - 2016-12-17
### Fixed
- Needed a `preventdefault()` for link buttons (e.g. `a href`, to keep focus on the element when triggered.


## 0.1.0 - 2016-11-26
### Added
- Initial commit of code base.
- Progressively enhance non-button elements into a `role=button`. 
- Script adds `tabindex=0` if necessary.
- Script adds ENTER and SPACE keys to activate "button".
- Script adds  `aria-controls` attribute if `data-controls` or `href` existed.
