import { expect, browser } from '@wdio/globals';
import {
  Header,
  Projects,
  ContactMe,
  Skills,
  Summary,
  Footer,
} from '../pageobjects/index.js';

import userData from '../../resources/userData.json' assert { type: 'json' };

describe('Social links', () => {
  userData.socialLinks.forEach(({ name, link }) => {
    it(`should be able to go to '${name}' from summary`, async () => {
      await expect(Summary.getSocialLink(name)).toHaveAttribute('href', link);
    });

    it(`should be able to go to '${name}' from footer`, async () => {
      await expect(Footer.getSocialLink(name)).toHaveAttribute('href', link);
    });
  });
});

describe('Header navigation', () => {
  it('should be able to go to Skills', async () => {
    await Header.goTo('Skills');
    await expect(Skills.locator).toBeDisplayedInViewport();
  });

  it('should be able to go to My Projects', async () => {
    await Header.goTo('My Projects');
    await expect(Projects.locator).toBeDisplayedInViewport();
  });

  it('should be able to go to Contact Me', async () => {
    await Header.goTo('Contact me');
    await expect(ContactMe.locator).toBeDisplayedInViewport();
  });

  it('should be able to download cv', async () => {
    await Header.downloadCv();
    await expect(browser).toHaveUrl(/.*dartyuhov_cv_2022\.pdf.*/);
  });
});
