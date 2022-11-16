import { test as base } from "@playwright/test";
import { LectaMainPage } from "../../pageobjects/lecta-homework/mainPage";
import { AuthPage } from "../../pageobjects/lecta-homework/authPage";
import { MainPageDirector } from "../../pageobjects/lecta-homework/mainPageDirector";
import { TasksStudentPage } from "../../pageobjects/lecta-homework/tasksStudent.page";
import { ResultPage } from "../../pageobjects/lecta-homework/resultPage";
import { SelectSubjectPage } from "../../pageobjects/lecta-homework/selectSubject.page";
import { HomeworkResolvePage } from "../../pageobjects/lecta-homework/homeworkResolve.page";
import { SelectTaskPage } from "../../pageobjects/lecta-homework/selectTask.page";
import { GetHomeworkPage } from "../../pageobjects/lecta-homework/getHomework.page";
import { TasksTeacherPage } from "../../pageobjects/lecta-homework/tasksTeacher.page";
import { AuthInit } from "../../pageobjects/auth-init";

type PageFixtures = {
  authInit: AuthInit;
  lectaMainPage: LectaMainPage;
  authPage: AuthPage;
  mainPageDirector: MainPageDirector;
  tasksStudentPage: TasksStudentPage;
  resultPage: ResultPage;
  selectSubjectPage: SelectSubjectPage;
  homeworkResolvePage: HomeworkResolvePage;
  selectTaskPage: SelectTaskPage;
  getHomeworkPage: GetHomeworkPage;
  tasksTeacherPage: TasksTeacherPage;
};

export const test = base.extend<PageFixtures>({
  authInit: [
    async ({ browser }, use): Promise<void> => {
      const pageInit = await AuthInit.create(browser);
      await use(pageInit);
      await pageInit.currentPage.close();
    },
    { auto: true },
  ],

  resultPage: async ({ authInit  }, use) => {
    await use(
        new ResultPage(authInit.page)
    );
  },

  tasksTeacherPage: async ({ authInit }, use) => {
    await use(new TasksTeacherPage(authInit.page));
  },

  getHomeworkPage: async ({ authInit }, use) => {
    await use(new GetHomeworkPage(authInit.page));
  },

  selectSubjectPage: async ({ authInit }, use) => {
    await use(new SelectSubjectPage(authInit.page));
  },

  homeworkResolvePage: async ({ authInit }, use) => {
    await use(new HomeworkResolvePage(authInit.page));
  },

  selectTaskPage: async ({ authInit }, use) => {
    await use(new SelectTaskPage(authInit.page));
  },

  lectaMainPage: async ({ authInit, baseURL}, use) => {
    await use(new LectaMainPage(authInit.page, baseURL));
  },

  authPage: async ({ authInit }, use) => {
    await use(new AuthPage(authInit.page));
  },

  mainPageDirector: async ({ authInit }, use) => {
    await use(new MainPageDirector(authInit.page));
  },

  tasksStudentPage: async ({ authInit, baseURL }, use) => {
    await use(new TasksStudentPage(authInit.page, baseURL));
  },
});
