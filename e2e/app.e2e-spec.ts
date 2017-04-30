import { TeaPage } from './app.po';

describe('tea App', () => {
  let page: TeaPage;

  beforeEach(() => {
    page = new TeaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
