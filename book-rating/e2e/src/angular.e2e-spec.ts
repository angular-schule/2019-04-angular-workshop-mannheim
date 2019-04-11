import { $, browser } from 'protractor';

describe('Angular Buch', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));

  it('should be called Angular', () => {

    browser.get('https://www.dpunkt.de/buecher/13231.html');
    const text = $('.detail_title').getText();

    expect(text).toContain('Angular');
    expect(text).not.toContain('AngularJS');
  });

  afterAll(() => browser.waitForAngularEnabled(true));

});
