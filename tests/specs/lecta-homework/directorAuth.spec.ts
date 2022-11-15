import { test } from "../../fixtures/lecta-homework/lecta-homework.fixture";
import {expect} from "@playwright/test";

test("Auth director", async ({
  lectaMainPage,
  authPage,
  mainPageDirector,
  tasksStudentPage,
}) => {
  await lectaMainPage.open();
  await lectaMainPage.authRegButtonForDirector().click();
  await authPage.loginProsvId(
    "headmaster+demo@skyeng.ru",
    "headmaster+demo@skyeng.ru"
  );
  await expect(mainPageDirector.schoolName().getLocator).toBeVisible();
  await expect(mainPageDirector.buyingMoreLicensesButton.getLocator).toBeVisible();
  await mainPageDirector.buyingMoreLicensesButton.click();
  await mainPageDirector.closePopUpButton.click();
  await tasksStudentPage.profileIconButton.click();
  await tasksStudentPage.logoutButton.click();
});
