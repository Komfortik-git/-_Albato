import HomePage from '../page_objects/HomePage';
import ShoppingCartPage from '../page_objects/ShoppingCartPage';

describe('Переход к оформлению заказа без авторизации', () => {
  it('Без авторизации невозможно перейти к оформлению заказа', () => {
    const homePage = HomePage
    const shoppingCartPage = ShoppingCartPage
    homePage.visit()
    cy.get('[data-test="login-button"]').click()
    cy.contains('[data-test="error"]','Epic sadface: Username is required').should('exist')

    ///cy.visit('https://www.saucedemo.com/inventory-item.html?id=4');
    

  });
});
    
  
