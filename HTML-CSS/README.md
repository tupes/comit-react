# HTML Topics

## Text
- [letter assessment](letter-assessment): `strong`, `em`, `sub`, `sup`, `time`, `abbr`, `q`, `cite`, `address`

## Lists
- [letter assessment](letter-assessment): `ul`, `ol`, `li`, `dl`, `dt`, `dd`

## Tables
- [planets assessment](planets-assessment): `thead`, `tbody`, `th`, `caption`, colspan, rowspan, scope 

## Images
- [portfolio example](portfolio-example): `figure`, `figcaption`, `img`

## Forms
- [form example](form-example): `form`, `input`, `label`, `select`, `option`, `button`


# CSS Topics

## Pseudo-class Selectors
- [biography assessment](biography-assessment): `:link`, `:visited`, `:hover`

## Text Styling
- [ComIT example](comit-example): `text-align`, `text-decoration`, `text-transform`, `font-weight`
- [store flexbox example](store-flexbox-example): `text-align`, `text-decoration`, `text-transform`, `font-weight`

## Font Family 
- [panel example](panel-example)

## Background Image
- [panel example](panel-example)

## Floats
- [blog assessment](blog-assessment): `float`

## Flexbox
- [blog assessment](blog-assessment): `justify-content`, `flex-wrap`
- [ComIT example](comit-example)
- [store flexbox example](store-flexbox-example): `flex-direction`

## Grid
- [blog assessment](blog-assessment): `grid-template-columns`, `grid-column`
- [store grid example](store-grid-example): `grid-template-columns`, `grid-template-rows`, `grid-column`, `grid-row`
- [portfolio example](portfolio-example): `grid-auto-rows`, `grid-auto-flow`

## Positioning
- [positioning example](positioning-example): fixed, relative, absolute, `z-index`

## Media Queries
- [panel example](panel-example)


# CSS Tips

### Units
- avoid using pixels (px). Setting an element's width to 800px will look very different between a computer monitor, a smartphone, and a projector screen mounted on a wall.
- instead, use 'em' when giving values for `padding`, `margin`, `height`, `width`, and `border-radius`. This will scale to the appropriate size if the element inherits a different font size or the user changes the font settings.
- use 'rem' for `font-size`, because using 'em' can lead to unpredictable results. The default size of 1rem is 16px.
- using px for a `border` is fine, because it'll usually be 1px.
- use unitless numbers for `line-height`, due to a quirk in how values are inherited.

### CSS variables
- create variables for recurring values, like colors or standard sizes.
- this makes it much easier to change values.

### Universal border-box fix

### Element height

### Spacing elements: lobotomized owl selector

### Layout
