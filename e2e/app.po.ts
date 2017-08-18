import { browser, element, by } from 'protractor';

export class InventoryAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('in-root h1')).getText();
  }
}
