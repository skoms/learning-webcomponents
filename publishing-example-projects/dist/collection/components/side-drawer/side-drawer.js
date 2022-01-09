import { Component, h, Method, Prop, State } from '@stencil/core';
export class SideDrawer {
  constructor() {
    this.title = 'Default Title';
    this.showContactInfo = false;
    this.onCloseDrawer = () => (this.opened = false);
    this.onContentChange = (content) => {
      this.showContactInfo = content === 'contact';
    };
  }
  open() {
    this.opened = true;
  }
  render() {
    let mainContent = h("slot", null);
    if (this.showContactInfo) {
      mainContent = (h("div", { id: "contact-info" },
        h("h2", null, "Contact Information"),
        h("p", null, "You can react us via phone or email"),
        h("ul", null,
          h("li", null, "Phone: 8580230148232"),
          h("li", null,
            "E-mail:",
            ' ',
            h("a", { href: "mailto:something@somewhere.com" }, "Company@email.com")))));
    }
    return [
      h("div", { class: "backdrop", onClick: this.onCloseDrawer }),
      h("aside", null,
        h("header", null,
          h("h1", null, this.title),
          h("button", { onClick: this.onCloseDrawer }, "X")),
        h("section", { id: "tabs" },
          h("button", { onClick: () => this.onContentChange('nav'), class: this.showContactInfo ? '' : 'active' }, "Navigation"),
          h("button", { onClick: () => this.onContentChange('contact'), class: !this.showContactInfo ? '' : 'active' }, "Contact")),
        h("main", null, mainContent)),
    ];
  }
  static get is() { return "ybc-side-drawer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./side-drawer.sass"]
  }; }
  static get styleUrls() { return {
    "$": ["side-drawer.css"]
  }; }
  static get properties() { return {
    "title": {
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
      "attribute": "title",
      "reflect": true,
      "defaultValue": "'Default Title'"
    },
    "opened": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "opened",
      "reflect": true
    }
  }; }
  static get states() { return {
    "showContactInfo": {}
  }; }
  static get methods() { return {
    "open": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {},
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
