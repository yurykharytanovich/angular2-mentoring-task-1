import { Angularq12341Page } from './app.po';

describe('angularq12341 App', function() {
  let page: Angularq12341Page;

  beforeEach(() => {
    page = new Angularq12341Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
