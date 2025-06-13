import HomePage from '../page_objects/HomePage';
import ProductsPage from '../page_objects/ProductsPage';
import ShoppingCartPage from '../page_objects/ShoppingCartPage';
import CheckoutStepOnePage from '../page_objects/CheckoutStepOnePage';

describe('Оформление заказа без ZIP-кода', () => {
  it('Нельзя завершить оформление заказа без указанного ZIP-кода', () => {
    const homePage = HomePage
    const productsPage = ProductsPage
    const shoppingCartPage = ShoppingCartPage
    const checkoutStepOnePage = CheckoutStepOnePage

    homePage.visit()
    homePage.logIn('standard_user', 'secret_sauce')
    productsPage.addFirstItemToCart()
    productsPage.openShoppingCart()
    shoppingCartPage.proceedToCheckout()
    checkoutStepOnePage.submitFormWithoutZip()
    checkoutStepOnePage.verifyError()
  })
})