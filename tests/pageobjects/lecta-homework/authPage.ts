import { expect, Locator, Page } from '@playwright/test';

export class AuthPage {
    readonly page: Page;
    readonly emailButton: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailButton = page.locator('button[data-link="email"]');
        this.emailField = page.locator('input[name=identifier]');
        this.passwordField = page.locator('input[name=password]');
        this.nextButton = page.locator('button[type="submit"]');
    }

    async loginProsvId(username: string, password: string): Promise<void> {
        await this.emailButton.click();
        await this.emailField.fill(username);
        await this.passwordField.fill(password);
        await this.nextButton.click();
    }

}
