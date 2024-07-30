import { $ } from '@wdio/globals';

class Skills {
  getSkillSlide(name) {
    return this.locator.$(`aria/skill ${name}`);
  }

  get locator() {
    return $('aria/Skills carousel');
  }
}

export default new Skills();
