import { Page } from "@playwright/test";
import { Button } from "../../locators/button";
import { BasePage } from "../base-page";

export class SelectTaskPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  taskCheckboxButton(task: string): Button {
    return new Button(
      this.page.locator(".item-title-text", { hasText: `${task}` }),
      "Task checkbox"
    );
  }

  createTaskFromStudent(): Button {
    return new Button(
      this.page.locator("lecta-button.footer-button", {
        hasText: "Создать задание",
      }),
      "Create task"
    );
  }

  get toLicensesButton(): Button {
    return new Button(
      this.page.locator(".blue-link", { hasText: "Перейти к лицензиям" }),
      "To licensesButton"
    );
  }

  get nextButton(): Button {
    return new Button(
      this.page.locator("lecta-button.button-next"),
      "Next button"
    );
  }
}
