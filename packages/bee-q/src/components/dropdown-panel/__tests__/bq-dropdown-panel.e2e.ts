import { newE2EPage } from '@stencil/core/testing';

describe('bq-dropdown-panel', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<bq-dropdown-panel></bq-dropdown-panel>');

    const element = await page.find('bq-dropdown-panel');

    expect(element).toHaveClass('hydrated');
  });

  it('should have shadow root', async () => {
    const page = await newE2EPage();
    await page.setContent('<bq-dropdown-panel></bq-dropdown-panel>');

    const element = await page.find('bq-dropdown-panel');

    expect(element.shadowRoot).not.toBeNull();
  });

  it('should display text', async () => {
    const page = await newE2EPage();
    await page.setContent('<bq-dropdown-panel></bq-dropdown-panel>');

    const element = await page.find('bq-dropdown-panel >>> p');

    expect(element).toEqualText('My name is Stencil');
  });
});
