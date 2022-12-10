class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
        }
       
        .search-container > input {
            width: 75%;
            font-size: 1rem;
            border-color: transparent;
            margin-top: 1rem;
            padding: 0.5rem 1rem;
        }
       
        .search-container > input:focus {
            outline: none;
            border-bottom: transparent;
        }

       
        .search-container >  input::placeholder {
            text-transform: capitalize;
            color: #324d67;
        }
       
        .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 0.375rem 0.75rem;
            letter-spacing: 0.25rem;
            background: #49a6e9;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
            color: white;
            border: 2px solid #49a6e9;
             border-radius: 0.5rem;
            font-size: 0.875rem;
          transition: all 0.3s linear infinite;
            text-transform: uppercase;
        }

        .search-container > button:hover {
            color: #49a6e9;
             background: #063251;
            border-color: #063251;
        }
       
        @media screen and (max-width: 1000px){
            .search-container {
                flex-direction: column;
                position: static;
            }
       
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
       
            .search-container > button {
                width: 100%;
            }
        }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search your favorite drink" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);