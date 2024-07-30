import { $ } from '@wdio/globals';

class Footer {
  async getSocialLink(socialNetwork) {
    return this.locator.$(`aria/${socialNetwork} link`);
  }

  async downloadCv() {
    await this.locator.$('aria/Download CV').click();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[handles.length - 1]);
  }

  get locator() {
    return $('aria/Footer');
  }
}

export default new Footer();
