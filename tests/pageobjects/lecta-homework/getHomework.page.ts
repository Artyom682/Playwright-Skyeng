import { Page } from "@playwright/test";
import { Button } from "../../locators/button";
import { BasePage } from "../base-page";

export class GetHomeworkPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get loginWithProsvIdButton(): Button {
    return new Button(this.page.locator(".prosv-button"), "Login with ProsvID");
  }

  get startButton(): Button {
    return new Button(this.page.locator(".start-button"), "Start");
  }

  get closePopUpAtStartButton(): Button {
    return new Button(
      this.page.locator(".close-button"),
      "Pop-up at the start homework"
    );
  }

  get buyingLicenseButton(): Button {
    return new Button(
      this.page.locator("lecta-button", { hasText: "Приобрести лицензию" }),
      "Buying license"
    );
  }

  get schoolAccessActivationButton(): Button {
    return new Button(
      this.page.locator("lecta-button", {
        hasText: "Активировать доступ от школы",
      }),
      "Buying license"
    );
  }

  async open(hwLink: string) {
    await this.page.goto(hwLink);
  }
}
