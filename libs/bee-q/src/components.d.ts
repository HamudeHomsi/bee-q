/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TButtonAppearance, TButtonSize, TButtonType, TButtonVariant } from "./components/button/bq-button.types";
export namespace Components {
    interface BqAvatar {
        /**
          * The image source to load on the avatar (this can be also a base64 encoded image)
         */
        "image": string;
        /**
          * The text to display on avatar
         */
        "initials": string;
        /**
          * A text to use for describing the avatar on assistive devices
         */
        "label": string;
        /**
          * The shape of the avatar
         */
        "shape": TAvatarShape;
        /**
          * The size of the avatar
         */
        "size": TAvatarSize;
    }
    interface BqButton {
        /**
          * The appearance style to apply to the button
         */
        "appearance": TButtonAppearance;
        /**
          * If true, the button will be disabled (no interaction allowed)
         */
        "disabled": boolean;
        /**
          * Tells the browser to treat the linked URL as a download. Only used when `href` is set. Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download
         */
        "download"?: string;
        /**
          * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`
         */
        "href": string;
        /**
          * If `true` it will display the button in a loading state
         */
        "loading": boolean;
        /**
          * The size of the button
         */
        "size": TButtonSize;
        /**
          * Where to display the linked URL, as the name for a browsing context (a `tab`, `window`, or `<iframe>`) Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
         */
        "target": '_blank' | '_parent' | '_self' | '_top';
        /**
          * The default behavior of the button
         */
        "type": TButtonType;
        /**
          * The variant of button to apply on top of the appearance
         */
        "variant": TButtonVariant;
    }
    interface BqIcon {
        /**
          * Set the stroke color of the SVG. The value should be a valid value of the palette color
         */
        "color": string;
        /**
          * Icon name to load. Please check all available icons [here](https://phosphoricons.com/)
         */
        "name": string;
        /**
          * Set the size of the SVG
         */
        "size": string | number;
        /**
          * It set the icon weight/style
         */
        "weight": TIconWeight;
    }
}
export interface BqButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBqButtonElement;
}
declare global {
    interface HTMLBqAvatarElement extends Components.BqAvatar, HTMLStencilElement {
    }
    var HTMLBqAvatarElement: {
        prototype: HTMLBqAvatarElement;
        new (): HTMLBqAvatarElement;
    };
    interface HTMLBqButtonElement extends Components.BqButton, HTMLStencilElement {
    }
    var HTMLBqButtonElement: {
        prototype: HTMLBqButtonElement;
        new (): HTMLBqButtonElement;
    };
    interface HTMLBqIconElement extends Components.BqIcon, HTMLStencilElement {
    }
    var HTMLBqIconElement: {
        prototype: HTMLBqIconElement;
        new (): HTMLBqIconElement;
    };
    interface HTMLElementTagNameMap {
        "bq-avatar": HTMLBqAvatarElement;
        "bq-button": HTMLBqButtonElement;
        "bq-icon": HTMLBqIconElement;
    }
}
declare namespace LocalJSX {
    interface BqAvatar {
        /**
          * The image source to load on the avatar (this can be also a base64 encoded image)
         */
        "image"?: string;
        /**
          * The text to display on avatar
         */
        "initials"?: string;
        /**
          * A text to use for describing the avatar on assistive devices
         */
        "label"?: string;
        /**
          * The shape of the avatar
         */
        "shape"?: TAvatarShape;
        /**
          * The size of the avatar
         */
        "size"?: TAvatarSize;
    }
    interface BqButton {
        /**
          * The appearance style to apply to the button
         */
        "appearance"?: TButtonAppearance;
        /**
          * If true, the button will be disabled (no interaction allowed)
         */
        "disabled"?: boolean;
        /**
          * Tells the browser to treat the linked URL as a download. Only used when `href` is set. Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download
         */
        "download"?: string;
        /**
          * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`
         */
        "href"?: string;
        /**
          * If `true` it will display the button in a loading state
         */
        "loading"?: boolean;
        /**
          * Handler to be called when the button loses focus
         */
        "onBqBlur"?: (event: BqButtonCustomEvent<HTMLBqButtonElement>) => void;
        /**
          * Handler to be called when button gets focus
         */
        "onBqClick"?: (event: BqButtonCustomEvent<HTMLBqButtonElement>) => void;
        /**
          * Handler to be called when the button is clicked
         */
        "onBqFocus"?: (event: BqButtonCustomEvent<HTMLBqButtonElement>) => void;
        /**
          * The size of the button
         */
        "size"?: TButtonSize;
        /**
          * Where to display the linked URL, as the name for a browsing context (a `tab`, `window`, or `<iframe>`) Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
         */
        "target"?: '_blank' | '_parent' | '_self' | '_top';
        /**
          * The default behavior of the button
         */
        "type"?: TButtonType;
        /**
          * The variant of button to apply on top of the appearance
         */
        "variant"?: TButtonVariant;
    }
    interface BqIcon {
        /**
          * Set the stroke color of the SVG. The value should be a valid value of the palette color
         */
        "color"?: string;
        /**
          * Icon name to load. Please check all available icons [here](https://phosphoricons.com/)
         */
        "name"?: string;
        /**
          * Set the size of the SVG
         */
        "size"?: string | number;
        /**
          * It set the icon weight/style
         */
        "weight"?: TIconWeight;
    }
    interface IntrinsicElements {
        "bq-avatar": BqAvatar;
        "bq-button": BqButton;
        "bq-icon": BqIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bq-avatar": LocalJSX.BqAvatar & JSXBase.HTMLAttributes<HTMLBqAvatarElement>;
            "bq-button": LocalJSX.BqButton & JSXBase.HTMLAttributes<HTMLBqButtonElement>;
            "bq-icon": LocalJSX.BqIcon & JSXBase.HTMLAttributes<HTMLBqIconElement>;
        }
    }
}
