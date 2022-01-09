import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const tooltipCss = ":host{position:relative}:host .tooltip-icon{background:black;color:white;font-size:0.8rem;padding:0.1rem 0.32rem;margin:0 0.2rem;border-radius:50%;user-select:none}:host .tooltip-text{position:absolute;top:1.5rem;left:0;padding:0.5rem;font-size:0.8rem;background:black;color:white;border-radius:0.25rem;min-width:8rem;user-select:none;box-shadow:0 2px 8px rgba(0, 0, 0, 0.25);opacity:0;pointer-events:none;transition:opacity ease-out 0.1s}:host([open]) .tooltip-text{opacity:1;pointer-events:all}";

let Tooltip = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.tooltip = 'Default tooltip text';
    this.open = false;
    this.toggleOpen = () => {
      this.open = !this.open;
    };
  }
  render() {
    return [
      h("slot", null),
      h("span", { class: "tooltip-icon", onClick: this.toggleOpen }, "?"),
      h("div", { class: "tooltip-text" }, this.tooltip),
    ];
  }
  static get style() { return tooltipCss; }
};
Tooltip = /*@__PURE__*/ proxyCustomElement(Tooltip, [1, "ybc-tooltip", {
    "tooltip": [513],
    "open": [516]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ybc-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "ybc-tooltip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tooltip);
      }
      break;
  } });
}

const YbcTooltip = Tooltip;
const defineCustomElement = defineCustomElement$1;

export { YbcTooltip, defineCustomElement };
