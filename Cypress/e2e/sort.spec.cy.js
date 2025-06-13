import HomePage from '../page_objects/HomePage';
import ProductsPage from '../page_objects/ProductsPage';

describe('Тест сортировки товаров по возрастанию цены', () => {
  it('Пользователь сортирует товары по минимальной цене', () => {
    const homePage = HomePage
    const productsPage = ProductsPage

    homePage.visit()
    homePage.logIn('standard_user', 'secret_sauce')
    productsPage.selectSortOption('Price (low to high)')

    // Проверяем цену первого и второго элемента после сортировки. Что возрастание действительно выполняется.
    cy.get('.inventory_item_price').should('contain','$7.99')
    cy.get(':nth-child(2) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should('contain','$9.99')
  })
})