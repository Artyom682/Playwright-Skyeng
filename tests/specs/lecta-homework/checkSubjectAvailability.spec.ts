import { test } from "../../fixtures/lecta-homework/lecta-homework.fixture";
import { expect } from "@playwright/test";

const lectaSubjects = {
  subjects: [
    "Математика",
    "Алгебра",
    "Геометрия",
    "Информатика",
    "Русский язык",
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
  getHomeworkPage,
  selectSubjectPage,
  selectTaskPage,
  tasksStudentPage,
  authPage,
}) => {
  await lectaMainPage.open();
  await lectaMainPage.authRegButton().click();
  await authPage.loginProsvId("ucheniktest@mail.ru", "11111111");
  await getHomeworkPage.closePopUpAtStartButton.click();
  await tasksStudentPage.open();


  await tasksStudentPage.cardSelfStudy.click();
  const subjects = lectaSubjects.subjects;
  for (let i = 0; i < lectaSubjects.subjects.length; i++) {
    await expect(
      selectSubjectPage.subjectCardWithLockIconButton(subjects[i]).getLocator
    ).toBeVisible();
  }
  await selectSubjectPage.subjectCardButton("Технология").click();
  await selectSubjectPage.classNumberButton(8).click();
  await selectSubjectPage.goToTasksButton.click();
  await selectTaskPage.toLicensesButton.click();
});
