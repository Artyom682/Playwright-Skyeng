import { Locator, Page } from '@playwright/test';

export class MainPageDirector {
    readonly page: Page;
    readonly buyingMoreLicensesButton: Locator;
    readonly closePopUpButton: Locator;
    readonly schoolName: Locator;


    constructor(page: Page, titleSchool: string, buttonName: string) {
        this.page = page;
        this.buyingMoreLicensesButton = page.locator('.buy-more-licences');
        this.closePopUpButton = page.locator('[name="close"]');
        this.schoolName = page.locator(`.auth-wrapper`, {hasText: `${titleSchool}`});
    }
}
