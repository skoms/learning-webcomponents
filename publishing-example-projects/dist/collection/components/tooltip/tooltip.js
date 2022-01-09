import { h, Component, Prop } from '@stencil/core';
export class Tooltip {
  constructor() {
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
  static get is() { return "ybc-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./tooltip.sass"]
  }; }
  static get styleUrls() { return {
    "$": ["tooltip.css"]
  }; }
  static get properties() { return {
    "tooltip": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "tooltip",
      "reflect": true,
      "defaultValue": "'Default tooltip text'"
    },
    "open": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "open",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
