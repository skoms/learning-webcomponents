import { Component, Event, h, State } from "@stencil/core";
import { AV_API_KEY } from '../../global/global';
export class StockFinder {
  constructor() {
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
      h("form", { onSubmit: this.onFindStocks },
        h("input", { id: "stock-symbol", ref: el => (this.stockNameInput = el) }),
        h("button", { type: "submit" }, "Find!")),
      !this.loading
        ? h("ul", null, this.searchResults.map(result => h("li", { onClick: () => this.onSelectSymbol(result.symbol) },
          h("strong", null, result.symbol),
          " - ",
          result.name)))
        : h("ybc-spinner", null)
    ];
  }
  static get is() { return "ybc-stock-finder"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./stock-finder.sass"]
  }; }
  static get styleUrls() { return {
    "$": ["stock-finder.css"]
  }; }
  static get states() { return {
    "searchResults": {},
    "loading": {}
  }; }
  static get events() { return [{
      "method": "ybcSymbolSelected",
      "name": "ybcSymbolSelected",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
