import { AngularHome1Page } from './app.po';

describe('angular-home1 App', () => {
  let page: AngularHome1Page;

  beforeEach(() => {
    page = new AngularHome1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
