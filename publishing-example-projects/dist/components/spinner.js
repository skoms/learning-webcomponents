import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const spinnerCss = ".lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:20px;height:20px;margin:4px;border:4px solid #640064;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#640064 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-0.45s}.lds-ring div:nth-child(2){animation-delay:-0.3s}.lds-ring div:nth-child(3){animation-delay:-0.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";

let Spinner = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "lds-ring" }, h("div", null), h("div", null), h("div", null), h("div", null)));
  }
  static get style() { return spinnerCss; }
};
Spinner = /*@__PURE__*/ proxyCustomElement(Spinner, [1, "ybc-spinner"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ybc-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "ybc-spinner":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Spinner);
      }
      break;
  } });
}

export { Spinner as S, defineCustomElement as d };
