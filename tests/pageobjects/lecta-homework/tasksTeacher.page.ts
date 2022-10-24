import { Locator, Page } from '@playwright/test';

export class TasksTeacherPage {
    readonly page: Page;
    readonly profileIconButton: Locator; // все методы локатора
    readonly logoutButton: Locator;
    readonly createTaskButton: Locator;
    readonly homeworkLink: Locator;
    readonly titleHomework: Locator;
    readonly nextButton: Locator;
    readonly scoreInTeacherCabinet: Locator;


    constructor(page: Page, value: number) {
        this.page = page;
        this.profileIconButton = page.locator('lecta-button.user');
        this.logoutButton = page.locator('[href="/logout"]');
        this.createTaskButton = page.locator('[data-qa="create-hw-btn"]');
        this.homeworkLink = page.locator('[data-qa="homework-link"]');
        this.titleHomework = page.locator(`.subtitle`);
        this.nextButton = page.locator('lecta-button.button-next')
        this.scoreInTeacherCabinet = page.locator(('.value'), {hasText: `${value}`})
}}
