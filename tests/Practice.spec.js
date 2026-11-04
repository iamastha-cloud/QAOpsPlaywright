// Open a website and verify its Title

const {test, expect } = require("@playwright/test");

test ('Verify Title', async function ({page,browser})
{
{const context = await browser.newContext();}

await page.goto ("https://www.google.com/");
await expect (page).toHaveTitle("Google");
console.log(await page.title());
});

//Valid Login Test

test('Valid Login', async function ({page, browser})
 {
 
 {const context = await browser.newContext();  }  
 await page.goto("https://www.saucedemo.com/") ;
console.log('await page.title()');
await page.locator('[placeholder="Username"]').fill('standard_user');
await page.locator('[placeholder="Password"]').fill('secret_sauce');
await page.locator('[type="submit"]').click();


});

// Invalid login Test

test('Invalid login', async function ({page,browser})
 {
    {const Context = await browser.newContext}
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[placeholder="Username"]').fill('Astha');
    await page.locator('[placeholder="Password"]').fill('12345');
    await page.locator('[type="submit"]').click();
    console.log(await page.locator('[role="alert"]').textContent());

    await expect(page.getByRole('alert')).toContainText('Epic sadface: Username and password do not match any user in this service')


    console.log('');
});

// empty username field
 
test('empty username',async function ({page,browser})
 {
     {const context = await browser.newContext();  }  
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[aria-label="Username"]').fill('');
    await page.locator('[aria-label="Password"]').fill('');
    await page.locator('[type="submit"]').click();

    console.log(await page.getByRole("alert").textContent()
);

});

//Empty password field

test('empty password', async function ({page, browser}) 
{
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[aria-label="Username"]').fill('standard_user');
    await page.locator('[aria-label="Password"]').fill("");
    await page.locator('[value="Login"]').click();

    console.log(await page.getByRole("alert").textContent());
   // await expect (page.getByRole("alert")).toContainText('password not matched');
});

//Dashboard components testcase

test.only('Dashboard page', async function ({page, browser}) {
     await page.goto("https://www.saucedemo.com/") ;
await page.locator('[placeholder="Username"]').fill('standard_user');
await page.locator('[placeholder="Password"]').fill('secret_sauce');
await page.locator('[type="submit"]').click();

    await expect (page).toHaveURL("https://www.saucedemo.com/inventory.html");
    
    const Firsttitle =await page.locator('#item_4_title_link').textContent();
    console.log(Firsttitle);

   // await page.locator('#item_4_title_link').click();

   const title = await page.locator('.inventory_item_name').allTextContents();
   console.log(title);
});

