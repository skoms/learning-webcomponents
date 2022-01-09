import { Component, Event, EventEmitter, h, State } from "@stencil/core";

import { AV_API_KEY } from '../../global/global'

@Component({
  tag: 'ybc-stock-finder',
  styleUrl: './stock-finder.sass',
  shadow: true
})
export class StockFinder {
  stockNameInput: HTMLInputElement

  @State() searchResults: { symbol: string, name: string }[] = []
  @State() loading = false

  @Event({ bubbles: true, composed: true }) ybcSymbolSelected: EventEmitter<string>

  onFindStocks = (e: Event) => {
    this.loading = true
    e.preventDefault()
    const stockName = this.stockNameInput.value
    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`
    )
    .then(res => res.json())
    .then(parsed => {
      this.searchResults = parsed.bestMatches.map(match => ({ symbol: match['1. symbol'], name: match['2. name']}))
      console.log(this.searchResults)
    })
    .catch(err => console.error(err))
    .finally(() => {
      this.loading = false
    })
  }

  onSelectSymbol = (symbol: string) => {
    this.ybcSymbolSelected.emit(symbol)
  }

  render() {
    return [
      <form onSubmit={this.onFindStocks}>
        <input
          id="stock-symbol"
          ref={el => (this.stockNameInput = el)}
        />
        <button type="submit">
          Find!
        </button>
      </form>,
      !this.loading 
        ? <ul>
            {this.searchResults.map(result => 
            <li onClick={() => this.onSelectSymbol(result.symbol)}><strong>{result.symbol}</strong> - {result.name}</li>
            )}
          </ul>
        : <ybc-spinner></ybc-spinner> 
    ];
  }
}