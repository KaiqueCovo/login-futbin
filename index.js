const puppeteer = require('puppeteer');

const account = {
  email: 'futbin-kaique@mailna.in',
  password: 'Futbin123456789'
};

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto('https://www.futbin.com/account/login');

    await page.type('#Email', account.email);
    await page.type('#Password', account.password);

    await page.click('.submit_login');
    await page.waitForNavigation();

    console.log('Page URL:', page.url());

  } catch( err) {
    console.log( 'ERROR => ', err)
  }
})();
