import { Locator, Page } from "@playwright/test";
import { Button } from "../../locators/button";
import { BasePage } from "../base-page";

export class HomeworkResolvePage extends BasePage {
  readonly closePopUpAtEndButton: Locator;

  constructor(page: Page) {
    super(page);
    this.closePopUpAtEndButton = page.locator(`lecta-dialog-view button`, {
      hasText: "Сдать учителю",
    });
  }

  correctAnswerButton(answer: string): Button {
    return new Button(
      this.page.locator(`.answer-text`, { hasText: `${answer}` }),
      "Correct answer"
    );
  }

  get endHomeworkButton(): Button {
    return new Button(
      this.page.locator(`[type="primary-yellow"]`),
      `End homework`
    );
  }
}
