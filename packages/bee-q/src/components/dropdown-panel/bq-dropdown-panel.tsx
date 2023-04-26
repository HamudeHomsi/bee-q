import { h, Component, State, Prop, Listen, Event, EventEmitter, Element } from '@stencil/core';

import { FloatingUI } from '../../services/libraries';
import { FloatingUIPlacement } from '../../services/interfaces';

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

  @Element() el!: HTMLBqDropdownPanelElement;

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

  /** Position of the panel */
  @Prop({ reflect: true }) placement?: FloatingUIPlacement = 'bottom';

  // Events section
  // Requires JSDocs for public API documentation
  // ==============================================

  /** Handler to be called when the item loses focus */
  @Event() bqBlur: EventEmitter<HTMLBqDropdownPanelElement>;

  /** Handler to be called when the item gets focus */
  @Event() bqFocus: EventEmitter<HTMLBqDropdownPanelElement>;

  /** Handler to be called when item is clicked or on Enter key press */
  @Event() bqSelect: EventEmitter<HTMLBqDropdownPanelElement>;

  // Component lifecycle events
  // Ordered by their natural call order
  // =====================================

  componentDidLoad() {
    this.floatingUI = new FloatingUI(this.trigger, this.panel, {
      placement: this.placement,
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

  @Listen('bqDropdownItemBlur')
  bqDropdownItemBlur(event: CustomEvent<HTMLBqDropdownItemElement>) {
    this.bqBlur.emit(event.detail);
  }

  @Listen('bqDropdownItemFocus')
  bqDropdownItemFocus(event: CustomEvent<HTMLBqDropdownItemElement>) {
    this.bqFocus.emit(event.detail);
  }

  @Listen('bqDropdownItemClick')
  @Listen('bqDropdownItemOnEnter')
  bqDropdownItemOnSelect(event: CustomEvent<HTMLBqDropdownItemElement>) {
    this.bqSelect.emit(event.detail);
    this.isVisible = false;
  }

  /** On click outside the panel */
  @Listen('click', { target: 'document' })
  onClickOutsidePanel(event: MouseEvent) {
    if (!event.composedPath().includes(this.el)) {
      this.isVisible = false;
    }
  }

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
      <div class="bq-dropdown" part="base">
        <div class="bq-dropdown__trigger" ref={(el) => (this.trigger = el)} part="trigger" onClick={this.openPanel}>
          <slot name="trigger" />
        </div>
        <ul
          class={{
            'bq-dropdown__panel': true,
            visible: this.isVisible,
          }}
          aria-hidden={!this.isVisible}
          hidden={!this.isVisible}
          ref={(el) => (this.panel = el)}
          role="list"
          part="panel"
        >
          <slot />
        </ul>
      </div>
    );
  }
}
