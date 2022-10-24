import { Locator, Page } from '@playwright/test';

export class TasksStudentPage {
    readonly page: Page;
    readonly cardSelfStudy: Locator;
    readonly profileIconButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cardSelfStudy = page.locator('app-student-training-showcase .item');
        this.profileIconButton = page.locator(`lecta-icon[name=blue-profile]`); // вот эти можно вывести в отдельный page, т.к. они повторяются в каждом лк
        this.logoutButton = page.locator(`[href="/logout"]`); // вот эти можно вывести в отдельный page, т.к. они повторяются в каждом лк
    }
}
