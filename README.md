# TransferWise icons

[![npm](https://img.shields.io/npm/v/@transferwise/icons.svg)](https://www.npmjs.com/package/@transferwise/icons)
[![GitHub release](https://img.shields.io/github/release/transferwise/icons.svg)](https://github.com/transferwise/icons/releases)
[![CircleCI](https://img.shields.io/circleci/project/github/transferwise/icons/master.svg)](https://circleci.com/gh/transferwise/icons)
[![npm](https://img.shields.io/npm/l/icons.svg)](https://github.com/transferwise/icons/blob/master/LICENSE)

This is the TransferWise SVG icon set, [as seen in this demo](https://transferwise.github.io/icons).

The SVG icon sprite and demo are built using [create-svg-icon-sprite](https://github.com/transferwise/create-svg-icon-sprite).

## Usage

[A helpful general guide for SVG icon sprites - CSSTricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)

### React

The icons can be imported individually, allowing us to minimize our app sizes.

For example:
```js
...
import TransferIcon from '@transferwise/icons/react/transfer';

const YourComponent = () => (
  ...
  <TransferIcon size="sm" />
  ...
);
```

The `size` prop should be one of the sizes defined in `styles.css` (`sm`, `md`, `lg`, `xl`, or `xxl`),
which should also be imported for consistency.

The component also passes any other `className` and `style` values to the icon, so you can style them further,
for example for a large blue icon:
```js
<TransferIcon size="lg" className="text-info" />
```

### CDN

The assets are available at:

<https://daw291njkc3ao.cloudfront.net/icons/{version}/sprite.svg> (SVG sprite itself)
<https://daw291njkc3ao.cloudfront.net/icons/{version}/svg-icon-sprite.js> (sprite string script)
<https://daw291njkc3ao.cloudfront.net/icons/{version}/svg-icon-sprite-version.js> (sprite version script)
<https://daw291njkc3ao.cloudfront.net/icons/{version}/icons.min.css> (styles)

Where `{version}` is either the package version or `latest`.

### Installation

`npm install --save @transferwise/icons`

### Usage from a module-based environment

#### Javascript

```js
import { iconSprite } from '@transferwise/icons';

... // append SVG icon sprite string to HTML
... // create components in your framework if you want to
```

If you wish to optimise as much as possible and only bundle the icons you need,
you can use Webpack plugins to require the icons from the `dist/icons` directory
and create your own sprite and serve it as you choose.

#### CSS
```css
@import "~@transferwise/icons/dist/icons.min.css";
```
(or just import it from JS depending on your build system)

### Usage from a non-module-based environment

#### JavaScript

1. Add `node_modules/@transferwise/icons/dist/svg-icon-sprite.js` to your bundle.
1. Use `window.svgIconSprite` from your code to access the sprite string
1. Create components in your framework if you want to

#### CSS
```css
@import "node_modules/@transferwise/icons/dist/icons.min.css";
```

### Usage from server side

Just append the sprite code (manually or in case of Node, by requiring it as a module) to your template
and use [like explained here](https://css-tricks.com/svg-sprites-use-better-icon-fonts/#article-header-id-2).

We recommend using the provided stylesheet for the classes below.

### Styles

The package comes with styles (`icons.min.css`) for icon sizes you should use
in your components for consistency.

| Class                    | Size |
|--------------------------|-----:|
| `tw-icon-sm`             | 16px |
| `tw-icon-md` (_default_) | 24px |
| `tw-icon-lg`             | 32px |
| `tw-icon-xl`             | 40px |
| `tw-icon-xxl`            | 48px |

## Adding/removing/changing icons

1. Add/remove/change 24x24 SVG icon(s) in the `icons` folder.
1. Change `package.json` version (if doing multiple of these, follow the first one that applies):  
Removing an icon: _major_ release, f.e. `1.2.3 => 2.0.0`  
Adding an icon: _minor_ release, f.e. `1.2.3 => 1.3.0`  
Changing an icon: _patch_ release, f.e. `1.2.3 => 1.2.4`
1. Add a `CHANGELOG.md` entry with the version and an explanation of changes
1. Submit your pull request from a feature branch and get code reviewed.
1. If the pull request is approved and the [CircleCI build](https://circleci.com/gh/transferwise/icons) passes, you will be able to merge with rebase.
1. Code will automatically be released to [GitHub](https://github.com/transferwise/icons/releases) and published to [npm](https://www.npmjs.com/package/@transferwise/icons) with the version specified in the changelog and package file.
1. The [demo](https://transferwise.github.io/icons) will also automatically be built.

## Contributing

1. Develop
1. For a single-run check of version match and linting errors, run `npm test`.
1. **Bump version number in `package.json` according to [semver](http://semver.org/) and add an item that a release will be based on to `CHANGELOG.md`**.
1. Submit your pull request from a feature branch and get code reviewed.
1. If the pull request is approved and the [CircleCI build](https://circleci.com/gh/transferwise/icons) passes, you will be able to merge with rebase.
1. Code will automatically be released to [GitHub](https://github.com/transferwise/icons/releases) and published to [npm](https://www.npmjs.com/package/@transferwise/icons) with the version specified in the changelog and package file.

## Other

For features and bugs, feel free to [add issues](https://github.com/transferwise/icons/issues) or contribute.