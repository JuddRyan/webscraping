const puppeteer = require("puppeteer");
const fs = require('fs/promises');

(async () => {
	console.log('started');

	const browser = await puppeteer.launch({
		headless: false,
	});

	const page = (await browser.pages())[0];
	await page.goto('https://mangasee123.com/');

	const titles = await page.evaluate(() => {
		return Array.from(document.querySelectorAll('.LatestChapters .SeriesName span'))
			.map(x => x.textContent);
	});

	await fs.writeFile('titles.txt', titles.join('\r\n'));

	console.log('====');
	console.log((await browser.pages()).length);
	console.log('====');
  await browser.close();

})();