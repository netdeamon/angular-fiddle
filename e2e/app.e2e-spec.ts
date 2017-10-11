import { CoderunPage } from './app.po';

describe('coderun App', () => {
  let page: CoderunPage;

  beforeEach(() => {
    page = new CoderunPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
