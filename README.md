# currency-flags
This package outputs two CSS files (minified and unminified) with classes for currency codes using base64 background images inlined.

## How to use

**1. Install**

`bower install --save https://github.com/transferwise/currency-flags.git`

or

`npm install --save https://github.com/transferwise/currency-flags.git`

**2. Add CSS to page**

**3. Use**

```html
<div class="currency-flag currency-flag-usd"></div>
```

<img src="http://i.imgur.com/Fdd5VLp.png">

The `currency-flag` selector has a default `display` of `inline-block`, size of `24x16` and a `background-size` of `cover`.
`currency-flag-sm`, `currency-flag-lg` and `currency-flag-xl` modifiers are available.

## How to add flags

1. Clone repo
1. Run `npm install`
1. Add correctly sized (`48x32`) `png` files to `src/flags`
1. Run `npm start`
1. Update version in `package.json`
1. Commit to a new branch and open a pull request
