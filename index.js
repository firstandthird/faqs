import Domodule from 'domodule';
import { on, once } from 'domassist';

export default class Faqs extends Domodule {
  get defaults() {
    return {
      animateHeight: false,
      closeOthers: true,
      hash: true
    };
  }

  postInit() {
    this.toggles = this.find('[data-action="toggle"]');

    if (typeof this.options.animateHeight === 'string') {
      this.options.animateHeight = this.options.animateHeight === 'true';
    }

    if (this.options.closeOthers !== 'false') {
      this.targets = [];

      this.toggles.forEach(toggle => {
        const target = this.findOne(`#${toggle.getAttribute('aria-controls')}`);

        if (!target) {
          throw new Error(`#${toggle.getAttribute('aria-controls')} is not a valid DOM element`);
        }

        this.targets.push(target);
      });
    }

    if (this.options.hash !== 'false') {
      this.onHashChange();
      on(window, 'hashchange', this.onHashChange.bind(this));
    }
  }

  /**
   * Handles URL hash change
   */
  onHashChange() {
    if (location.hash) {
      const [, id] = location.hash.split('#');
      const toggle = this.findOne(`[aria-controls=${id}`);

      if (toggle) {
        this.toggle(toggle);
      }
    }
  }

  /**
   * Switches toggle button state, collapses if expanded, and expands if collapsed
   *
   * @param {HTMLElement} toggle Toggle button
   */
  toggle(toggle) {
    const isExpanded = this.isExpanded(toggle);

    if (isExpanded) {
      this.collapse(toggle);
    } else {
      if (this.options.closeOthers !== 'false') {
        this.reset();
      }

      this.expand(toggle);
    }
  }

  /**
   * Expands element
   *
   * @param {HTMLElement} toggle Toggle button
   */
  expand(toggle) {
    const target = this.findOne(`#${toggle.getAttribute('aria-controls')}`);

    if (this.options.animateHeight) {
      const height = target.scrollHeight;
      target.style.height = `${height}px`;

      once(target, 'transitionend', () => {
        target.style.height = 'auto';
      });
    }

    toggle.setAttribute('aria-expanded', true);
    target.setAttribute('aria-hidden', false);
  }

  /**
   * Collapses element
   *
   * @param {HTMLElement} toggle Toggle button
   */
  collapse(toggle) {
    const target = this.findOne(`#${toggle.getAttribute('aria-controls')}`);

    if (this.options.animateHeight) {
      const height = target.scrollHeight;

      requestAnimationFrame(() => {
        target.style.height = `${height}px`;

        requestAnimationFrame(() => {
          target.style.height = '0';
        });
      });
    }

    target.setAttribute('aria-hidden', true);
    toggle.setAttribute('aria-expanded', false);
  }

  /**
   * Determines whether an element is expanded or not (aria-expanded attribute)
   *
   * @param {HTMLElement} el Element
   * @returns {boolean} Whether the element is expanded or not
   */
  isExpanded(el) {
    return el.getAttribute('aria-expanded') === 'true';
  }

  /**
   * Reset state, collapses open elements
   */
  reset() {
    this.toggles.forEach(toggle => this.isExpanded(toggle) && this.collapse(toggle));
  }
}

Domodule.register('Faqs', Faqs);
