import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { A as AV_API_KEY } from './global.js';
import { d as defineCustomElement$2 } from './spinner.js';

const stockPriceCss = ":host{display:block;font-family:sans-serif;border:2px solid #3b013b;margin:2rem;padding:1rem;width:20rem;max-width:100%;border-radius:3px}:host form input{display:block;font-family:inherit;color:#3b013b;padding:0.1rem 0.25rem;margin-bottom:0.5rem}:host form input:focus,:host form button:focus{outline:none}:host form button{padding:0.25rem 0.5rem;border:1px solid #3b013b;background:#3b013b;color:white;border-radius:3px;cursor:pointer}:host form button:hover,:host form button:active{background:#640064;border:1px solid #640064}:host form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}:host(.error){border-color:red;background:#ffb0b0}";

let StockPrice = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return stockPriceCss; }
  render() { return h(Host, this.hostData(), this.__stencil_render()); }
};
StockPrice = /*@__PURE__*/ proxyCustomElement(StockPrice, [1, "ybc-stock-price", {
    "stockSymbol": [1537, "stock-symbol"],
    "price": [32],
    "stockUserInput": [32],
    "stockInputValid": [32],
    "error": [32],
    "loading": [32]
  }, [[16, "ybcSymbolSelected", "onStockSymbolSelected"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ybc-stock-price", "ybc-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "ybc-stock-price":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StockPrice);
      }
      break;
    case "ybc-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const YbcStockPrice = StockPrice;
const defineCustomElement = defineCustomElement$1;

export { YbcStockPrice, defineCustomElement };
