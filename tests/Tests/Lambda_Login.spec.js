import { test } from "@playwright/test"
import * as data from "../TestData/testdata.json";
import Lambda_Login from "../Pages/Lambda_Login";
import Lamda_MenuSelection from "../Pages/Lamda_MenuSelection";
import Lamda_checkout from "../Pages/Lamda_checkout";

const email = data.email;
const password = data.password;

test.describe("Login Lambda", async () => {
    test("Login", async ({ page, baseURL }) => {
        const lamdaLogin = new Lambda_Login(page);
        //await page.goto(`${baseURL}route=account/login`);
        await page.goto(`${baseURL}`);
        await lamdaLogin.Login(email, password);
    })

    test("Menu Selection and checkout", async ({ browser, baseURL }) => {
        const context = await browser.newContext({
            //storageState: "./auth.json"
        });
        const page = await context.newPage();
        const lamdaLogin = new Lambda_Login(page);
        await page.goto(`${baseURL}route=account/login`);
        await lamdaLogin.Login(email,password)
        const menuSelection = new Lamda_MenuSelection(page);
        const checkout_ = new Lamda_checkout(page);
       // await page.goto(`${baseURL}route=account/login`);
        await menuSelection.SelectMenu();
        await checkout_.checkout();
        
    })
})








// test("Slider Demo", async ({ page }) => {
//     await test.step("Goto demo site", async () => {
//         await page.goto("https://groww.in/calculators/sip-calculator");

//     });
//     await test.step("handle slider", async () => {
//         await page.waitForSelector("(//div[@role='slider'])[1]");
//         const s = await page.$("(//div[@role='slider'])[1]")
//         let ele = page.locator("#MONTHLY_INVESTMENT")
//         let text = await ele.inputValue();
//         console.log('Initial text: ' + text);
//         let targetAmount = "68500";
//         let isCompleted = false;
//         if (s) {
//             while (!isCompleted) {
//                 let srcBound = await s.boundingBox();
//                 if (srcBound) {
//                     await page.mouse.move(srcBound.x + srcBound.width / 2,
//                         srcBound.y + srcBound.height / 2)
//                     await page.mouse.down();
//                     await page.mouse.move(srcBound.x + 15, srcBound.y + srcBound.height / 2);
//                     await page.mouse.up();
//                     let text = await ele.inputValue();
//                     if (text == targetAmount) {
//                         isCompleted = true;
//                     }
//                 }
//             }

//         }
//         await page.waitForTimeout(1000)
//     });
// })
