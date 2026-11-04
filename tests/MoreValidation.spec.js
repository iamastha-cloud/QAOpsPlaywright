const {test, expect } = require("@playwright/test");

test("PopUp Validation",async ({page}) => {

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await expect (page) .toHaveTitle("Practice Page")
console.log( await page.title());

await page.goto("https://rahulshettyacademy.com/angularpractice/");
await expect (page). toHaveTitle ("ProtoCommerce");
console.log(await  page.title());


await page.goForward();
await page.goBack();


//check the element is in visiblwe mode or not
    
await expect (page.getByPlaceholder("Hide/Show Example")).toBeVisible();
await page.locator("[value='Hide']").click();
await expect (page.locator("#displayed-text")).toBeHidden();

//Handle java Popups/Dialouge
await page.locator ("#confirmbtn").click();
page.on('dialog',dialog => dialog.accept());
//page.on('dialog', dialog => dismiss());

//Handle Hover
await page.locator("#mousehover").hover();









})