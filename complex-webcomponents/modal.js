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
        }

        #modal {
          position: fixed;
          top: 15vh;
          left: 25%;
          width: 50%;
          padding: 1rem;
          background: white;
          border-radius: 0.25rem;
          box-shadow: 0 2px 8px rgba( 0, 0, 0, 0.25);
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          pointer-events: none;
        }

        :host([opened]) #modal,
        :host([opened]) #backdrop {
          opacity: 1;
          pointer-events: all;
        }

        header {
          padding: 1rem;
        }

        header h1 {
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
          <h1>Please Confirm</h1>
        </header>
        <main>
          <slot></slot>
        </main>
        <section id="actions">
          <button>Confirm</button>
          <button>Cancel</button>
        </section>
      </div>
    `
	}

	connectedCallback() {
		if (this.hasAttribute('opened')) {
			this.shadowRoot.host.classList.add('visible')
			this.isOpen = true
		}

		this.shadowRoot.querySelectorAll('button').forEach((button) => {
			button.addEventListener('click', this.close.bind(this))
		})
		this.shadowRoot
			.querySelector('#backdrop')
			.addEventListener('click', this.close.bind(this))
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
		this.shadowRoot.querySelectorAll('button').forEach((button) => {
			button.removeEventListener('click', this.close)
		})
		this.shadowRoot
			.querySelector('#backdrop')
			.removeEventListener('click', this.close)
	}

	open() {
		this.setAttribute('opened', '')
	}

	close() {
		this.removeAttribute('opened')
	}
}

customElements.define('ybc-modal', Modal)
