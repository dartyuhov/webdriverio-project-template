import { expect, browser } from '@wdio/globals';
import { Header, ContactMe } from '../pageobjects/index.js';
import {
  mockEmailSendReject,
  mockEmailSendSuccess,
} from '../mocks/send-email.mock.js';

import userData from '../../resources/userData.json' assert { type: 'json' };

describe('Contact me', () => {
  it('should be able to contact me', async () => {
    await mockEmailSendSuccess();

    await Header.goTo('Contact me');

    await ContactMe.fill({
      name: 'test',
      email: 'test@test.com',
      message: 'Test message',
      subject: 'Test subject',
    });

    const notification = ContactMe.getNotification();
    await expect(notification.title).toHaveText('Sending...');
    await expect(notification.description).toHaveText(
      'Your email is on the way!',
    );
    await expect(notification.title).toHaveText('Success');
    await expect(notification.description).toHaveText(
      'Your mail has been sent! I will reach you out you as soon as possible!',
    );
  });

  it('should see error with my contact details if send email fails', async () => {
    await mockEmailSendReject();

    await Header.goTo('Contact me');

    await ContactMe.fill({
      name: 'test',
      email: 'test@test.com',
      message: 'Test message',
      subject: 'Test subject',
    });

    const notification = ContactMe.getNotification();
    await expect(notification.title).toHaveText('Sending...');
    await expect(notification.description).toHaveText(
      'Your email is on the way!',
    );
    await expect(notification.title).toHaveText('Error');
    await expect(notification.description).toHaveText(
      `Oops, something went wrong.\nYou can contact me directly at ${userData.email}`,
    );
  });

  afterEach(async () => await browser.reloadSession());
});
