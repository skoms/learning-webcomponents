class Modal extends HTMLElement {
	constructor() {
		super()
		this.isOpen = false
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.innerHTML = `
      <style>
        #backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0, 0.75);
          z-index: 10;
          opacity: 0;
          pointer-events: none;
          transition: all .15s ease-in-out;
        }

        #modal {
          position: fixed;
          top: 15vh;
          left: 25%;
          width: 50%;
          padding: 0 1rem;
          background: white;
          border-radius: 0.25rem;
          box-shadow: 0 2px 8px rgba( 0, 0, 0, 0.25);
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          pointer-events: none;
          transition: all .3s ease-in-out;
          transform: translateY(-15vh);
        }

        :host([opened]) #modal,
        :host([opened]) #backdrop {
          opacity: 1;
          pointer-events: all;
        }

        :host([opened]) #modal {
          transform: translateY(0);
        }

        header {
          padding: 1rem;
          border-bottom: 1px solid #ccc;
        }

        header ::slotted(h1) {
          margin: 0;
          font-size: 1.25rem;
        }

        main {
          padding: 1rem;
        }

        #actions {
          padding: 1rem;
          border-top: 1px solid lightgrey;
          display: flex;
          justify-content: flex-end;
        }

        #actions button {
          margin: 0 0.25rem;
        }
      </style>

      <div id="backdrop">
        
      </div>
      <div id="modal">
        <header>
          <slot name="header">Please Confirm</slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <section id="actions">
          <button id="confirm-btn">Confirm</button>
          <button id="cancel-btn">Cancel</button>
        </section>
      </div>
    `
		const slots = this.shadowRoot.querySelectorAll('slot')
		slots[1].addEventListener('slotchange', (event) => {
			console.dir(slots[1].assignedNodes())
		})
		const confirmButton = this.shadowRoot.getElementById('confirm-btn')
		const cancelButton = this.shadowRoot.getElementById('cancel-btn')

		confirmButton.addEventListener('click', this._confirm.bind(this))
		cancelButton.addEventListener('click', this._cancel.bind(this))
	}

	connectedCallback() {
		if (this.hasAttribute('opened')) {
			this.shadowRoot.host.classList.add('visible')
			this.isOpen = true
		}

		this.shadowRoot
			.querySelector('#backdrop')
			.addEventListener('click', this._cancel.bind(this))
	}

	attributeChangedCallback(name, oldVal, newVal) {
		if (oldVal === newVal) return

		if (this.hasAttribute('opened')) {
			this.isOpen = true
		} else {
			this.isOpen = false
		}
	}

	static get observedAttributes() {
		return ['opened']
	}

	disconnectedCallback() {
		this.shadowRoot
			.querySelector('#backdrop')
			.removeEventListener('click', this._cancel)
	}

	open() {
		this.setAttribute('opened', '')
		this.isOpen = true
	}

	close() {
		if (this.hasAttribute('opened')) {
			this.removeAttribute('opened')
		}
		this.isOpen = false
	}

	_confirm() {
		this.close()
		const confirmEvent = new Event('confirm')
		this.dispatchEvent(confirmEvent)
	}

	_cancel(event) {
		this.close()

		//? 'bubbles' boolean - whether or not to let event bubble up until it finds a listener
		//? 'composed' boolean - whether to let the event be emitted to the outside of the shadow dom
		const cancelEvent = new Event('cancel', { bubbles: true, composed: true })
		event.target.dispatchEvent(cancelEvent)
	}
}

customElements.define('ybc-modal', Modal)
