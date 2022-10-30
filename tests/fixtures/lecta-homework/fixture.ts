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

type PageFixtures = {
  lectaMainPage: LectaMainPage;
  authPage: AuthPage;
  mainPageDirector: MainPageDirector;
  tasksStudentPage: TasksStudentPage;
  resultPage: ResultPage;
  selectSubjectPage: SelectSubjectPage;
  homeworkResolvePage: HomeworkResolvePage;
  selectTaskPage: SelectTaskPage;
  taskStudentPage: TasksStudentPage;
  getHomeworkPage: GetHomeworkPage;
  tasksTeacherPage: TasksTeacherPage;
};

export const test = base.extend<PageFixtures>({
  resultPage: async ({ page }, use) => {
    await use(new ResultPage(page));
  },

  tasksTeacherPage: async ({ page }, use) => {
    await use(new TasksTeacherPage(page));
  },

  getHomeworkPage: async ({ page }, use) => {
    await use(new GetHomeworkPage(page));
  },

  selectSubjectPage: async ({ page }, use) => {
    await use(new SelectSubjectPage(page));
  },

  homeworkResolvePage: async ({ page }, use) => {
    await use(new HomeworkResolvePage(page));
  },

  selectTaskPage: async ({ page }, use) => {
    await use(new SelectTaskPage(page));
  },

  taskStudentPage: async ({ page }, use) => {
    await use(new TasksStudentPage(page));
  },

  lectaMainPage: async ({ page }, use) => {
    await use(new LectaMainPage(page));
  },

  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },

  mainPageDirector: async ({ page }, use) => {
    await use(new MainPageDirector(page));
  },

  tasksStudentPage: async ({ page }, use) => {
    await use(new TasksStudentPage(page));
  },
});
