import type { Components, JSX } from "../types/components";

interface YbcStockPrice extends Components.YbcStockPrice, HTMLElement {}
export const YbcStockPrice: {
  prototype: YbcStockPrice;
  new (): YbcStockPrice;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
