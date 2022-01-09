import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';
import { A as AV_API_KEY } from './global.js';
import { d as defineCustomElement$2 } from './spinner.js';

const stockFinderCss = ":host{display:block;font-family:sans-serif;border:2px solid var(--color-primary, black);margin:2rem;padding:1rem;width:20rem;max-width:100%;border-radius:3px}:host form input{display:block;font-family:inherit;color:var(--color-primary, black);padding:0.1rem 0.25rem;margin-bottom:0.5rem}:host form input:focus,:host form button:focus{outline:none}:host form button{padding:0.25rem 0.5rem;border:1px solid var(--color-primary, black);background:var(--color-primary, black);color:var(--color-primary-contrast, white);border-radius:3px;cursor:pointer}:host form button:hover,:host form button:active{background:var(--color-primary-highlight, darkgray);border:1px solid var(--color-primary-highlight, darkgray)}:host form button:disabled{background:var(--color-disabled, #ccc);border-color:var(--color-disabled, #ccc);color:var(--color-disabled-contrast, #black);cursor:not-allowed}:host ul{margin:0;padding:0;list-style:none}:host ul li{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc}:host ul li:hover,:host ul li:active{cursor:pointer;color:var(--color-primary-contrast, white);background:var(--color-primary, black)}";

let StockFinder = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return stockFinderCss; }
};
StockFinder = /*@__PURE__*/ proxyCustomElement(StockFinder, [1, "ybc-stock-finder", {
    "searchResults": [32],
    "loading": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ybc-stock-finder", "ybc-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "ybc-stock-finder":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StockFinder);
      }
      break;
    case "ybc-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const YbcStockFinder = StockFinder;
const defineCustomElement = defineCustomElement$1;

export { YbcStockFinder, defineCustomElement };
