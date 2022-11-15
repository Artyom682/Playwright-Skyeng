import { test } from "../../fixtures/lecta-homework/lecta-homework.fixture";
import {expect} from "@playwright/test";

test("Authorization student", async ({
  lectaMainPage,
  resultPage,
  selectSubjectPage,
  authPage,
  homeworkResolvePage,
  selectTaskPage,
  tasksStudentPage,
}) => {
  await lectaMainPage.open();
  await lectaMainPage.authRegButton().click();
  await authPage.loginProsvId("vasin.artyom@skyeng.ru", "css12345");
  await tasksStudentPage.cardSelfStudy.click();
  await selectSubjectPage.subjectCardButton("Технология").click();
  await selectSubjectPage.classNumberButton(8).click();
  await selectSubjectPage.goToTasksButton.click();
  await selectTaskPage.taskCheckboxButton("№2 Шпон").click();
  await selectTaskPage.createTaskFromStudent().click();
  await homeworkResolvePage
    .correctAnswerButton("Тонкий слой древесины")
    .click();
  await homeworkResolvePage.endHomeworkButton.click()
  const num = Number(await resultPage.score.getText());
  await expect(num).toBe(100);
  await resultPage.continueButton.click();
});
