/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TAvatarShape, TAvatarSize } from "./components/avatar/bq-avatar.types";
import { TBadgeSize } from "./components/badge/bq-badge.types";
import { TButtonAppearance, TButtonSize, TButtonType, TButtonVariant } from "./components/button/bq-button.types";
import { TIconWeight } from "./components/icon/bq-icon.types";
import { TStatusType } from "./components/status/bq-status.types";
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
    interface BqBadge {
        /**
          * Badge background color. The value should be a valid value of the palette color
         */
        "backgroundColor"?: string;
        /**
          * The size of the badge
         */
        "size"?: TBadgeSize;
        /**
          * Badge number color. The value should be a valid value of the palette color
         */
        "textColor"?: string;
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
    interface BqCheckbox {
        /**
          * If true checkbox displays background on hover
         */
        "backgroundOnHover"?: boolean;
        /**
          * If true checkbox is checked
         */
        "checked"?: boolean;
        /**
          * If true checkbox is disabled
         */
        "disabled"?: boolean;
        /**
          * The form ID that the checkbox is associated with
         */
        "formId"?: string;
        /**
          * A state that is neither checked nor unchecked
         */
        "indeterminate": false;
        /**
          * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
         */
        "name": string;
        /**
          * If `true`, it will indicate that the user must specify a value for the checkbox before the owning form can be submitted
         */
        "required"?: boolean;
        /**
          * Remove focus from the native `<input>` HTML element used under the hood. Use this method instead of the global `element.blur()`.
         */
        "vBlur": () => Promise<void>;
        /**
          * Simulate a click event on the native `<input>` HTML element used under the hood. Use this method instead of the global `element.click()`.
         */
        "vClick": () => Promise<void>;
        /**
          * Sets focus on the native `<input>` HTML element used under the hood. Use this method instead of the global `element.focus()`.
         */
        "vFocus": () => Promise<void>;
        /**
          * A string representing the value of the checkbox. Primarily used to differentiate a list of related checkboxes that have the same name.
         */
        "value": string;
    }
    interface BqIcon {
        /**
          * Set the stroke color of the SVG. The value should be a valid value of the palette color
         */
        "color"?: string;
        /**
          * Icon name to load. Please check all available icons [here](https://phosphoricons.com/)
         */
        "name": string;
        /**
          * Set the size of the SVG
         */
        "size"?: string | number;
        /**
          * It set the icon weight/style
         */
        "weight"?: TIconWeight;
    }
    interface BqStatus {
        /**
          * It defines the type of status to display
         */
        "type": TStatusType;
    }
}
export interface BqButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBqButtonElement;
}
export interface BqCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBqCheckboxElement;
}
declare global {
    interface HTMLBqAvatarElement extends Components.BqAvatar, HTMLStencilElement {
    }
    var HTMLBqAvatarElement: {
        prototype: HTMLBqAvatarElement;
        new (): HTMLBqAvatarElement;
    };
    interface HTMLBqBadgeElement extends Components.BqBadge, HTMLStencilElement {
    }
    var HTMLBqBadgeElement: {
        prototype: HTMLBqBadgeElement;
        new (): HTMLBqBadgeElement;
    };
    interface HTMLBqButtonElement extends Components.BqButton, HTMLStencilElement {
    }
    var HTMLBqButtonElement: {
        prototype: HTMLBqButtonElement;
        new (): HTMLBqButtonElement;
    };
    interface HTMLBqCheckboxElement extends Components.BqCheckbox, HTMLStencilElement {
    }
    var HTMLBqCheckboxElement: {
        prototype: HTMLBqCheckboxElement;
        new (): HTMLBqCheckboxElement;
    };
    interface HTMLBqIconElement extends Components.BqIcon, HTMLStencilElement {
    }
    var HTMLBqIconElement: {
        prototype: HTMLBqIconElement;
        new (): HTMLBqIconElement;
    };
    interface HTMLBqStatusElement extends Components.BqStatus, HTMLStencilElement {
    }
    var HTMLBqStatusElement: {
        prototype: HTMLBqStatusElement;
        new (): HTMLBqStatusElement;
    };
    interface HTMLElementTagNameMap {
        "bq-avatar": HTMLBqAvatarElement;
        "bq-badge": HTMLBqBadgeElement;
        "bq-button": HTMLBqButtonElement;
        "bq-checkbox": HTMLBqCheckboxElement;
        "bq-icon": HTMLBqIconElement;
        "bq-status": HTMLBqStatusElement;
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
    interface BqBadge {
        /**
          * Badge background color. The value should be a valid value of the palette color
         */
        "backgroundColor"?: string;
        /**
          * The size of the badge
         */
        "size"?: TBadgeSize;
        /**
          * Badge number color. The value should be a valid value of the palette color
         */
        "textColor"?: string;
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
    interface BqCheckbox {
        /**
          * If true checkbox displays background on hover
         */
        "backgroundOnHover"?: boolean;
        /**
          * If true checkbox is checked
         */
        "checked"?: boolean;
        /**
          * If true checkbox is disabled
         */
        "disabled"?: boolean;
        /**
          * The form ID that the checkbox is associated with
         */
        "formId"?: string;
        /**
          * A state that is neither checked nor unchecked
         */
        "indeterminate"?: false;
        /**
          * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
         */
        "name": string;
        /**
          * Handler to be called when the checkbox loses focus
         */
        "onBqBlur"?: (event: BqCheckboxCustomEvent<HTMLBqCheckboxElement>) => void;
        /**
          * Handler to be called when the chebkbox state changes
         */
        "onBqChange"?: (event: BqCheckboxCustomEvent<{ checked: boolean }>) => void;
        /**
          * Handler to be called when the checkbox gets focus
         */
        "onBqFocus"?: (event: BqCheckboxCustomEvent<HTMLBqCheckboxElement>) => void;
        /**
          * If `true`, it will indicate that the user must specify a value for the checkbox before the owning form can be submitted
         */
        "required"?: boolean;
        /**
          * A string representing the value of the checkbox. Primarily used to differentiate a list of related checkboxes that have the same name.
         */
        "value": string;
    }
    interface BqIcon {
        /**
          * Set the stroke color of the SVG. The value should be a valid value of the palette color
         */
        "color"?: string;
        /**
          * Icon name to load. Please check all available icons [here](https://phosphoricons.com/)
         */
        "name": string;
        /**
          * Set the size of the SVG
         */
        "size"?: string | number;
        /**
          * It set the icon weight/style
         */
        "weight"?: TIconWeight;
    }
    interface BqStatus {
        /**
          * It defines the type of status to display
         */
        "type"?: TStatusType;
    }
    interface IntrinsicElements {
        "bq-avatar": BqAvatar;
        "bq-badge": BqBadge;
        "bq-button": BqButton;
        "bq-checkbox": BqCheckbox;
        "bq-icon": BqIcon;
        "bq-status": BqStatus;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bq-avatar": LocalJSX.BqAvatar & JSXBase.HTMLAttributes<HTMLBqAvatarElement>;
            "bq-badge": LocalJSX.BqBadge & JSXBase.HTMLAttributes<HTMLBqBadgeElement>;
            "bq-button": LocalJSX.BqButton & JSXBase.HTMLAttributes<HTMLBqButtonElement>;
            "bq-checkbox": LocalJSX.BqCheckbox & JSXBase.HTMLAttributes<HTMLBqCheckboxElement>;
            "bq-icon": LocalJSX.BqIcon & JSXBase.HTMLAttributes<HTMLBqIconElement>;
            "bq-status": LocalJSX.BqStatus & JSXBase.HTMLAttributes<HTMLBqStatusElement>;
        }
    }
}
