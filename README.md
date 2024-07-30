# WebdriverIO project template:

## Quick start

#### Install the dependencies:
```bash
npm install
```

#### Execute tests:

```bash
npm test
```

#### Run tests without headless:
Mac & Linux:
```bash
HEADLESS=false npm run test
```

Windows:
```powershell
set HEALDESS=false
npm run test
```

#### Show test report:
Note: java should be installed to open generate allure report.

```bash
npm run test:show-report
```

## Page Objects

Handles interactions with the specific page/form. Example of page object:

```javascript
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
```

## Tests

Example of test with ([mocha](https://mochajs.org/)):

```javascript
import { expect } from '@wdio/globals';
import { Summary } from '../pageobjects/index.js';

describe('CV health check', () => {
  it('should render website', async () => {
    await expect(Summary.helloText).toHaveText("Hello");
  });
});
```