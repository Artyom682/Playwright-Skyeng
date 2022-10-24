import { Locator, Page } from '@playwright/test';

export class ResultPage {
    readonly page: Page;
    readonly continueButton: Locator;
    readonly score: Locator;


    constructor(page: Page, value: number) {
        this.page = page;
        this.continueButton = page.locator(`.button-continue`);
        this.score = page.locator('.score', { hasText: `${value}`});
    }
}
