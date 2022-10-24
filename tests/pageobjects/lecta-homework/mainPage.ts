import { Locator, Page } from '@playwright/test';

export class LectaMainPage {
    readonly page: Page;
    readonly authRegButton: Locator;
    readonly authRegButtonForDirector: Locator;

    constructor(page: Page) {
        this.page = page;
        this.authRegButton = page.locator('.prosv-button', { hasText: `Вход / Регистрация` });
        this.authRegButtonForDirector = page.locator('.prosv-button', { hasText: `Вход для администрации школы` });
    }

    async goto() {
        await this.page.goto("https://hw.lecta.ru/");
    }

}
