import { $, browser } from 'protractor';

describe('Angular Buch', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));

  it('should be called Angular', () => {

    browser.get('https://www.dpunkt.de/buecher/13231.html');
    const text = $('.detail_title').getText();

    expect(text).toContain('Angular');
    expect(text).not.toContain('AngularJS');
  });


  it('should have a ranking smaller than 20', async () => {

    browser.get('https://www.amazon.de/Angular-Grundlagen-fortgeschrittene-Practices-NativeScript/dp/3864906466/');
    const ranking = $('.zg_hrsr_rank');

    const text = await ranking.getText();
    const numberAsString = text.replace('Nr. ', '');
    const nr = parseInt(numberAsString, 10);
    console.log('Ranking: ', nr);
    expect(nr).toBeLessThanOrEqual(40);
  });

  afterAll(() => browser.waitForAngularEnabled(true));

});
