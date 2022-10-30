import { Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { Button } from "../../locators/button";
import { Block } from "../../locators/block";

export class ResultPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get continueButton(): Button {
    return new Button(
      this.page.locator(`.button-continue`),
      "Button continue learning"
    );
  }

  get score(): Block {
    return new Block(this.page.locator(`.score`), "Score value");
  }
}
