import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'bq-dropdown-item',
  styleUrl: './scss/bq-dropdown-item.scss',
  shadow: true,
})
export class BqDropdownItem {
  // Own Properties
  // ====================

  // Reference to host HTML element
  // ===================================

  // State() variables
  // Inlined decorator, alphabetical order
  // =======================================

  // Public Property API
  // ========================

  // Prop lifecycle events
  // =======================

  /** If true, the dropdown item is disabled */
  @Prop({ reflect: true }) disabled?: boolean = false;

  // Events section
  // Requires JSDocs for public API documentation
  // ==============================================

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
      >
        <span part="prefix" class="bq-dropdown-item__child">
          <slot name="prefix" />
        </span>
        <span part="label" class="bq-dropdown-item__child label">
          <slot />
        </span>
        <span part="suffix" class="bq-dropdown-item__child suffix">
          <slot name="suffix" />
        </span>
      </li>
    );
  }
}
