import { $, browser } from '@wdio/globals';

class Header {
  async goTo(linkName) {
    await this.locator.$(`button=${linkName}`).click();
  }

  async downloadCv() {
    await this.locator.$('aria/Download CV').click();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[handles.length - 1]);
  }

  get locator() {
    return $('header');
  }
}

export default new Header();
