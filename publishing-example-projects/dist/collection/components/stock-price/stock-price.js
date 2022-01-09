import { Component, h, Listen, Prop, State /*, Element */, Watch } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';
export class StockPrice {
  constructor() {
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
  render() {
    let dataContent = 'Please enter a symbol';
    if (this.error) {
      dataContent = this.error;
    }
    else if (this.price) {
      dataContent = `Price: $${this.price}`;
    }
    return [
      h("form", { onSubmit: this.onFetchStockPrice },
        h("input", { id: "stock-symbol", ref: el => (this.stockInput = el), value: this.stockUserInput, onInput: this.onUserInput }),
        h("button", { type: "submit", disabled: !this.stockInputValid || this.loading }, "Fetch")),
      h("div", null, !this.loading
        ? h("p", null, dataContent)
        : h("ybc-spinner", null)),
    ];
  }
  static get is() { return "ybc-stock-price"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./stock-price.sass"]
  }; }
  static get styleUrls() { return {
    "$": ["stock-price.css"]
  }; }
  static get properties() { return {
    "stockSymbol": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "stock-symbol",
      "reflect": true
    }
  }; }
  static get states() { return {
    "price": {},
    "stockUserInput": {},
    "stockInputValid": {},
    "error": {},
    "loading": {}
  }; }
  static get watchers() { return [{
      "propName": "stockSymbol",
      "methodName": "stockSymbolChanged"
    }]; }
  static get listeners() { return [{
      "name": "ybcSymbolSelected",
      "method": "onStockSymbolSelected",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
