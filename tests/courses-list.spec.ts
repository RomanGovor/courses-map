import { test, expect } from "@playwright/test";

test("create delete course list", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("Test name");
  await page.getByPlaceholder("описание").click();
  await page.getByPlaceholder("описание").fill("Test description");
  await page.getByRole("button", { name: "Добавить" }).click();

  await expect(
    page.getByText("Test nameTest descriptionУдалить"),
  ).toBeVisible();

  await page
    .locator("div")
    .filter({ hasText: /^Test nameTest descriptionУдалить$/ })
    .getByRole("button")
    .click();

  await expect(
    page.getByText("Test nameTest descriptionУдалить"),
  ).not.toBeVisible();
});
