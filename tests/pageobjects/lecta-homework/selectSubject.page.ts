import { Page } from "@playwright/test";
import { Button } from "../../locators/button";
import { Block } from "../../locators/block";
import { BasePage } from "../base-page";

export class SelectSubjectPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get goToTasksButton(): Button {
    return new Button(
        this.page.locator(`lecta-button.button-steps`),
        "Go to tasks"
    );
  }

  classNumberButton(classNumber: number): Button {
    return new Button(
        this.page.locator(`lecta-tab`, {hasText: `${classNumber}`}),
        "Class number"
    );
  }

  subjectCardButton(subjectTitle: string): Button {
    return new Button(
        this.page.locator(`.subject-title`, {hasText: `${subjectTitle}`}),
        "Subject card"
    );
  }

  subjectCardWithLockIconButton(subject: string): Block {
    return new Block(this.page.locator('.subject')
        .filter({has: this.page.getByText(subject)})
        .filter({has: this.page.locator('.lock-icon')}),
        "subject name");
  }
}
