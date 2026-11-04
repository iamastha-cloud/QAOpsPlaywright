
//import 'request' for API
const {test, expect,request} = require('@playwright/test');

//Test data
const LoginPayload = {userEmail: "astharana42@gmail.com", userPassword: "Admin@123"}


// it will execute once before all the test cases
test.beforeAll( async()=>
    {

//create seprate enviroment/ create API context
const apiContext = await  request.newContext();


const LoginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data :LoginPayload 
    })

    expect(LoginResponse.ok()).toBeTruthy();
    const LoginResponseJason = await LoginResponse.json();
    const token = LoginResponseJason.token;
    console.log(token);


})

// it will execute before each test cases
test.beforeEach(()=>{

})


test('Login',async ({page,browser}) => {
    let token;

    page.addInitScript(value =>{

        window.localStorage.setItem('token',value);

    }, token);

/*await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("astharana42@gmail.com");
await page.locator("#userPassword").fill("Admin@123");
await page.locator("#login").click();*/

});


test('Dashboard',async ({page,browser}) => {

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("astharana42@gmail.com");
await page.locator("#userPassword").fill("Admin@123");
await page.locator("#login").click();

await page.waitForLoadState('networkidle');

//Store the product name
const productName = 'ZARA COAT 3';

//Get all product titles
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);

//Product cards ka count nikalna
const product = page.locator(".card-body");
const count = await product.count();
console.log(count);


for(let i=0; i<count; ++i)
{
  if(await  product.nth(i).locator("b").textContent() === productName)
  {
    // Click Add To Cart 
    await product.nth(i)
  .getByRole("button", { name: /Add To Cart/i })
  .click();
 
  //Verify success toast
const toast = page.locator("div.toast-bottom-right.toast-container");

await expect(toast).toBeVisible();
await page.waitForTimeout(3000);
console.log("Add To Cart toast:", await toast.innerText());

 break;
}}
  await page.waitForLoadState("networkidle");
  await page.locator("[routerlink='/dashboard/cart']").click();
  const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   
  await page.locator("button:has-text('Buy Now') ").click();

  await page.locator("[value='4542 9931 9292 2293']").clear();
   await page.locator("[value='4542 9931 9292 2293']").fill("4542 9931 9292 1702");
  // Expiry Month dropdown
const monthDropdown = page.locator("div.field.small select").nth(0);
await monthDropdown.selectOption({ label: "04" });

// Expiry Date dropdown
const dateDropdown = page.locator("div.field.small select").nth(1);
await dateDropdown.selectOption({ label: "28" });

//CVV
const cvv = page.locator("div.field.small")
  .filter({ hasText: "CVV Code ?" })
  .locator("input");
  await cvv.fill("399");

//name on card
  const nameoncard = page.locator("div.field")
  .filter({hasText:"Name on Card "})
  .locator("input");
  await nameoncard.fill("Astha");

//Apply coupon
   await page.locator("[name='coupon']").fill("123456");
   
//Apply button

 await page.locator("[type='submit']").click();

 //place order
 await page.locator("[placeholder='Select Country']").fill("India");
 await page.getByRole("button",{name:"Place Order"}).click();

})