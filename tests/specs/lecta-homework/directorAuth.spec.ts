import {test} from "../../fixtures/lecta-homework/fixture";


test('Auth director', async ({ lectaMainPage, authPage, mainPageDirector, tasksStudentPage, page }) => {
  await lectaMainPage.goto();
  await lectaMainPage.authRegButtonForDirector.click();
  await authPage.loginProsvId('headmaster+demo@skyeng.ru', 'headmaster+demo@skyeng.ru');
  await mainPageDirector.schoolName.isVisible();
  await mainPageDirector.buyingMoreLicensesButton.isVisible();
  await mainPageDirector.buyingMoreLicensesButton.click();
  await mainPageDirector.closePopUpButton.click();
  await tasksStudentPage.profileIconButton.click();
  await tasksStudentPage.logoutButton.click();
});

