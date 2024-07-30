import { expect } from '@wdio/globals';
import { Header, Skills } from '../pageobjects/index.js';

import skillsData from '../../resources/skills.json' assert { type: 'json' };

describe('My Skills', () => {
  skillsData.forEach(({ name }) => {
    it(`should show ${name} skills`, async () => {
      await Header.goTo('Skills');
      await expect(Skills.getSkillSlide(name)).toBeDisplayedInViewport();
    });
  });
});
