import { h, Component, Prop } from '@stencil/core'

@Component({
  tag: 'ybc-tooltip',
  styleUrl: './tooltip.sass',
  shadow: true,
})
export class Tooltip {
  @Prop({ reflect: true }) tooltip: string = 'Default tooltip text'
  @Prop({ reflect: true }) open: boolean = false

  toggleOpen = () => {
    this.open = !this.open
  }

  render() {
    return [
      <slot />,
      <span class="tooltip-icon" onClick={this.toggleOpen}>
        ?
      </span>,
      <div class="tooltip-text">{this.tooltip}</div>,
    ]
  }
}
