import { Locator, test } from "@playwright/test";
import { BaseElement } from "./base-element";

export class Button extends BaseElement {
  constructor(locator: Locator, name: string) {
    super(locator, name);
  }

  async click(log = true): Promise<void> {
    if (!log) {
      await this.locator.click();
      return;
    }
    await test.step(`Нажать на кнопку [${this.name}]`, async () => {
      await this.locator.click();
    });
  }

  async forceClick(): Promise<void> {
    await test.step(`Нажать на кнопку [${this.name}]`, async () => {
      await this.locator.click();
    });
  }

  async waitUntilElementIsVisible(): Promise<void> {
    await this.locator.isVisible();
  }
}
