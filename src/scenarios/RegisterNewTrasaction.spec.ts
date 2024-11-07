import { join } from 'path';
import { test, expect } from '@playwright/test';
import HomePage from '../support/pages/HomePage';
import exp from 'constants';

test.describe('Cadastro de nova transação', () => {
    let homePage: HomePage;
    let BASE_URL = "https://dev-finance.netlify.app/#";
  
    test.beforeEach(async ({ page }) => {
      homePage = new HomePage(page);
      await page.goto(BASE_URL);
    });

    test('Cadastrar nova transação', async () => {
        await homePage.clickNewTransactionButton();
        await homePage.fillDescriptionField('Salário');
        await homePage.fillAmountField('1300');
        await homePage.fillDateField('2021-03-01');
        await homePage.clickSubmitButton();

        expect((await homePage.getIncomeValue())).toContain('1.300,00');
        expect((await homePage.getExpenseValue())).toContain('0,00');
        expect((await homePage.getTotalValue())).toContain('1.300,00');
        expect(await homePage.getTransactionGridCount()).toBe(1);

        // Verifica se a transação foi cadastrada corretamente
        
        const expectedTransaction = ['Descrição',	'Valor', 'Data', 'Salário', '1.300,00', '01/03/2021'];

        for (let i = 0; i < expectedTransaction.length; i++) {
            expect(await homePage.getTransactionGrid()).toContain(expectedTransaction[i]);
        } 
    });
});