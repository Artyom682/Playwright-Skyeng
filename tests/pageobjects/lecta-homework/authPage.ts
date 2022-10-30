import { Page } from "@playwright/test";
import { Button } from "../../locators/button";
import { Input } from "../../locators/input";
import { BasePage } from "../base-page";

export class AuthPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get emailButton(): Button {
    return new Button(
      this.page.locator(`button[data-link="email"]`),
      "Email button"
    );
  }

  get emailField(): Input {
    return new Input(
      this.page.locator(`input[name=identifier]`),
      "Email field"
    );
  }

  get passwordField(): Input {
    return new Input(
      this.page.locator(`input[name=password]`),
      "Password field"
    );
  }

  get nextButton(): Button {
    return new Button(
      this.page.locator(`button[type="submit"]`),
      "Next button"
    );
  }

  async loginProsvId(username: string, password: string): Promise<void> {
    await this.emailButton.click();
    await this.emailField.fill(username);
    await this.passwordField.fill(password);
    await this.nextButton.click();
  }
}
