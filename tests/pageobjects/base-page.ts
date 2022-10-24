import { Page, test } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async reload(): Promise<void> {
    await test.step(`Перезагрузить страницу`, async () => {
      await this.page.reload();
    });
  }

  async clearCookies(): Promise<void> {
    await test.step(`Очистить Cookies страницы`, async () => {
      await this.page.context().clearCookies();
    });
  }
}
