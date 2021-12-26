const puppeteer = require("puppeteer");
const { start } = require("repl");

async function startFetch() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto("https://www.forbes.com/sites/krisholt/2021/08/30/overwatchs-mccree-name-change-is-a-small-but-necessary-move/?sh=5f09a2494c40");

  await page.screenshot({path: "amazing.png", fullPage: true});
  await browser.close();
}

startFetch();