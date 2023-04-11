import { h, Component, State, Prop } from '@stencil/core';

import { FloatingUI } from '../../services/libraries';

@Component({
  tag: 'bq-dropdown-panel',
  styleUrl: './scss/bq-dropdown-panel.scss',
  shadow: true,
})
export class BqDropdownPanel {
  // Own Properties
  // ====================
  private trigger: HTMLElement;
  private panel: HTMLElement;
  private floatingUI: FloatingUI;

  // Reference to host HTML element
  // ===================================

  // State() variables
  // Inlined decorator, alphabetical order
  // =======================================

  @State() private isVisible = false;

  // Public Property API
  // ========================

  // Prop lifecycle events
  // =======================

  /** Distance between dropdown panel and the trigger element */
  @Prop({ reflect: true }) distance?: number = 0;

  // Events section
  // Requires JSDocs for public API documentation
  // ==============================================

  // Component lifecycle events
  // Ordered by their natural call order
  // =====================================

  componentDidLoad() {
    this.floatingUI = new FloatingUI(this.trigger, this.panel, {
      placement: 'bottom',
      distance: this.distance,
      sameWidth: false,
      strategy: 'fixed',
      skidding: 0,
    });
  }

  disconnectedCallback() {
    this.floatingUI?.destroy();
  }

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

  private openPanel = (): void => {
    this.isVisible = !this.isVisible;
    this.floatingUI?.update();
  };

  // render() function
  // Always the last one in the class.
  // ===================================

  render() {
    return (
      <div part="base" class="bq-dropdown">
        <div ref={(el) => (this.trigger = el)} part="trigger" onClick={this.openPanel} class="bq-dropdown__trigger">
          <slot name="trigger" />
        </div>
        <ul
          aria-hidden={!this.isVisible}
          hidden={!this.isVisible}
          ref={(el) => (this.panel = el)}
          role="list"
          part="panel"
          class={{
            'bq-dropdown__panel': true,
            visible: this.isVisible,
          }}
        >
          <slot />
        </ul>
      </div>
    );
  }
}
