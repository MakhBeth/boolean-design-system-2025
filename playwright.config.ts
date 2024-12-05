import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./src",
	testMatch: "**/__tests__/*.spec.ts",
	timeout: 30000,
	expect: {
		timeout: 5000,
	},
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: "html",
	use: {
		baseURL: "http://localhost:6006",
		trace: "on-first-retry",
		// Viewport size for consistent screenshots
		viewport: { width: 1280, height: 720 },
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		// Uncomment to test in other browsers
		// {
		//   name: 'firefox',
		//   use: { ...devices['Desktop Firefox'] },
		// },
		// {
		//   name: 'webkit',
		//   use: { ...devices['Desktop Safari'] },
		// },
	],
	webServer: {
		command: "npm run storybook",
		url: "http://localhost:6006",
		reuseExistingServer: !process.env.CI,
	},
});
