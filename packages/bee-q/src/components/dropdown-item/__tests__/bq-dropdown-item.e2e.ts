import { newE2EPage } from '@stencil/core/testing';

describe('bq-dropdown-item', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<bq-dropdown-item></bq-dropdown-item>');

    const element = await page.find('bq-dropdown-item');

    expect(element).toHaveClass('hydrated');
  });

  it('should have shadow root', async () => {
    const page = await newE2EPage();
    await page.setContent('<bq-dropdown-item></bq-dropdown-item>');

    const element = await page.find('bq-dropdown-item');

    expect(element.shadowRoot).not.toBeNull();
  });

  it('should display text', async () => {
    const page = await newE2EPage();
    await page.setContent('<bq-dropdown-item></bq-dropdown-item>');

    const element = await page.find('bq-dropdown-item >>> p');

    expect(element).toEqualText('My name is Stencil');
  });
});
