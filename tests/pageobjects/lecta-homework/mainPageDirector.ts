import { Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { Button } from "../../locators/button";
import { Block } from "../../locators/block";

export class MainPageDirector extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get buyingMoreLicensesButton(): Button {
    return new Button(
      this.page.locator(".buy-more-licences"),
      "Buying more licenses"
    );
  }

  get closePopUpButton(): Button {
    return new Button(this.page.locator('[name="close"]'), "Close pop-up");
  }

  schoolName(): Block {
    return new Block(
      this.page.locator(`.auth-wrapper`, {
        hasText: "ГБОУ ЛИЦЕЙ № 126 КАЛИНИНСКОГО РАЙОНА САНКТ-ПЕТЕРБУРГА",
      }),
      "School name"
    );
  }
}
