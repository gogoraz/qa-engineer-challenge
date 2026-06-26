import { test, expect } from '@playwright/test';

// TC-001 - successful registration with required fields
test('TC-001 - successful registration with required fields', async ({ page }) => {
  await page.goto('https://qa-assessment.pages.dev/');

  // Fill required fields
  await page.getByLabel('First name').fill('Gogi');
  await page.getByLabel('Last name').fill('Blag');
  await page.getByLabel('Email').fill('gogi.blag@example.com');
  await page.getByRole('textbox', { name: 'Password (mandatory):', exact: true }).fill('Test@1234');
  await page.getByRole('textbox', { name: 'Confirm Password (mandatory):' }).fill('Test@1234');
  await page.getByLabel('LinkedIn URL').fill('https://www.linkedin.com/in/gogi-blag');
  
  // Check that the password field is type "text"
  await expect(page.getByRole('textbox', { name: 'Confirm Password (mandatory):' })).toHaveAttribute('type', 'text');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL(/firstName=Gogi/);
  await expect(page).toHaveURL(/lastName=Blag/);
  await expect(page).toHaveURL(/email=gogi.blag%40example.com/);
  await expect(page).toHaveURL(/password=Test%401234/);
  await expect(page).toHaveURL(/confirmPassword=Test%401234/);
});

// TC-002 - shows validation when form is empty
test('TC-002 - shows validation when form is empty', async ({ page }) => {
  await page.goto('https://qa-assessment.pages.dev/');

  // Check alert message
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('First name must be filled out');
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Submit' }).click();
});

// TC-006 - shows validation when passwords do not match
test('TC-006 - shows validation when passwords do not match', async ({ page }) => {
  await page.goto('https://qa-assessment.pages.dev/');

  // Fill required fields
  await page.getByLabel('First name').fill('Gogi');
  await page.getByLabel('Last name').fill('Blag');
  await page.getByLabel('Email').fill('gogi.blag@example.com');
  await page.getByRole('textbox', { name: 'Password (mandatory):', exact: true }).fill('Test@1234');
  await page.getByRole('textbox', { name: 'Confirm Password (mandatory):' }).fill('Wrong@1234');
  await page.getByLabel('LinkedIn URL').fill('https://www.linkedin.com/in/gogi-blag');

  // Check alert message
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Passwords do not match');
    await dialog.accept();
  });

  
  await page.getByRole('button', { name: 'Submit' }).click();
});