import type { Components, JSX } from "../types/components";

interface YbcTooltip extends Components.YbcTooltip, HTMLElement {}
export const YbcTooltip: {
  prototype: YbcTooltip;
  new (): YbcTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
