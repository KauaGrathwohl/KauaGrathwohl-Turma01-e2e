import { Page, Locator } from '@playwright/test';

export class HomeElements {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Objetos para realizar uma transação

  getButtonNewTransaction(): Locator {
    return this.page.locator('#transaction > a');
  }

  // Modal

  getDescripitionField(): Locator {
    return this.page.locator('#description');
  }

  getAMountField(): Locator {
    return this.page.locator('#amount');
  }

  getDateField(): Locator {
    return this.page.locator('#date');
  }

  getSubmitButton(): Locator {
    return this.page.locator('#form > form > div.input-group.actions > button');
  }

  // Cards (Entradas, Saídas e Total)

  getIncomeCard(): Locator {
    return this.page.locator('#incomeDisplay');
  }

  getExpenseCard(): Locator {
    return this.page.locator('#expenseDisplay');
  }

  getTotalCard(): Locator {
    return this.page.locator('#totalDisplay');
  }

  // Grid das transações listadas

  getTransactionGrid(): Locator {
    return this.page.locator('#data-table');
  }
}
