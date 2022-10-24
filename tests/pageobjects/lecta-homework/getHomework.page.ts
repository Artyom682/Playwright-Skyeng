import { Locator, Page } from '@playwright/test';

export class GetHomeworkPage {
    readonly page: Page;
    readonly loginWithProsvIdButton: Locator; // все методы локатора
    readonly startButton: Locator;
    readonly closePopUpAtStartButton: Locator;
    readonly buyingLicenseButton: Locator;
    readonly schoolAccessActivationButton: Locator;
    readonly logoutButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.loginWithProsvIdButton = page.locator('.prosv-button');
        this.startButton = page.locator('.start-button');
        this.closePopUpAtStartButton = page.locator('.close-button');
        this.buyingLicenseButton = page.locator('lecta-button', {hasText: 'Приобрести лицензию'});
        this.schoolAccessActivationButton = page.locator('lecta-button', {hasText: 'Активировать доступ от школы'});
        this.logoutButton = page.locator('[href="/logout"]');
    }
}
