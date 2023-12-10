# synco-room

[![Codecov][codecov-src]][codecov-href]

This package is the core of Synco. It provides a room factory that can be used to create rooms with webRTC.

## Usage

Install package:

```sh
# npm
npm install synco-room

# yarn
yarn add synco-room

# pnpm
pnpm install synco-room

# bun
bun install synco-room
```

Import:

```js
// ESM
import { RoomFactory } from 'synco-room'

// CommonJS
const { RoomFactory } = require('synco-room')
```

## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/synco-room?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/synco-room
[npm-downloads-src]: https://img.shields.io/npm/dm/synco-room?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/synco-room
[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/synco-room/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/unjs/synco-room
[bundle-src]: https://img.shields.io/bundlephobia/minzip/synco-room?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=synco-room
