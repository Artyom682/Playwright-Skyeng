import { Page } from "@playwright/test";
import { Button } from "../../locators/button";
import { BasePage } from "../base-page";

export class HomeworkResolvePage extends BasePage {
  constructor(page: Page) {
    super(page);
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

  get closePopUpAtEndButton(): Button {
    return new Button(
      this.page.locator(`lecta-dialog-view button`, {
        hasText: "Сдать учителю",
      }),
      `End homework`
    );
  }
}
