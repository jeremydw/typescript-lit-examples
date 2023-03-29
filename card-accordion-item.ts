import { customElement, property, state } from 'lit/decorators.js';
import { html, LitElement, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

@customElement('card-accordion-item')
class CardAccordionItem extends LitElement {
  @property({ type: Boolean, reflect: true })
  open: Boolean;

  @property({ type: Boolean, reflect: true })
  disabled: Boolean;

  handleClick() {
    console.log('toggle');
  }

  render() {
    return html`
        <div class=${classMap({
          container: true,
          'container--open': this.open,
        })}>
      
          <header
            role="button"
            aria-expanded=${this.open ? 'true' : 'false'}
            aria-controls="body"
            aria-disabled=${this.disabled ? 'true' : 'false'}
            tabindex=${this.disabled ? '-1' : '0'}
            @click=${this.handleClick}
          >
            <slot name="summary"></slot>
            <div>Icon</div>
          </header>
      
          <!-- Content part -->
          <div class="body">
            <slot></slot>
          </div>
      
          </div>
      `;
  }
}
