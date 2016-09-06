import { GameNG2Page } from './app.po';

describe('game-ng2 App', function() {
  let page: GameNG2Page;

  beforeEach(() => {
    page = new GameNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
