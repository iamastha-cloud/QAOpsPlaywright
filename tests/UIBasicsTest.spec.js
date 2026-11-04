//Test annotation
const {test, expect} = require('@playwright/test');

//Test case creation

//Browser Context
test.only('browser playwright test',async ({browser})=>
{
const context = await browser.newContext();
const page =await context.newPage();
await page.goto("https://sso.teachable.com/secure/9521/identity/sign_up/otp?wizard_id=iXaiQovZCuXlrCQ-TS_iHqG_UynYJvy_DDsQRPYAdwFwQHLUOqsQyu8W4BnSevMxgxZgZKD-_L_ExCm3urWdiA");

// title of page 

await expect (page). toHaveTitle("Rahul Shetty Academy");
console.log(await page.title());

// css (playwright only deals with css)

await page.locator("#name").fill("Astha");
await page.locator('#email').fill("Astha@gmail.com");
await page.locator(':text("Send code")').click();


}
);

















//Page Fixture
test('page playwright test',async ({page})=>
{

await page.goto("https://www.google.com/");

//get title - assertion
await page.title()
console.log(await page.title());
await expect (page).toHaveTitle("Google");
}
);

