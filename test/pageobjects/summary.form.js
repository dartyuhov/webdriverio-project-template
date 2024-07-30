import { $ } from '@wdio/globals';

class Summary {
  get helloText() {
    return this.locator.$('span[class^=HelloText_hello]');
  }

  async getSocialLink(socialNetwork) {
    return this.locator.$(`aria/${socialNetwork} link`);
  }

  get locator() {
    return $('[data-testid=sammary-container]');
  }
}

export default new Summary();
