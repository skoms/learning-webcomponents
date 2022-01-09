import { r as registerInstance, h } from './index-5e7a3f4f.js';

const sideDrawerCss = "aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background:#f3f3f3;box-shadow:0 2px 8px rgba(0, 0, 0, 0.25);transition:left ease-in-out 0.3s;z-index:100}aside header{padding:1rem;background:black;position:relative}aside header h1{font-size:1.5rem;color:white;margin:0}aside header button{position:absolute;right:0;top:0;padding:1rem;color:white;background:transparent;font-size:1.5rem;border:none}aside #tabs{display:flex;justify-content:center;width:100%;margin:1rem 0}aside #tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid black;padding:0.15rem 0}aside #tabs button.active,aside #tabs button:hover,aside #tabs button:active{background:black;color:white}aside #tabs button:focus{outline:none}aside main #contact-info{padding:0 1rem}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0, 0, 0, 0.45);z-index:10;opacity:0;pointer-events:none;transition:opacity 0.2s ease-out}:host([opened]) aside{left:0}:host([opened]) .backdrop{opacity:1;pointer-events:all}";

let SideDrawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      mainContent = (h("div", { id: "contact-info" }, h("h2", null, "Contact Information"), h("p", null, "You can react us via phone or email"), h("ul", null, h("li", null, "Phone: 8580230148232"), h("li", null, "E-mail:", ' ', h("a", { href: "mailto:something@somewhere.com" }, "Company@email.com")))));
    }
    return [
      h("div", { class: "backdrop", onClick: this.onCloseDrawer }),
      h("aside", null, h("header", null, h("h1", null, this.title), h("button", { onClick: this.onCloseDrawer }, "X")), h("section", { id: "tabs" }, h("button", { onClick: () => this.onContentChange('nav'), class: this.showContactInfo ? '' : 'active' }, "Navigation"), h("button", { onClick: () => this.onContentChange('contact'), class: !this.showContactInfo ? '' : 'active' }, "Contact")), h("main", null, mainContent)),
    ];
  }
};
SideDrawer.style = sideDrawerCss;

export { SideDrawer as ybc_side_drawer };
