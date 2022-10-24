import { Locator, Page } from '@playwright/test';
import {Button} from "../../locators/button";

export class SelectTaskPage {
    readonly page: Page;
    readonly nextButton: Locator;
    readonly createTaskFromStudent: Locator;


    constructor(page: Page) {
        this.page = page;
        this.createTaskFromStudent = page.locator('lecta-button.footer-button', {hasText: 'Создать задание'});
        this.nextButton = page.locator('lecta-button.button-next');
    }

    taskCheckboxButton(task: string): Button {
        return new Button(this.page.locator('.item-title-text', {hasText: `${task}`}), 'Correct answer');
    }

    get toLicensesButton(): Button {
        return new Button(this.page.locator('.blue-link', {hasText: 'Перейти к лицензиям'}), 'Correct answer');
    }
}
