// @ts-check
import { test, expect } from '@playwright/test';

const logincreds =["Admin","admin123"]

test('Verify login with valid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 await page.locator("input[name='username']").fill(logincreds[0])
 await page.locator("input[type='password']").fill(logincreds[1])
 await page.locator("button[type='submit']").click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
});
