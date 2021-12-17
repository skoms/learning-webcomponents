class ConfirmLink extends HTMLAnchorElement {
	connectedCallback() {
		this.addEventListener('click', (e) => {
			if (!confirm('Do you really want to leave?')) {
				e.preventDefault()
			}
		})
	}
}

customElements.define('ybc-confirm-link', ConfirmLink, { extends: 'a' })
