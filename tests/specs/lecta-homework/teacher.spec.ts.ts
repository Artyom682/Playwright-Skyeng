import { test } from "../../fixtures/lecta-homework/fixture";
import { expect } from "@playwright/test";

test("basic cjm teacher-student", async ({
  lectaMainPage,
  resultPage,
  homeworkResolvePage,
  getHomeworkPage,
  tasksTeacherPage,
  selectSubjectPage,
  selectTaskPage,
  authPage,
  tasksStudentPage,
  page,
}) => {
  await lectaMainPage.goto();
  await lectaMainPage.authRegButton().click();
  await authPage.loginProsvId("testoviyteacher@mail.ru", "11111111");
  await tasksTeacherPage.createTaskButton.click();
  await selectSubjectPage.subjectCardButton("Технология").click();
  await selectSubjectPage.classNumberButton(8).click();
  await selectSubjectPage.goToTasksButton.click();
  await selectTaskPage.taskCheckboxButton("№2 Шпон").click();
  await selectTaskPage.nextButton.click();
  await tasksTeacherPage.createTaskButton.click();
  await page.waitForTimeout(1000);
  const hwLink =
    "https://" + (await tasksTeacherPage.homeworkLink.getLocator.innerText());
  await tasksTeacherPage.profileIconButton.click();
  await tasksTeacherPage.logoutButton.click();

  await page.waitForTimeout(1000);

  await page.goto(hwLink);
  await getHomeworkPage.loginWithProsvIdButton.click();
  await authPage.loginProsvId("vasin.artyom@skyeng.ru", "css12345");
  await getHomeworkPage.startButton.click();
  await getHomeworkPage.closePopUpAtStartButton.click();
  await homeworkResolvePage
    .correctAnswerButton("Тонкий слой древесины")
    .click();
  await homeworkResolvePage.endHomeworkButton.click();
  await homeworkResolvePage.closePopUpAtEndButton.click();

  const scoreStudent = Number(await resultPage.score.getLocator.innerText());
  expect(scoreStudent).toBe(100);
  await resultPage.continueButton.click();
  await tasksStudentPage.profileIconButton.click();
  await tasksStudentPage.logoutButton.click();
  await page.waitForTimeout(1000);

  await lectaMainPage.goto();
  await lectaMainPage.authRegButton().click();
  await authPage.loginProsvId("testoviyteacher@mail.ru", "11111111");
  await page.waitForTimeout(1000);
  const scoreTeacher = Number(
    await tasksTeacherPage.scoreInTeacherCabinet.getLocator.innerText()
  );
  expect(scoreTeacher).toBe(100);
});
