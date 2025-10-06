describe ('sauceDemo customer flow', () => {

    //Access the website www.saucedemo.com and login with the correct username and password
    it('Saucedemo testing functions', () => {
        cy.visit('https://www.saucedemo.com/')
        
        cy.get('#user-name').type('standard_user')
        cy.wait(1000)

        cy.get('#password').type('secret_sauce')
        cy.wait(1000)

        cy.get('#login-button').click()
        cy.wait(1000)

        cy.url().should('include', '/inventory.html') // Assertion 1 to check URL and inventory page
        cy.get('.inventory_list').should('exist');
        cy.wait(1000)

      // Add items to a list and then choose 3 products to add to the cart
      cy.get('.inventory_item').then(items => {
      const totalItems = items.length;
      const randomIndexes = [];

      while (randomIndexes.length < 3) {
        const random = Math.floor(Math.random() * totalItems); // rounding down

        if (!randomIndexes.includes(random)) {
          randomIndexes.push(random);
        }
      }


      // for each random product, wrapt it in cypress command and click the add to cart button
      randomIndexes.forEach(i => {
        cy.wrap(items[i]).find('button').click();
        cy.wait(1000)
      });
    });
        
        //Go to the cart and checkout
        cy.get('.shopping_cart_badge').should('have.text', '3')  // Assertion 2 to check if the cart has 3 items
      
        cy.get('.shopping_cart_link').click();
        cy.wait(1000)

        cy.url().should('include', '/cart.html') // Assertion 3 to check if we are in the cart page
        cy.get('.checkout_button').click();
        cy.get('#first-name').type('Saud');
        cy.wait(1000)

        cy.get('#last-name').type('Alqabi');
        cy.wait(1000)

        cy.get('#postal-code').type('13244');
        cy.wait(1000)

        cy.get('#continue').click();
        cy.wait(1000)

        cy.get('.cart_list').should('exist');
        cy.wait(3000)

        cy.get('#finish').click();
        cy.wait(3000)

        cy.get('#back-to-products').click();

        
});
})