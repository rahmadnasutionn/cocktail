class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            background: #49a6e9;
            width: 100%;
            color: white;
        }
        h2 {
             padding: 16px;
             text-transform: capitalize;
             letter-spacing: 0.5rem;
        }
        
        </style>
    <h2>cocktail API</h2>`;
    }
}

customElements.define('app-bar', AppBar);