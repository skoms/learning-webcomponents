import { Component, h } from "@stencil/core";
export class Spinner {
  render() {
    return (h("div", { class: "lds-ring" },
      h("div", null),
      h("div", null),
      h("div", null),
      h("div", null)));
  }
  static get is() { return "ybc-spinner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./spinner.sass"]
  }; }
  static get styleUrls() { return {
    "$": ["spinner.css"]
  }; }
}
