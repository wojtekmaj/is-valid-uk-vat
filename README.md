[![npm](https://img.shields.io/npm/v/is-valid-uk-vat.svg)](https://www.npmjs.com/package/is-valid-uk-vat) ![downloads](https://img.shields.io/npm/dt/is-valid-uk-vat.svg) [![CI](https://github.com/wojtekmaj/is-valid-uk-vat/actions/workflows/ci.yml/badge.svg)](https://github.com/wojtekmaj/is-valid-uk-vat/actions)

# Is-Valid-UK-VAT

Check if a number is a valid UK VAT number.

Supports standard 9-digit VAT registration numbers (VRNs), optional `GB` prefixes, 12-digit branch variants, and legacy `GD###` / `HA###` identifiers.

## tl;dr

- Install by executing `npm install is-valid-uk-vat` or `yarn add is-valid-uk-vat`.
- Import by adding `import isValidUKVAT from 'is-valid-uk-vat'`.
- Use it by writing `const valid = isValidUKVAT('GB434031494')`

## Examples

```ts
isValidUKVAT('434031494'); // true

isValidUKVAT('GB434031494'); // true

isValidUKVAT('GB434031494001'); // true

isValidUKVAT('GD001'); // true

isValidUKVAT('HA500'); // true
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/5426427?v=4&s=128" width="64" height="64" alt="Wojciech Maj">
    </td>
    <td>
      <a href="https://github.com/wojtekmaj">Wojciech Maj</a>
    </td>
  </tr>
</table>
