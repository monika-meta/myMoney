import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/watch');
    });
    it('should have a title saying watch', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('Watch');
      });
    });
  });
});
