const puppeteer = require('puppeteer');
const regeneratorRuntime = require('regenerator-runtime');

const APP = `http://localhost:8080`;

describe('Front-End Testing', () => {
  let browser;
  let page;

  beforeAll(async() => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    page = await browser.newPage();
  });

  afterAll(() => {
    browser.close();
  })

  describe('Initial display test', () => {
    it('Test if it loads', async () => {
      await page.goto(APP);
      await page.waitForSelector('h1')
      const title = await page.$eval('h1', el => el.innerText)
      expect(title).toBe('Books-R-US')
    })
  })
});
