import { h, Component, Prop, State, Element, EventEmitter, Event } from '@stencil/core';

import { hasSlotContent } from '../../shared/utils';

@Component({
  tag: 'bq-dropdown-item',
  styleUrl: './scss/bq-dropdown-item.scss',
  shadow: true,
})
export class BqDropdownItem {
  // Own Properties
  // ====================

  private prefixElem: HTMLElement;

  // Reference to host HTML element
  // ===================================

  @Element() el!: HTMLBqDropdownItemElement;

  // State() variables
  // Inlined decorator, alphabetical order
  // =======================================

  @State() hasPrefix = false;

  // Public Property API
  // ========================

  // Prop lifecycle events
  // =======================

  /** If true, the dropdown item is disabled */
  @Prop({ reflect: true }) disabled?: boolean = false;

  // Events section
  // Requires JSDocs for public API documentation
  // ==============================================

  /** Handler to be called when item loses focus */
  @Event() bqDropdownItemBlur: EventEmitter<HTMLBqDropdownItemElement>;

  /** Handler to be called when item is focused */
  @Event() bqDropdownItemFocus: EventEmitter<HTMLBqDropdownItemElement>;

  /** Handler to be called when item is clicked */
  @Event() bqDropdownItemClick: EventEmitter<HTMLBqDropdownItemElement>;

  // Component lifecycle events
  // Ordered by their natural call order
  // =====================================

  // Listeners
  // ==============

  // Public methods API
  // These methods are exposed on the host element.
  // Always use two lines.
  // Public Methods must be async.
  // Requires JSDocs for public API documentation.
  // ===============================================

  // Local methods
  // Internal business logic.
  // These methods cannot be called from the host element.
  // =======================================================

  private onBlur = () => {
    this.bqDropdownItemBlur.emit(this.el);
  };

  private onFocus = () => {
    this.bqDropdownItemFocus.emit(this.el);
  };

  private onClick = (event: Event) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.bqDropdownItemClick.emit(this.el);
  };

  private onSlotChange = () => {
    this.hasPrefix = hasSlotContent(this.prefixElem, 'prefix');
  };

  // render() function
  // Always the last one in the class.
  // ===================================

  render() {
    return (
      <li
        class={{
          'bq-dropdown-item': true,
          group: true,
          disabled: this.disabled,
        }}
        aria-role="listitem"
        tabindex={this.disabled ? '-1' : '0'}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onClick={this.onClick}
      >
        <span class="bq-dropdown-item__child" ref={(elem) => (this.prefixElem = elem)} part="prefix">
          <slot name="prefix" onSlotchange={this.onSlotChange} />
        </span>
        <span
          class={{
            'bq-dropdown-item__child': true,
            label: true,
            'has-prefix': this.hasPrefix,
          }}
          part="label"
        >
          <slot />
        </span>
        <span class="bq-dropdown-item__child suffix" part="suffix">
          <slot name="suffix" />
        </span>
      </li>
    );
  }
}
