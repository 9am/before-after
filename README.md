<div align="center">
    <img src="https://raw.githubusercontent.com/9am/before-after/main/logo.svg" alt="before-after-logo" width="140" height="140" />
    <h1>&lt;before-after&gt;</h1>
	<p>A small Web Component shows a before-after comparison. 🌓</p>
    <p>
        <a href="https://github.com/9am/before-after/blob/main/LICENSE">
            <img alt="GitHub" src="https://img.shields.io/github/license/9am/before-after?style=flat-square&color=success">
        </a>
        <a href="https://www.npmjs.com/package/@9am/before-after">
            <img alt="npm" src="https://img.shields.io/npm/v/@9am/before-after?style=flat-square&color=orange">
        </a>
        <a href="https://www.npmjs.com/package/@9am/before-after">
            <img alt="npm" src="https://img.shields.io/npm/dt/@9am/before-after?style=flat-square&color=blue">
        </a>
        <a href="https://bundlephobia.com/package/@9am/before-after@latest">
            <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@9am/before-after?style=flat-square">
        </a>
    </p>
</div>


## Demo

Go to the [Home page](https://9am.github.io/before-after/).

## Usage

Include via CDN(e.g. unpkg) or Download a copy

```html
<script src="https://unpkg.com/@9am/before-after/dist/index.min.js"></script>

<before-after>
    <section slot="before">
        <h1>BEFORE</h1>
    </section>
    <section slot="after">
        <h1>AFTER</h1>
    </section>
</before-after>
```

<details>
    <summary>Or import the ESM version</summary>

```html
<script type="module">
    import 'https://unpkg.com/@9am/before-after/dist/index.es.js';
</script>
```

</details>

<details>
    <summary>Or install via npm</summary>

```sh
npm install @9am/before-after
```

</details>

## Documentation

### Attributes

| Name | Type | Default | Description |
| :--- | :--- | :---    | :---        |
| `varient` | linear  \|  radial  \|  conic <br> repeating-linear  \|  repeating-radial  \|  repeating-conic  | `linear` | The varient. |
| `orient` | horizontal \| vertical | `horizontal` | The orientation. |
| `value` | number | `50` | The position of the thumb bar. (0-100) |

### CSS Properties

| Name | Type | Default | Description |
| :--- | :--- | :---    | :---        |
| `--position` | css gradient params before `<color-stop-list>` | linear: `to left` <br> radial: `circle at center` <br> conic: `at center` | The control for how the mask behaves. |
| `--repeat` | number | `6` | The repeat times for `repeating-` varients. |
| `--thumb-size` | css size | `1px` | The thumb size. |
| `--thumb-color` | css color | `white` | The thumb color. |

## License
[MIT](LICENSE)
