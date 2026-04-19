
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
//MEs tests

test.describe('Two Ships Passing in the Night', () => {

  test.beforeEach(async ({ page }) => {
    // permet de voir si je peux aller sur le jeu 
    await page.goto('/');
  });

  test('Le jeu charge le canvas sans erreur JS', async ({ page }) => {
    const errors = [];
    //  détecte des crashs invisibles
    page.on('pageerror', error => errors.push(error));


    const canvas = page.locator('canvas');
    await expect(canvas).toBeVisible();
    
    // aucune erreur critique presente 
    expect(errors.length).toBe(0);
  });

  test('Le joueur peut démarrer le jeu avec le clavier', async ({ page }) => {
    // Simuler l'appui sur Espace pour passer l'écran titre
    await page.keyboard.press('Space');

});