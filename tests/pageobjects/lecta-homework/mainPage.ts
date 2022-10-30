import { Page } from "@playwright/test";
import { Button } from "../../locators/button";
import { BasePage } from "../base-page";

export class LectaMainPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  authRegButton(): Button {
    return new Button(
      this.page.locator(`.prosv-button`, { hasText: `Вход / Регистрация` }),
      "Authorization or registration"
    );
  }

  authRegButtonForDirector(): Button {
    return new Button(
      this.page.locator(`.prosv-button`, {
        hasText: `Вход для администрации школы`,
      }),
      "Authorization director"
    );
  }

  async goto() {
    await this.page.goto("https://hw.lecta.ru/");
  }
}
