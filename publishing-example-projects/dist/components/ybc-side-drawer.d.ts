import type { Components, JSX } from "../types/components";

interface YbcSideDrawer extends Components.YbcSideDrawer, HTMLElement {}
export const YbcSideDrawer: {
  prototype: YbcSideDrawer;
  new (): YbcSideDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
