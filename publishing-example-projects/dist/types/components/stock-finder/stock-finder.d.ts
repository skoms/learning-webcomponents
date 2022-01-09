import { Event, EventEmitter } from "../../stencil-public-runtime";
export declare class StockFinder {
  stockNameInput: HTMLInputElement;
  searchResults: {
    symbol: string;
    name: string;
  }[];
  loading: boolean;
  ybcSymbolSelected: EventEmitter<string>;
  onFindStocks: (e: Event) => void;
  onSelectSymbol: (symbol: string) => void;
  render(): any[];
}
