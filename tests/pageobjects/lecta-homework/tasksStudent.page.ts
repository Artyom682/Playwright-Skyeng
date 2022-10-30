import { Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { Button } from "../../locators/button";

export class TasksStudentPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get cardSelfStudy(): Button {
    return new Button(
      this.page.locator(`app-student-training-showcase .item`),
      "Card self study"
    );
  }

  get profileIconButton(): Button {
    return new Button(
      this.page.locator(`lecta-icon[name=blue-profile]`),
      "Profile icon"
    );
  }

  get logoutButton(): Button {
    return new Button(this.page.locator('[href="/logout"]'), "Logout");
  }
}
