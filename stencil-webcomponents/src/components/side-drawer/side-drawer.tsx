import { Component, h, Method, Prop, State } from '@stencil/core'

@Component({
  tag: 'ybc-side-drawer',
  styleUrl: './side-drawer.sass',
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflect: true }) title: string = 'Default Title'
  @Prop({ reflect: true, mutable: true }) opened: boolean

  @State() showContactInfo: boolean = false

  onCloseDrawer = () => (this.opened = false)

  onContentChange = (content: string) => {
    this.showContactInfo = content === 'contact'
  }

  @Method()
  open() {
    this.opened = true
  }

  render() {
    let mainContent = <slot />

    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-info">
          <h2>Contact Information</h2>
          <p>You can react us via phone or email</p>
          <ul>
            <li>Phone: 8580230148232</li>
            <li>
              E-mail:{' '}
              <a href="mailto:something@somewhere.com">Company@email.com</a>
            </li>
          </ul>
        </div>
      )
    }

    return [
      <div class="backdrop" onClick={this.onCloseDrawer} />,
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer}>X</button>
        </header>
        <section id="tabs">
          <button
            onClick={() => this.onContentChange('nav')}
            class={this.showContactInfo ? '' : 'active'}
          >
            Navigation
          </button>
          <button
            onClick={() => this.onContentChange('contact')}
            class={!this.showContactInfo ? '' : 'active'}
          >
            Contact
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>,
    ]
  }
}
