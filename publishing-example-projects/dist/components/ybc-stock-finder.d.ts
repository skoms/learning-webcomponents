import type { Components, JSX } from "../types/components";

interface YbcStockFinder extends Components.YbcStockFinder, HTMLElement {}
export const YbcStockFinder: {
  prototype: YbcStockFinder;
  new (): YbcStockFinder;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
