import { test } from "../../fixtures/lecta-homework/lecta-homework.fixture";
import {expect} from "@playwright/test";

const lectaSubjects = {
  subjects: [
    "Математика",
    "Алгебра",
    "Геометрия",
    "Информатика",
    "Русский/язык",
    "Литература",
    "Технология",
    "Английский",
    "Физика",
    "Химия",
    "Биология",
    "История",
    "Обществознание",
    "География",
    "ОБЖ",
  ],
};

test("Создание таски и Наличие двух кнопок у ученика", async ({
  lectaMainPage,
  tasksTeacherPage,
  getHomeworkPage,
  selectSubjectPage,
  selectTaskPage,
  authPage
}) => {
  await lectaMainPage.open();
  await lectaMainPage.authRegButton().click();
  await authPage.loginProsvId("testoviyteacher@mail.ru", "11111111");
  await tasksTeacherPage.createTaskButton.click();
  await selectSubjectPage.subjectCardButton("Технология").click();
  await selectSubjectPage.classNumberButton(8).click();
  await selectSubjectPage.goToTasksButton.click();
  await selectTaskPage.taskCheckboxButton("№2 Шпон").click();
  await selectTaskPage.nextButton.click();
  await tasksTeacherPage.createTaskButton.click();
  const hwLink =
    "https://" + (await tasksTeacherPage.homeworkLink.getLocator.innerText());
  await tasksTeacherPage.profileIconButton.click();
  await tasksTeacherPage.logoutButton.click();
  await lectaMainPage.timeout(3000)
  await getHomeworkPage.open(hwLink);
  await getHomeworkPage.loginWithProsvIdButton.click();
  await authPage.loginProsvId("ucheniktest@mail.ru", "11111111");

  await expect(getHomeworkPage.buyingLicenseButton.getLocator).toBeVisible();
  await expect(getHomeworkPage.schoolAccessActivationButton.getLocator).toBeVisible();
});
