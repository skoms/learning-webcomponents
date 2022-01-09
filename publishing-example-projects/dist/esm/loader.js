import { p as promiseResolve, b as bootstrapLazy } from './index-5e7a3f4f.js';

/*
 Stencil Client Patch Esm v2.12.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["ybc-side-drawer",[[1,"ybc-side-drawer",{"title":[513],"opened":[1540],"showContactInfo":[32],"open":[64]}]]],["ybc-tooltip",[[1,"ybc-tooltip",{"tooltip":[513],"open":[516]}]]],["ybc-spinner_3",[[1,"ybc-stock-finder",{"searchResults":[32],"loading":[32]}],[1,"ybc-stock-price",{"stockSymbol":[1537,"stock-symbol"],"price":[32],"stockUserInput":[32],"stockInputValid":[32],"error":[32],"loading":[32]},[[16,"ybcSymbolSelected","onStockSymbolSelected"]]],[1,"ybc-spinner"]]]], options);
  });
};

export { defineCustomElements };
