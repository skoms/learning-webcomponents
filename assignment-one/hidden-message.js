class HiddenMessage extends HTMLElement {
	constructor() {
		super()
		this.isHidden = true
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.innerHTML = `
      <style>
        p {
          display: none;
        }
      </style>

      <button>Show</button>
      <p><slot></slot></p>
    `
	}

	connectedCallback() {
		if (this.hasAttribute('isHidden')) {
			this.isHidden = this.getAttribute('isHidden') === 'true'
			if (!this.isHidden) {
				this.shadowRoot.querySelector('p').style.display = 'block'
				this.shadowRoot.querySelector('button').textContent = 'Hide'
			}
		}

		const button = this.shadowRoot.querySelector('button')
		const infoEl = this.shadowRoot.querySelector('p')

		button.addEventListener('click', () => {
			if (this.isHidden) {
				infoEl.style.display = 'block'
				button.textContent = 'Hide'
				this.isHidden = false
			} else {
				infoEl.style.display = 'none'
				button.textContent = 'Show'
				this.isHidden = true
			}
		})
	}
}

customElements.define('ybc-hidden-message', HiddenMessage)
