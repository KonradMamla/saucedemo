# Cypress Login And Inventory Page Tests

This repository contains end-to-end tests for the login functionality and inventory page of the [SauceDemo](https://www.saucedemo.com/) website using the Cypress testing framework.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Manual Test Scenarios](#manual-test-scenario)
- [Project Structure](#project-structure)
- [Authors](#authors)
- [License](#license)

## Prerequisites

Before running the tests, ensure that you have the following prerequisites installed:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your system.
- Dependencies: Install project dependencies by running `npm install`.

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.

## Running Tests

To run the tests, follow these steps:

1. Open your terminal.
2. Navigate to the project directory.
3. Run `npx cypress open`.
4. In the Cypress test runner, click on the test you want to execute.

## Test Scenarios

The following test scenarios have been implemented:

1. **Login Functionality:** 

\+ Verify that a user can successfully log in with valid credentials

\+ Verify that a user cannot log in with invalid credentials. 

\+ Verify that appropriate error messages are displayed for invalid credentials. 

\+ Verify that a user can log out successfully. 

\+ Verify that a user is redirected to the login page when logging out. 

\+ Verivy that a user is log out automatically after a period of inactivity. 

\+ Verify that login form has correct validation.


2. **Product Page:**
- Verify correct display of all products on the home page. 

\+ Verify that the products display correctly when filtered by name and price. 

- Verify navigation to individual product pages and viewing product details.
- Verify adding products to the shopping cart.
- Verify removing products from the shopping cart.
- Verify the cart reflects the correct products and quantities.

3. **Checkout and Purchasing:**
- Verify navigation to the checkout page.
- Verify correct display of products and quantities on the checkout page.
- Verify entering shipping information.
- Verify entering payment information.
- Verify completing a successful purchase.
- Verify appropriate error messages for missing or incorrect information.
- Verify canceling a purchase and returning to the home page.

## Manual Test Scenarios

Manual test scenarios have been documented for the following test areas:

- **Login Functionality:** Manual tests cover user login scenarios, including valid and invalid login attempts, error messages, and user interactions.
- **Product Page:** Additional manual test scenarios are available for testing the product page, such as product display and filtering.

For detailed descriptions of manual test scenarios, please refer to the test case documentation in the project repository.


## Project Structure

- `/cypress`: Contains Cypress configuration files and test scripts.
- `/cypress/e2e`: Contains the test scenarios.
- `/cypress/support`: Contains support files and custom commands.
- `/cypress/fixtures`: Contains sample data for testing.
- `/cypress/PageObjects`: Contains classes that represent various pages and components on application pages.
- `/manual_test_cases`: Contains manual test scenarios

## Authors

- Konrad Mamla [LinkedIn](https://www.linkedin.com/in/konrad-mamla)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
