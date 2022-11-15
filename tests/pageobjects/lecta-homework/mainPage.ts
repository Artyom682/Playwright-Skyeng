import { Page } from "@playwright/test";
import { Button } from "../../locators/button";
import { BasePage } from "../base-page";

export class LectaMainPage extends BasePage {
  baseURL: string | undefined;

  constructor(page: Page, baseURL: string | undefined) {
    super(page);
    this.baseURL = baseURL;
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

  async open(): Promise<void> {
    await this.page.goto("/");
  }
}
