import HomePage from '../page_objects/HomePage';
import ShoppingCartPage from '../page_objects/ShoppingCartPage';
import CheckoutStepOnePage from '../page_objects/CheckoutStepOnePage';
import CheckoutStepTwoPage from '../page_objects/CheckoutStepTwoPage';

describe('Оформление заказа с пустой корзиной', () => {
  it('Нельзя оформить заказ, если корзина пуста', () => {
    const homePage = HomePage
    const shoppingCartPage = ShoppingCartPage
    const checkoutStepOnePage=CheckoutStepOnePage
    const checkoutStepTwoPage=CheckoutStepTwoPage

    homePage.visit()
    homePage.logIn('standard_user', 'secret_sauce')

    shoppingCartPage.navigateToCart()
    shoppingCartPage.proceedToCheckout()
    checkoutStepOnePage.fillOutForm('Joe', 'Bloggs', '12345')
    checkoutStepTwoPage.finalizeOrder()
    cy.contains('.complete-header','Thank you for your order').should('not.exist')
    
    
  });
  });
