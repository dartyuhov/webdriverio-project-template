import { expect } from '@wdio/globals';
import { Summary } from '../pageobjects/index.js';

describe('CV health check', () => {
  it('should open CV', async () => {
    await expect(Summary.helloText).toHaveText("Hello, I'm Dzmitry.");
  });
});
