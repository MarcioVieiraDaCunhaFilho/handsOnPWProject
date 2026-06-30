import { test, expect } from '@playwright/test';

test('header has title', async ({ page }) => {
await page.goto('http://localhost:5000/');
const heading = page.getByRole('heading', { name: 'Welcome to Cool events!' })
expect(heading).toBeVisible
});