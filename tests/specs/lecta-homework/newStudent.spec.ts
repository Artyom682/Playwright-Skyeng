import {test} from "../../fixtures/lecta-homework/fixture";


test('getting started should contain table of contents', async ({ lectaMainPage, resultPage, selectSubjectPage, authPage, homeworkResolvePage, selectTaskPage, taskStudentPage, page }) => {
  await lectaMainPage.goto();
  await lectaMainPage.authRegButton.click();
  await authPage.loginProsvId("vasin.artyom@skyeng.ru", 'css12345');
  await taskStudentPage.cardSelfStudy.click();
  await selectSubjectPage.subjectCardButton('Технология').click();
  await selectSubjectPage.classNumberButton(8).click();
  await selectSubjectPage.workbookButton.click();
  await selectSubjectPage.goToTasksButton.click();
  await selectTaskPage.taskCheckboxButton('№2 Шпон').click();
  await selectTaskPage.createTaskFromStudent.click()
  await homeworkResolvePage.correctAnswerButton('Тонкий слой древесины').click();
  await homeworkResolvePage.endHomeworkButton.click();
  await resultPage.score.isVisible();
  await resultPage.continueButton.click();
});