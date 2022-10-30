import { Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { Button } from "../../locators/button";
import { Block } from "../../locators/block";

export class TasksTeacherPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  get profileIconButton(): Button {
    return new Button(this.page.locator(`lecta-button.user`), "Profile icon");
  }

  get logoutButton(): Button {
    return new Button(this.page.locator('[href="/logout"]'), "Logout");
  }

  get createTaskButton(): Button {
    return new Button(
      this.page.locator('[data-qa="create-hw-btn"]'),
      `Create task`
    );
  }

  get homeworkLink(): Block {
    return new Block(
      this.page.locator(`[data-qa="homework-link"]`),
      `Homework link`
    );
  }

  get scoreInTeacherCabinet(): Block {
    return new Block(
      this.page.locator(".value", { hasText: "100" }),
      "Score in teacher cabinet"
    );
  }
}
