const { test, expect } = require("@playwright/test");

//UI controls

    test('TC_01_login _',async ({page,browser}) => {
{const context = await browser.newContext();}

     await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");

        console.log(await page.title());
    });

    //Dropdown

    test('TC_02_dropdown',async ({browser,page}) =>
         {
          await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");

          const dropdown = page.locator('#ctl00_mainContent_DropDownListCurrency');
          await dropdown.selectOption("USD");
        

    });

    // Radio Button

    test('TC_03',async ({page , browser}) => 
    {
      await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");
    const RDbtn = page.locator('#ctl00_mainContent_rbtnl_Trip_2');
    await RDbtn.click();
    await page.locator('#MultiCityModelAlert').click();
    // put assertion  
    expect (RDbtn.last()).toBeChecked();
    //await page.pause();

    });

    // Blinking Text
   test('TC_04',async ({page,browser}) => 
        {
             await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");
         const blinkingText = page.locator("[class='blinkingText']");
        await expect (blinkingText).toHaveAttribute("class","blinkingText");

    });

    // Handling Childwindows and tabs

    test.only('TC_05', async ({page,browser}) =>
         {

             await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");

             //Locate blinking text
         const blinkingText = page.locator("[class='blinkingText']");

             // wait for new tab
             const newtab = page.waitForEvent('popup');

             // click on blinking text
              await (blinkingText.click());

             // store new tab
             const childPage= await newtab;

            // new tab actions
            console.log(await childPage.url());
            console.log(await childPage.title());
            await page.pause();
    });