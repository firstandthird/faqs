import Faqs from '../dist/faqs.js';

const setup = () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  container.innerHTML = `
    <dl data-module-animate-height="true">
      <dt>
        <button
          class="button-1"
          type="button"
          aria-expanded="false"
          aria-controls="question-1"
          data-action="toggle">Question 1?</button>
      </dt>
      <dd id="question-1" class="margin-none padding-none" aria-hidden="true">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </dd>
      <dt>
        <button
          class="button-2"
          type="button"
          aria-expanded="false"
          aria-controls="question-2"
          data-action="toggle">Question 2?</button>
      </dt>
      <dd id="question-2" class="margin-none padding-none" aria-hidden="true">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </dd>
    </dl>
  `;

  new Faqs(document.querySelector('dl'));
};

beforeAll(() => setup());

describe('Setup', () => {
  test('module instance is created', () => {
    const moduleEl = document.querySelector('dl');

    expect(moduleEl.getAttribute('data-module-uid')).toBeDefined();
  });
});

describe('Toggle', () => {
  test('button expands on click', () => {
    const toggle1 = document.querySelector('.button-1');
    toggle1.click();
    expect(toggle1.getAttribute('aria-expanded')).toBe('true');
  });
});
