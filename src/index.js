import css from './index.css?inline';

class BeforeAfter extends HTMLElement {
    static get observedAttributes() {
        return ['orient', 'value'];
    }

    #input = null;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(
            this.#getTemplate({
                value: this.value,
                orient: this.orient,
            }).content.cloneNode(true)
        );
        this.#input = this.shadowRoot.querySelector('#range');
        this.#onInput();
    }

    #getTemplate({ value, orient }) {
        const template = document.createElement('template');
        template.innerHTML = `
    <style>${css}</style>
    <input type="range" id="range" part="range" orient="${orient}" value=${value} min="0" max="100" step="any" />
    <slot name="before"></slot>
    <slot name="after"></slot>
`;
        return template;
    }

    attributeChangedCallback(name, prev, next) {
        if (prev === next) {
            return;
        }
        switch (name) {
            case 'orient': {
                this.#input?.setAttribute('orient', next);
                break;
            }
            case 'value': {
                this.value = next;
                this.#input.value = next;
                this.#input.dispatchEvent(new InputEvent('input'));
                break;
            }
            default:
                break;
        }
    }

    connectedCallback() {
        this.#input?.addEventListener('input', this.#onInput);
    }

    disconnectedCallback() {
        this.#input?.removeEventListener('input', this.#onInput);
        this.#input = null;
    }

    #onInput = () => {
        this.style.setProperty('--val', `${this.#input?.value ?? 0}`);
    };

    get orient() {
        return this.getAttribute('orient') ?? 'horizontal';
    }

    set orient(val) {
        this.setAttribute('orient', val);
    }

    get value() {
        return this.getAttribute('value') ?? 50;
    }

    set value(val) {
        this.setAttribute('value', val);
    }
}

if (window && !window.customElements.get('before-after')) {
    window.customElements.define('before-after', BeforeAfter);
}

export { BeforeAfter };
export default null;
