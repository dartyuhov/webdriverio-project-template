import { $, browser } from '@wdio/globals';

class ContactMe {
  get locator() {
    return $('aria/Contact me');
  }

  async fill(data) {
    const yourName = $('aria/Your Name: *');
    await yourName.waitUntil(async function () {
      return await this.isDisplayedInViewport();
    });
    await yourName.setValue(data.name);
    await $('aria/Your Email: *').setValue(data.email);
    await $('aria/Subject: *').setValue(data.subject);
    await $('aria/Message: *').setValue(data.message);
    await $('aria/Submit').click();
  }

  getNotification() {
    return {
      title: $('[role=alert]').$('.mantine-Notification-title'),
      description: $('[role=alert]').$('.mantine-Notification-description'),
    };
  }
}

export default new ContactMe();
