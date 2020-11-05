# currency-flags

This package outputs two CSS files (minified and unminified) with classes for currency codes.

> **Major version bump:** Note that v3 of this library no longer inlines the images with base64 encoding, instead referencing them by transferwise.com asset URL. To continue self-hosting images, please stay on v2.

## How to use

**1. Install**

`npm install --save currency-flags`

**2. Add CSS to page**

**3. Use**

```html
<div class="currency-flag currency-flag-usd"></div>
```

<img src="https://transferwise.com/public-resources/assets/flags/rectangle/usd.png">

The `currency-flag` selector has a default `display` of `inline-block`, size of `24x16` and a `background-size` of `cover`.
`currency-flag-sm`, `currency-flag-lg` and `currency-flag-xl` modifiers are available.


### Rectangular flag source images

While the main CSS file no longer references them, the source images for the rectangular flags are available in `src/flags/${currency_code}.png`.

## Contributing

1.  Clone repo
1.  Add correctly sized (`48x32`) `png` files to [static-assets](https://github.com/transferwise/static-assets)
1.  Add a new line to `src/styles.css` for the new currency, referencing the static asset URL.
1.  **Bump version number in `package.json` according to [semver](http://semver.org/) and add an item that a release will be based on to `CHANGELOG.md`**.
1.  Submit your pull request from a feature branch and get code reviewed.
1.  If the pull request is approved and the [CircleCI build](https://circleci.com/gh/transferwise/currency-flags) passes, you will be able to squash and merge.
1.  Code will automatically be released to [GitHub](https://github.com/transferwise/currency-flags/releases) and published to [npm](https://www.npmjs.com/package/currency-flags) according to the version specified in the changelog and `package.json`.
