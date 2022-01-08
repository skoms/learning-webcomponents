import { Component, h, Prop, State /*, Element */, Watch } from '@stencil/core'

import { AV_API_KEY } from '../../global/global'

@Component({
  tag: 'ybc-stock-price',
  styleUrl: './stock-price.sass',
  shadow: true,
})
export class StockPrice {
  stockInput: HTMLInputElement
  // previousStockSymbol = ''

  // @Element() el: HTMLElement

  @State() price: number = 0
  @State() stockUserInput: string
  @State() stockInputValid = false
  @State() error: string

  @Prop({ mutable: true, reflect: true }) stockSymbol: string

  @Watch('stockSymbol')
  stockSymbolChanged(newVal: string, oldVal) {
    if (newVal !== oldVal) {
      this.stockUserInput = newVal
      this.fetchStockPrice(newVal)
    }
  }

  onUserInput = (event: Event) => {
    this.stockUserInput = (event.target as HTMLInputElement).value
    this.stockInputValid = this.stockUserInput.trim() !== ''
  }

  onFetchStockPrice = (event: Event) => {
    event.preventDefault()
    // const stockSymbol = (
    //   this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement
    // ).value
    this.stockSymbol = this.stockInput.value
    // this.fetchStockPrice(this.stockSymbol)
  }

  componentWillLoad() {
    console.log('component will load')
    console.log(this.stockSymbol)
    //? Can change stateful values before next render, wont need to rerender
    //! More efficient to update stateful components here, less renders
  }

  componentDidLoad() {
    if (this.stockSymbol) {
      // this.previousStockSymbol = this.stockSymbol
      this.stockUserInput = this.stockSymbol
      this.stockInputValid = true
      this.fetchStockPrice(this.stockSymbol)
    }
    console.log('component did load')
    //? Can change stateful values, but does require rerender to take effect
  }

  componentWillUpdate() {
    console.log('Component will update')
  }

  componentDidUpdate() {
    console.log('Component did update')
    // if (this.stockSymbol !== this.previousStockSymbol) {
    //   this.previousStockSymbol = this.stockSymbol
    //   this.stockUserInput = this.stockSymbol
    //   this.fetchStockPrice(this.stockSymbol)
    // }
  }

  disconnectedCallback() {
    console.log('Disconnect callback')
  }

  fetchStockPrice(stockSymbol: string) {
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`,
    )
      .then(res => res.json())
      .then(parsedRes => {
        if (!parsedRes['Global Quote']['05. price']) {
          throw new Error('Invalid Symbol')
        }
        this.error = null
        this.price = +parsedRes['Global Quote']['05. price']
      })
      .catch(err => {
        this.error = err.message
      })
  }

  render() {
    let dataContent = 'Please enter a symbol'
    if (this.error) {
      dataContent = this.error
    } else if (this.price) {
      dataContent = `Price: $${this.price}`
    }
    return [
      <form onSubmit={this.onFetchStockPrice}>
        <input
          id="stock-symbol"
          ref={el => (this.stockInput = el)}
          value={this.stockUserInput}
          onInput={this.onUserInput}
        />
        <button type="submit" disabled={!this.stockInputValid}>
          Fetch
        </button>
      </form>,
      <div>
        <p>{dataContent}</p>
      </div>,
    ]
  }
}
