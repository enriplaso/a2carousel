import { A2carouselPage } from './app.po';

describe('a2carousel App', function() {
  let page: A2carouselPage;

  beforeEach(() => {
    page = new A2carouselPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
