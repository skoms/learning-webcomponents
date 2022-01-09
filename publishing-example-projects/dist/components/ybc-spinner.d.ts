import type { Components, JSX } from "../types/components";

interface YbcSpinner extends Components.YbcSpinner, HTMLElement {}
export const YbcSpinner: {
  prototype: YbcSpinner;
  new (): YbcSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
