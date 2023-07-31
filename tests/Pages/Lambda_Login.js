export default class Luma_Login {
    constructor(page) {
        this.page = page;
    }

    async Login(email, password) {
        await this.page.click("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
        await this.page.locator("//input[@id='input-email']").fill(email);
        await this.page.locator("//input[@id='input-password']").fill(password);
        await this.page.click("//input[@value='Login']");
    }
}