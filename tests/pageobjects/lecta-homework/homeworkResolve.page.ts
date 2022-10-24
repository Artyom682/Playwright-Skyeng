import { Locator, Page } from '@playwright/test';
import {Button} from "../../locators/button";

export class HomeworkResolvePage {
    readonly page: Page;
    readonly endHomeworkButton: Locator;
    readonly closePopUpAtEndButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.endHomeworkButton = page.locator('[type="primary-yellow"]');
        this.closePopUpAtEndButton = page.locator(`lecta-dialog-view button`, {hasText: 'Сдать учителю'});
    }

    correctAnswerButton(answer: string): Button {
        return new Button(this.page.locator(`.answer-text`, {hasText: `${answer}`}), 'Correct answer');
    }
}
