# @gabortorma/antfu-eslint-config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![code style][code-style-src]][code-style-href]

My custom options and rules for [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## Install

```bash
# Using pnpm
pnpm add -D @gabortorma/antfu-eslint-config

# Using yarn
yarn add --dev @gabortorma/antfu-eslint-config

# Using npm
npm install --save-dev @gabortorma/antfu-eslint-config
```

### Setup

Create `eslint.config.mjs` in your project root:

```js
// eslint.config.mjs
import antfu from '@gabortorma/antfu-eslint-config'

export default antfu()
```

## License

[MIT](./LICENSE) License © 2024-present

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@gabortorma/antfu-eslint-config?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@gabortorma/antfu-eslint-config
[npm-downloads-src]: https://img.shields.io/npm/dm/@gabortorma/antfu-eslint-config?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@gabortorma/antfu-eslint-config
[license-src]: https://img.shields.io/github/license/gabortorma/antfu-eslint-config.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/gabortorma/antfu-eslint-config/blob/main/LICENSE
[code-style-src]: https://antfu.me/badge-code-style.svg
[code-style-href]: https://github.com/antfu/eslint-config
