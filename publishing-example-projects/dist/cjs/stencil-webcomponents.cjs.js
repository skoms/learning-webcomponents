'use strict';

const index = require('./index-81b75173.js');

/*
 Stencil Client Patch Browser v2.12.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-webcomponents.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["ybc-side-drawer.cjs",[[1,"ybc-side-drawer",{"title":[513],"opened":[1540],"showContactInfo":[32],"open":[64]}]]],["ybc-tooltip.cjs",[[1,"ybc-tooltip",{"tooltip":[513],"open":[516]}]]],["ybc-spinner_3.cjs",[[1,"ybc-stock-finder",{"searchResults":[32],"loading":[32]}],[1,"ybc-stock-price",{"stockSymbol":[1537,"stock-symbol"],"price":[32],"stockUserInput":[32],"stockInputValid":[32],"error":[32],"loading":[32]},[[16,"ybcSymbolSelected","onStockSymbolSelected"]]],[1,"ybc-spinner"]]]], options);
});
