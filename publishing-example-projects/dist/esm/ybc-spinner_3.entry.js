import { r as registerInstance, h, c as createEvent, H as Host } from './index-5e7a3f4f.js';

const spinnerCss = ".lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:20px;height:20px;margin:4px;border:4px solid #640064;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#640064 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-0.45s}.lds-ring div:nth-child(2){animation-delay:-0.3s}.lds-ring div:nth-child(3){animation-delay:-0.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";

let Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "lds-ring" }, h("div", null), h("div", null), h("div", null), h("div", null)));
  }
};
Spinner.style = spinnerCss;

const AV_API_KEY = 'GV1GNY4S4I6UWYQ3';

const stockFinderCss = ":host{display:block;font-family:sans-serif;border:2px solid var(--color-primary, black);margin:2rem;padding:1rem;width:20rem;max-width:100%;border-radius:3px}:host form input{display:block;font-family:inherit;color:var(--color-primary, black);padding:0.1rem 0.25rem;margin-bottom:0.5rem}:host form input:focus,:host form button:focus{outline:none}:host form button{padding:0.25rem 0.5rem;border:1px solid var(--color-primary, black);background:var(--color-primary, black);color:var(--color-primary-contrast, white);border-radius:3px;cursor:pointer}:host form button:hover,:host form button:active{background:var(--color-primary-highlight, darkgray);border:1px solid var(--color-primary-highlight, darkgray)}:host form button:disabled{background:var(--color-disabled, #ccc);border-color:var(--color-disabled, #ccc);color:var(--color-disabled-contrast, #black);cursor:not-allowed}:host ul{margin:0;padding:0;list-style:none}:host ul li{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc}:host ul li:hover,:host ul li:active{cursor:pointer;color:var(--color-primary-contrast, white);background:var(--color-primary, black)}";

let StockFinder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ybcSymbolSelected = createEvent(this, "ybcSymbolSelected", 7);
    this.searchResults = [];
    this.loading = false;
    this.onFindStocks = (e) => {
      this.loading = true;
      e.preventDefault();
      const stockName = this.stockNameInput.value;
      fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
        .then(res => res.json())
        .then(parsed => {
        this.searchResults = parsed.bestMatches.map(match => ({ symbol: match['1. symbol'], name: match['2. name'] }));
        console.log(this.searchResults);
      })
        .catch(err => console.error(err))
        .finally(() => {
        this.loading = false;
      });
    };
    this.onSelectSymbol = (symbol) => {
      this.ybcSymbolSelected.emit(symbol);
    };
  }
  render() {
    return [
      h("form", { onSubmit: this.onFindStocks }, h("input", { id: "stock-symbol", ref: el => (this.stockNameInput = el) }), h("button", { type: "submit" }, "Find!")),
      !this.loading
        ? h("ul", null, this.searchResults.map(result => h("li", { onClick: () => this.onSelectSymbol(result.symbol) }, h("strong", null, result.symbol), " - ", result.name)))
        : h("ybc-spinner", null)
    ];
  }
};
StockFinder.style = stockFinderCss;

const stockPriceCss = ":host{display:block;font-family:sans-serif;border:2px solid #3b013b;margin:2rem;padding:1rem;width:20rem;max-width:100%;border-radius:3px}:host form input{display:block;font-family:inherit;color:#3b013b;padding:0.1rem 0.25rem;margin-bottom:0.5rem}:host form input:focus,:host form button:focus{outline:none}:host form button{padding:0.25rem 0.5rem;border:1px solid #3b013b;background:#3b013b;color:white;border-radius:3px;cursor:pointer}:host form button:hover,:host form button:active{background:#640064;border:1px solid #640064}:host form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}:host(.error){border-color:red;background:#ffb0b0}";

let StockPrice = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // previousStockSymbol = ''
    // @Element() el: HTMLElement
    this.price = 0;
    this.stockInputValid = false;
    this.loading = false;
    this.onUserInput = (event) => {
      this.stockUserInput = event.target.value;
      this.stockInputValid = this.stockUserInput.trim() !== '';
    };
    this.onFetchStockPrice = (event) => {
      event.preventDefault();
      // const stockSymbol = (
      //   this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement
      // ).value
      this.stockSymbol = this.stockInput.value;
      // this.fetchStockPrice(this.stockSymbol)
    };
  }
  stockSymbolChanged(newVal, oldVal) {
    if (newVal !== oldVal) {
      this.stockUserInput = newVal;
      this.stockInputValid = true;
      this.fetchStockPrice(newVal);
    }
  }
  componentWillLoad() {
    console.log('component will load');
    console.log(this.stockSymbol);
    //? Can change stateful values before next render, wont need to rerender
    //! More efficient to update stateful components here, less renders
  }
  componentDidLoad() {
    if (this.stockSymbol) {
      // this.previousStockSymbol = this.stockSymbol
      this.stockUserInput = this.stockSymbol;
      this.stockInputValid = true;
      this.fetchStockPrice(this.stockSymbol);
    }
    console.log('component did load');
    //? Can change stateful values, but does require rerender to take effect
  }
  componentWillUpdate() {
    console.log('Component will update');
  }
  componentDidUpdate() {
    console.log('Component did update');
    // if (this.stockSymbol !== this.previousStockSymbol) {
    //   this.previousStockSymbol = this.stockSymbol
    //   this.stockUserInput = this.stockSymbol
    //   this.fetchStockPrice(this.stockSymbol)
    // }
  }
  disconnectedCallback() {
    console.log('Disconnect callback');
  }
  onStockSymbolSelected(event) {
    console.log(`Stock Symbol Selected: ${event.detail}`);
    if (event.detail && event.detail !== this.stockSymbol) {
      this.stockSymbol = event.detail;
    }
  }
  fetchStockPrice(stockSymbol) {
    this.loading = true;
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(parsedRes => {
      if (!parsedRes['Global Quote']['05. price']) {
        throw new Error('Invalid Symbol');
      }
      this.error = null;
      this.price = +parsedRes['Global Quote']['05. price'];
    })
      .catch(err => {
      this.error = err.message;
    })
      .finally(() => {
      this.loading = false;
    });
  }
  //? Special Reserved
  hostData() {
    return {
      class: this.error ? 'error' : ''
    };
  }
  __stencil_render() {
    let dataContent = 'Please enter a symbol';
    if (this.error) {
      dataContent = this.error;
    }
    else if (this.price) {
      dataContent = `Price: $${this.price}`;
    }
    return [
      h("form", { onSubmit: this.onFetchStockPrice }, h("input", { id: "stock-symbol", ref: el => (this.stockInput = el), value: this.stockUserInput, onInput: this.onUserInput }), h("button", { type: "submit", disabled: !this.stockInputValid || this.loading }, "Fetch")),
      h("div", null, !this.loading
        ? h("p", null, dataContent)
        : h("ybc-spinner", null)),
    ];
  }
  static get watchers() { return {
    "stockSymbol": ["stockSymbolChanged"]
  }; }
  render() { return h(Host, this.hostData(), this.__stencil_render()); }
};
StockPrice.style = stockPriceCss;

export { Spinner as ybc_spinner, StockFinder as ybc_stock_finder, StockPrice as ybc_stock_price };
