import HomePage from '../page_objects/HomePage';
import ProductsPage from '../page_objects/ProductsPage';
import ShoppingCartPage from '../page_objects/ShoppingCartPage';
import CheckoutStepOnePage from '../page_objects/CheckoutStepOnePage';
import CheckoutStepTwoPage from '../page_objects/CheckoutStepTwoPage';

describe('Полный процесс оформления заказа', () => {
  it('Можно успешно оформить заказ с товаром в корзине', () => {
    const homePage = HomePage
    const productsPage = ProductsPage
    const shoppingCartPage = ShoppingCartPage
    const checkoutStepOnePage = CheckoutStepOnePage
    const checkoutStepTwoPage = CheckoutStepTwoPage

    homePage.visit()
    homePage.logIn('standard_user', 'secret_sauce')
    productsPage.addFirstItemToCart()
    productsPage.openShoppingCart()
    shoppingCartPage.proceedToCheckout()
    checkoutStepOnePage.fillOutForm('Joe', 'Bloggs', '12345')
    checkoutStepTwoPage.finalizeOrder()
    checkoutStepTwoPage.verifySuccessfulOrder()
  })
})