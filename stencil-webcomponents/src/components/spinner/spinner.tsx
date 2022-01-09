import { Component, h } from "@stencil/core";

@Component({
  tag: 'ybc-spinner',
  styleUrl: './spinner.sass',
  shadow: true
})
export class Spinner {
  render() {
    return (
      <div class="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    )
  }
}