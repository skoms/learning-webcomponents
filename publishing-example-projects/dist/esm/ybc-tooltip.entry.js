import { r as registerInstance, h } from './index-5e7a3f4f.js';

const tooltipCss = ":host{position:relative}:host .tooltip-icon{background:black;color:white;font-size:0.8rem;padding:0.1rem 0.32rem;margin:0 0.2rem;border-radius:50%;user-select:none}:host .tooltip-text{position:absolute;top:1.5rem;left:0;padding:0.5rem;font-size:0.8rem;background:black;color:white;border-radius:0.25rem;min-width:8rem;user-select:none;box-shadow:0 2px 8px rgba(0, 0, 0, 0.25);opacity:0;pointer-events:none;transition:opacity ease-out 0.1s}:host([open]) .tooltip-text{opacity:1;pointer-events:all}";

let Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
Tooltip.style = tooltipCss;

export { Tooltip as ybc_tooltip };
