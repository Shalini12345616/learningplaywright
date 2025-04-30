// @ts-check
import { test, expect } from '@playwright/test';
import swaglogindata from"../../testdata/swaplogin.json"

test('Verify login with standard username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
 await page.locator("//input[@data-test='username']").fill(swaglogindata.std_username)
 await page.locator("//input[@data-test='password']").fill(swaglogindata.password)
 await page.locator("//input[@type='submit']").click();
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
});

test('Verify login with locked username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.locator("//input[@data-test='username']").fill(swaglogindata.prob_username)
  await page.locator("//input[@data-test='password']").fill(swaglogindata.password)
  await page.locator("//input[@type='submit']").click();
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
});

test('Verify login with problem username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.locator("//input[@data-test='username']").fill(swaglogindata.loc_username)
 await page.locator("input[type='password']").fill(swaglogindata.password)
 await page.locator("//input[@type='submit']").click();
await expect(page.locator("//div[@class='login-box']//h3[1]")).toBeVisible()
});

test('Verify login with performance username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.locator("//input[@data-test='username']").fill(swaglogindata.perf_username)
  await page.locator("//input[@data-test='password']").fill(swaglogindata.perf_username)
  await page.locator("//input[@type='submit']").click();
  await expect(page.locator("//div[@class='login-box']//h3[1]")).toBeVisible()
});
