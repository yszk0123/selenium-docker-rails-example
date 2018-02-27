const { Builder } = require('selenium-webdriver');

function wait(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

(async () => {
  const driver = new Builder()
    .forBrowser('chrome')
    .usingServer('http://chrome.com:4444/wd/hub')
    .build();

  try {
    await driver.get('http://app.com:3000/sample');
    await wait(3000);
  } finally {
    await driver.quit();
  }
})();
