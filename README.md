# sauceDemo

You are tasked with developing an automated test suite for Sauce labs demo website. Your automation test suite should cover the customer flow of selecting 3 random items and completing the checkout flow.



I approached this problem by using Cypress automation testing tool since it is the tool recommended for the position.

There were a lot of ways to cover multiple edge cases but since the pdf file suggested no negative scenario, I decided to not cover them and save time. 



Note: This test simply logs in to saucedemo.com --> chooses 3 random products --> checks out --> fills in credentials --> finishes



A quick user flow (what the test does)

1. Visit the URL saucedemo.com
2. Login with the credentials given
3. Asserts successful login by checking the URL and checking if the inventory.html exists
4. Selects 3 random products and clicks their "Add to cart" buttons
5. Assert the cart has 3 items
6. Asserts the URL is in the cart.html page
7. Clicks checkout button
8. Enters the credentials as given in the code
9. Clicks checkout
10. Clicks back to products


    

**Assertions include:** 

* **Login success**
* **Cart count**
* **Cart page** 





**Expected output:** 

When the test passes/finishes you should see the entire flow from login to checkout on the left side and in order to confirm the assertions are successful you should see a green font on the left side.







project-root/

├─ cypress/

│ └─ e2e/

│ └─ saucedemo.cy.js # The test file

├─ package.json

└─ README.md



Prerequisites

* Node.js
* npm
* A terminal or command line
* cypress





To run the tests with an interactive GUI

* Open the command line
* run "npm install cypress" (if npm is installed)
* Run "npx cypress open "cypress/e2e/saucedemo.cy.js"





Notes of improvement:

⦁	Using a lot of cy.wait(): In order to slow down the UI

⦁	Wasted a lot of time figuring out the id's of the contents in the page: Not used to cypress but would get better since it's simple

* For bigger projects, probably would add more assertions



