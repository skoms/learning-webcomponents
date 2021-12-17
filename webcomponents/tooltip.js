class Tooltip extends HTMLElement {
	constructor() {
		super()
		this._tooltipText = 'Default tooltip text'
		this._tooltipIcon
		this._tooltipVisible = false
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.innerHTML = `
			<style>
				div {
					font-weight: normal;
					background-color: black;
					color: white;
					position: absolute;
					top: 1.5rem;
					left: 0.75rem;
					z-index: 10;
					padding: 0.25rem;
					border-radius: .25rem;
					box-shadow: rgba(0,0,0,0.25) 1px 1px 6px ;
				}

				:host {
					position: relative;
					color: var(--color-primary, white);
					background-color: var(--bg-primary, gray);
				}

				:host(.important) {
					background-color: brown;
					padding: .15rem
				}

				:host-context(p) {
					font-weight: bold;
				}

				::slotted(.highlight) {
					border-bottom: dotted 2px red;
				}

				.icon {
					background-color: blue;
					color: yellow;
					padding: .2rem .4rem;
					border-radius: 50%;
				}
			</style>

			<slot>Some Default</slot>
			<span class='icon'>?</span>
		`
	}

	connectedCallback() {
		if (this.hasAttribute('text')) {
			this._tooltipText = this.getAttribute('text')
		}

		this._tooltipIcon = this.shadowRoot.querySelector('span')
		this._tooltipIcon.addEventListener(
			'mouseenter',
			this._showTooltip.bind(this)
		)
		this._tooltipIcon.addEventListener(
			'mouseleave',
			this._hideTooltip.bind(this)
		)
		this._render()
	}

	attributeChangedCallback(name, oldVal, newVal) {
		if (oldVal === newVal) return

		if (name === 'text') {
			if (this.hasAttribute('text')) {
				this._tooltipText = this.getAttribute('text') || 'Default tooltip text'
			}
		}
	}

	static get observedAttributes() {
		return ['text']
	}

	disconnectedCallback() {
		this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip)
		this._tooltipIcon.removeEventListener('mouseleave', this._hideTooltip)
	}

	_render() {
		let tooltipContainer
		if (this._tooltipVisible) {
			tooltipContainer = document.createElement('div')
			tooltipContainer.textContent = this._tooltipText

			this.shadowRoot.appendChild(tooltipContainer)
		} else {
			tooltipContainer = this.shadowRoot.querySelector('div')
			if (tooltipContainer) {
				this.shadowRoot.removeChild(tooltipContainer)
			}
		}
	}

	_showTooltip() {
		this._tooltipVisible = true
		this._render()
	}

	_hideTooltip() {
		this._tooltipVisible = false
		this._render()
	}
}

customElements.define('ybc-tooltip', Tooltip)
