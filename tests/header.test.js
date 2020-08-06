const puppeteer = require('puppeteer');

test('Adds two numbers', () => {
  const sum = 1 + 2;
  expect(sum).toEqual(3);
});

test('We can launch a browser', async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  try {
    // await page.waitForSelector('#holla');
    await page.goto('localhost:8000');
    const text = await page.$eval('#holla', el => el.innerHTML);

    expect(text).toEqual('Master of my domain.');

    console.log('Good stuff')
  } catch(error) {
    console.error(error);

    console.log('There was an error and the browser will be closed.');
    await browser.close();
  }

  console.log('Browser closed after successful test.');
  await browser.close();
});