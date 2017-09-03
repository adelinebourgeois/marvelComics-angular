import { MarvelComicsAngularPage } from './app.po';

describe('marvel-comics-angular App', function() {
  let page: MarvelComicsAngularPage;

  beforeEach(() => {
    page = new MarvelComicsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
