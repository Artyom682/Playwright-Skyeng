import { Locator, Page } from '@playwright/test';
import {Button} from "../../locators/button";
import {Block} from "../../locators/block";

export class SelectSubjectPage {
    readonly page: Page;
    readonly goToTasksButton: Locator; // все методы локатора
    readonly workbookButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.goToTasksButton = page.locator('lecta-button.button-steps');
        this.workbookButton = page.locator('[data-qa="workbook-item"]');
    }

    classNumberButton(classNumber: number): Button {
        return new Button(this.page.locator(`lecta-tab`, {hasText: `${classNumber}`}), 'Class number');
    }

    subjectCardButton(subjectTitle: string): Button {

        return new Button(this.page.locator(`.subject-title`, {hasText: `${subjectTitle}`}), 'Subject card');
    }

    subjectCardWithLockIconButton(subject: string): Block {
        return new Block(this.page.locator(`//*[contains(text(), ${subject})]/following-sibling::*[contains(@class, "lock-icon-block")]`), 'subject name');
    }
}
