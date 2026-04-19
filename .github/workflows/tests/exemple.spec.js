import { test, expect } from '@playwright/test';

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