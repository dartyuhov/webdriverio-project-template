import { $ } from '@wdio/globals';

class Projects {
  async getAllProjectNames() {
    return this.locator.$$('aria/Project name').mapSeries((el) => el.getText());
  }

  get locator() {
    return $('#projects');
  }
}

export default new Projects();
