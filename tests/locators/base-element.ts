import { Locator, test } from '@playwright/test';

export class BaseElement {
  protected readonly locator: Locator;
  protected readonly name: string;

  constructor(locator: Locator, name: string) {
    this.locator = locator;
    this.name = `${name}`;
  }

  get getLocator(): Locator {
    return this.locator;
  }

  get getName(): string {
    return this.name;
  }

  async getText(): Promise<string> {
    return this.locator.innerText();
  }

  async hover(): Promise<void> {
    await test.step(`Навести курсор на блок [${this.name}]`, async () => {
      await this.locator.hover();
    });
  }

  async setFocus(): Promise<void> {
    return this.locator.click();
  }
}
