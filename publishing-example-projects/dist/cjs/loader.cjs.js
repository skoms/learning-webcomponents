'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-81b75173.js');

/*
 Stencil Client Patch Esm v2.12.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["ybc-side-drawer.cjs",[[1,"ybc-side-drawer",{"title":[513],"opened":[1540],"showContactInfo":[32],"open":[64]}]]],["ybc-tooltip.cjs",[[1,"ybc-tooltip",{"tooltip":[513],"open":[516]}]]],["ybc-spinner_3.cjs",[[1,"ybc-stock-finder",{"searchResults":[32],"loading":[32]}],[1,"ybc-stock-price",{"stockSymbol":[1537,"stock-symbol"],"price":[32],"stockUserInput":[32],"stockInputValid":[32],"error":[32],"loading":[32]},[[16,"ybcSymbolSelected","onStockSymbolSelected"]]],[1,"ybc-spinner"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
