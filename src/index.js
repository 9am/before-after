import css from './index.css?inline';

export class BeforeAfter extends HTMLElement {
    static get observedAttributes() {
        return ['orient'];
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
    <input type="range" value=${value} orient="${orient}" step="any" id="range" part="range"  />
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

if (!window.customElements.get('before-after')) {
    window.customElements.define('before-after', BeforeAfter);
}

export default null;