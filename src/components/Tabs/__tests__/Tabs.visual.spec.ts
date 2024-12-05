import { test, expect } from "@playwright/test";

test.describe("Tabs Component Visual Tests", () => {
	test("should match snapshot", async ({ page }) => {
		await page.goto(
			"/iframe.html?globals=theme%3Alight&id=components-tabs--default&viewMode=story",
		);

		await page.waitForSelector("div[data-testid='tabs-root']");

		await expect(page).toHaveScreenshot();

		await expect(page).toHaveScreenshot("tabs-default.png", {
			maxDiffPixelRatio: 0.01,
		});
	});
});
