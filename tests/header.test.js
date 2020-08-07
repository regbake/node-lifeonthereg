const puppeteer = require('puppeteer');
let browser;
let page;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto('localhost:8000');
});

// @TODO: Why no workey? Broswer stays open
// afterEach(async () => {
//   await browser.close();
// });

test('Header has correct text', async () => {
  const text = await page.$eval('#holla', el => el.innerHTML);

  expect(text).toEqual('Master of my domain.');
  await browser.close();
});

test('Click on burger', async () => {
  // click on nav-toggle
  // navbarMenu should appear
  // click on nav-toggle again
  // navbarMenu should disappear

  // set viewport so burger-menu shows
  await page.setViewport({ width: 500, height: 800 });
  await page.click('#nav-toggle');

  await page.waitForSelector('#navbarMenu', {
    visible: true
  });

  await page.click('#nav-toggle');
  await page.waitForSelector('#navbarMenu', {
    visible: false
  });

  await browser.close();
});