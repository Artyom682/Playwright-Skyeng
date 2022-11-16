import { test } from "../../fixtures/lecta-homework/lecta-homework.fixture";
import { expect } from "@playwright/test";
import { createHomework } from "./api-lecta.spec";

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
}) => {
  await lectaMainPage.open();
  await lectaMainPage.authRegButton().click();
  await authPage.loginProsvId("testoviyteacher@mail.ru", "11111111");
  const hwLink = "https://hw.lecta.ru/student/" + (await createHomework()); // ссылка на дз
  await tasksTeacherPage.profileIconButton.click();
  await tasksTeacherPage.logoutButton.click();
  await lectaMainPage.page.waitForTimeout(2000);

  await getHomeworkPage.open(hwLink);
  await getHomeworkPage.loginWithProsvIdButton.click();
  await authPage.loginProsvId("vasin.artyom@skyeng.ru", "css12345");
  await getHomeworkPage.startButton.click();
  await getHomeworkPage.closePopUpAtStartButton.click();
  await homeworkResolvePage.correctAnswerButton("Тонкий слой древесины").click();
  await homeworkResolvePage.endHomeworkButton.click();

  const scoreStudent = Number(await resultPage.score.getLocator.innerText());
  expect(scoreStudent).toBe(100);
  await resultPage.continueButton.click()
  await tasksStudentPage.profileIconButton.click();
  await tasksStudentPage.logoutButton.click();

  await lectaMainPage.authRegButton().click();
  await authPage.loginProsvId("testoviyteacher@mail.ru", "11111111");
  const scoreTeacher = Number(
    await tasksTeacherPage.scoreInTeacherCabinet.getLocator.innerText()
  );
  expect(scoreTeacher).toBe(100);
});
