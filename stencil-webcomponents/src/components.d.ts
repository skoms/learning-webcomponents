/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface YbcSideDrawer {
        "open": () => Promise<void>;
        "opened": boolean;
        "title": string;
    }
    interface YbcSpinner {
    }
    interface YbcStockFinder {
    }
    interface YbcStockPrice {
        "stockSymbol": string;
    }
    interface YbcTooltip {
        "open": boolean;
        "tooltip": string;
    }
}
declare global {
    interface HTMLYbcSideDrawerElement extends Components.YbcSideDrawer, HTMLStencilElement {
    }
    var HTMLYbcSideDrawerElement: {
        prototype: HTMLYbcSideDrawerElement;
        new (): HTMLYbcSideDrawerElement;
    };
    interface HTMLYbcSpinnerElement extends Components.YbcSpinner, HTMLStencilElement {
    }
    var HTMLYbcSpinnerElement: {
        prototype: HTMLYbcSpinnerElement;
        new (): HTMLYbcSpinnerElement;
    };
    interface HTMLYbcStockFinderElement extends Components.YbcStockFinder, HTMLStencilElement {
    }
    var HTMLYbcStockFinderElement: {
        prototype: HTMLYbcStockFinderElement;
        new (): HTMLYbcStockFinderElement;
    };
    interface HTMLYbcStockPriceElement extends Components.YbcStockPrice, HTMLStencilElement {
    }
    var HTMLYbcStockPriceElement: {
        prototype: HTMLYbcStockPriceElement;
        new (): HTMLYbcStockPriceElement;
    };
    interface HTMLYbcTooltipElement extends Components.YbcTooltip, HTMLStencilElement {
    }
    var HTMLYbcTooltipElement: {
        prototype: HTMLYbcTooltipElement;
        new (): HTMLYbcTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "ybc-side-drawer": HTMLYbcSideDrawerElement;
        "ybc-spinner": HTMLYbcSpinnerElement;
        "ybc-stock-finder": HTMLYbcStockFinderElement;
        "ybc-stock-price": HTMLYbcStockPriceElement;
        "ybc-tooltip": HTMLYbcTooltipElement;
    }
}
declare namespace LocalJSX {
    interface YbcSideDrawer {
        "opened"?: boolean;
        "title"?: string;
    }
    interface YbcSpinner {
    }
    interface YbcStockFinder {
        "onYbcSymbolSelected"?: (event: CustomEvent<string>) => void;
    }
    interface YbcStockPrice {
        "stockSymbol"?: string;
    }
    interface YbcTooltip {
        "open"?: boolean;
        "tooltip"?: string;
    }
    interface IntrinsicElements {
        "ybc-side-drawer": YbcSideDrawer;
        "ybc-spinner": YbcSpinner;
        "ybc-stock-finder": YbcStockFinder;
        "ybc-stock-price": YbcStockPrice;
        "ybc-tooltip": YbcTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ybc-side-drawer": LocalJSX.YbcSideDrawer & JSXBase.HTMLAttributes<HTMLYbcSideDrawerElement>;
            "ybc-spinner": LocalJSX.YbcSpinner & JSXBase.HTMLAttributes<HTMLYbcSpinnerElement>;
            "ybc-stock-finder": LocalJSX.YbcStockFinder & JSXBase.HTMLAttributes<HTMLYbcStockFinderElement>;
            "ybc-stock-price": LocalJSX.YbcStockPrice & JSXBase.HTMLAttributes<HTMLYbcStockPriceElement>;
            "ybc-tooltip": LocalJSX.YbcTooltip & JSXBase.HTMLAttributes<HTMLYbcTooltipElement>;
        }
    }
}
