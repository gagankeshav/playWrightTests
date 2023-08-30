import { BeforeAll, AfterAll, After, Before, Status, setDefaultTimeout} from '@cucumber/cucumber'
import { chromium, Page, Browser, BrowserContext  } from '@playwright/test'
import { pageFixture } from './pageFixture'
const fs = require("fs-extra");

let page: Page
let browser: Browser
let context: BrowserContext

setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
    browser = await chromium.launch({ headless: true });
    const session = await browser.newBrowserCDPSession();
    const version = await session.send('Browser.getVersion');
    fs.writeFile("platform_details.json",
                    JSON.stringify({
                        "bname" : version.product.match(/.*[a-z]/),
                        "bversion" : version.product.match(/[0-9].*/)}));
})

Before(async function()  {
    // Viewport to ensure browser opens in 1080P
    context = await browser.newContext({viewport: {width: 1920, height: 1080}, ignoreHTTPSErrors: true})
    page = await context.newPage()
    pageFixture.page = page;
})

After(async function({pickle, result}) {
    if (result?.status == Status.FAILED){
        const img = await pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type: "png"})
        this.attach(img, "image/png")
    }
    await pageFixture.page.close()
    await context.close()
})

AfterAll(async function(){
    await browser.close()
})