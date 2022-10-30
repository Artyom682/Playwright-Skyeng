import { test } from "../../fixtures/lecta-homework/fixture";
import { lectaSubjects } from "../../data/lecta-homework";

test("Студент без лицензий", async ({
  lectaMainPage,
  getHomeworkPage,
  selectSubjectPage,
  selectTaskPage,
  authPage,
  tasksStudentPage,
  page,
}) => {
  await lectaMainPage.goto();
  await lectaMainPage.authRegButton().click();
  await authPage.loginProsvId("ucheniktest@mail.ru", "11111111");
  await getHomeworkPage.closePopUpAtStartButton.click();
  await page.goto("https://hw.lecta.ru/student/profile");
  await tasksStudentPage.cardSelfStudy.click();
  const subjects = lectaSubjects.subjects;
  for (let i = 0; i < lectaSubjects.subjects.length; i++) {
    await selectSubjectPage
      .subjectCardWithLockIconButton(subjects[i])
      .waitUntilElementIsVisible();
  }
  await selectSubjectPage.subjectCardButton("Технология").click();
  await selectSubjectPage.classNumberButton(8).click();
  await selectSubjectPage.goToTasksButton.click();
  await selectTaskPage.toLicensesButton.click();
  await tasksStudentPage.profileIconButton.click();
  await tasksStudentPage.logoutButton.click();
  await page.waitForTimeout(5000);
});

test("Наличие двух кнопок", async ({
  lectaMainPage,
  tasksTeacherPage,
  getHomeworkPage,
  selectSubjectPage,
  selectTaskPage,
  authPage,
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
  const hwLink =
    "https://" + (await tasksTeacherPage.homeworkLink.getLocator.innerText());
  await tasksTeacherPage.profileIconButton.click();
  await tasksTeacherPage.logoutButton.click();
  await page.waitForTimeout(3000);
  await page.goto(hwLink);
  await getHomeworkPage.loginWithProsvIdButton.click();
  await authPage.loginProsvId("ucheniktest@mail.ru", "11111111");
  await getHomeworkPage.buyingLicenseButton().waitUntilElementIsVisible();
  await getHomeworkPage
    .schoolAccessActivationButton()
    .waitUntilElementIsVisible();
});
