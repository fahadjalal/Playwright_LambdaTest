export default class Lamda_checkout {
    constructor(page) {
        this.page = page;
    }

    async checkout() {

        await this.page.waitForTimeout(3000);
        await this.page.locator("//label[@for='input-payment-address-new']").click();
        await this.page.locator("#input-payment-firstname").fill("Lex1");
        await this.page.evaluate(() => {
            window.scrollBy(0, 500);
          });
        await this.page.locator("#input-payment-lastname").fill("Vor1");
        await this.page.locator("#input-payment-address-1").fill("Hamburg lexyvory stree#4");
        await this.page.locator("#input-payment-city").fill("MyCity");

        await this.page.locator("#input-payment-postcode").fill("1321");
        await this.page.selectOption("#input-payment-country", { label: "Australia" });
        await this.page.selectOption("#input-payment-zone", { label: "Victoria" });

        await this.page.locator("//label[normalize-space()='My delivery and billing addresses are the same.']").click();
        await this.page.locator("//label[@for='input-agree']").check();
        await this.page.locator("//button[@id='button-save']").click();

        await this.page.waitForTimeout(3000);
        await this.page.locator("//button[@id='button-confirm']").click();
        await this.page.waitForTimeout(3000);
    }


}

