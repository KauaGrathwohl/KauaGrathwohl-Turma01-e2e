import { Page } from '@playwright/test';
import { HomeElements } from '../elements/HomeElements';

export default class HomePage {
  private page: Page;
  private homeElements: HomeElements;

  constructor(page: Page) {
    this.page = page;
    this.homeElements = new HomeElements(page);
  }

  async navigate() {
    await this.page.goto('https://dev-finance.netlify.app/#');
  }

  async clickNewTransactionButton() {
    await this.homeElements.getButtonNewTransaction().click();
  }

  async fillDescriptionField(description: string) {
    await this.homeElements.getDescripitionField().fill(description);
  }

  async fillAmountField(amount: string) {
    await this.homeElements.getAMountField().fill(amount);
  }

  async fillDateField(date: string) {
    await this.homeElements.getDateField().fill(date);
  }

  async clickSubmitButton() {
    await this.homeElements.getSubmitButton().click();
  }

  async getIncomeValue() {
    return this.homeElements.getIncomeCard().innerText();
  }

  async getExpenseValue() {
    return this.homeElements.getExpenseCard().innerText();
  }

  async getTotalValue() {
    return this.homeElements.getTotalCard().innerText();
  }

  async getTransactionGrid() {
    return this.homeElements.getTransactionGrid().innerText();
  }

  async getTransactionGridCount() {
    return this.homeElements.getTransactionGrid().count();
  }

  async getTransactionGridRow(row: number) {
    return this.homeElements.getTransactionGrid().nth(row).innerText();
  }
}