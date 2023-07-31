import { expect } from "@playwright/test";

export default class Lamda_MenuSelection {
    constructor(page) {
        this.page = page;
    }

    async SelectMenu() {
        await this.page.hover("//span[normalize-space()='Mega Menu']");
        await this.page.waitForTimeout(1000);
        await this.page.click("//a[normalize-space()='Headphones']");
        const monitors = this.page.locator("//label[normalize-space()='Mice and Trackballs']")
        await monitors.check();
        expect(monitors).toBeChecked();
        await this.page.waitForTimeout(7000);
        await this.page.locator("//button[@id='list-view']").click();
        await this.page.waitForTimeout(2000);
        await this.page.locator("//button[@class='btn btn-cart cart-29']//span[contains(text(),'Add to Cart')]").click();
        await this.page.locator("//a[@class='btn btn-secondary btn-block']").click();
    }
}
