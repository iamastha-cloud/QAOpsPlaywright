const {test,expect} = require('playwright/test');

test('TC_01',async ({page,browser}) =>
{
    const emailtext = 'rana${Date.now()}@example.com';
    const gender = page.locator("#exampleFormControlSelect1");

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.locator("//div[@class='form-group']//input[@name='name']").fill("Astha");
    await page.locator('[name="email"]').fill(emailtext);
    await page.getByPlaceholder("Password").fill("Admin@123");
    await page.getByText("Check me out if you Love IceCreams!").isChecked();

    await gender.selectOption("Female");
    await page.locator("[value='option1']").click();
    await page.locator("[name='bday']").fill("1996-04-28");
    await page.locator("[value='Submit']").click();


})

