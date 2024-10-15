# **PetStore API Test Automation with Cypress**

This repository contains an incomplete set of API tests for the [Swagger PetStore API](https://petstore.swagger.io/). The tests cover **create**, **find**, **update**, and **delete** operations on the PetStore’s `Pet` endpoint. These tests are implemented using **Cypress** and are designed to run both locally and on a CI server.

---

## **Prerequisites**

To run this project locally, ensure you have the following installed:

1. **Node.js** (v14.x or higher recommended)
   - You can download and install Node.js from [nodejs.org](https://nodejs.org/).
   
2. **Cypress**
   - Cypress is installed as a local dependency in the project, so no need to install it globally.

3. **Git**
   - You can clone the repository using Git. 

---

## **File Structure**

Here's the file structure of the project:
*cypress/e2e/petstore_tests*
This folder houses the tests including:
- createPet.cy,js -> create pet api tests
- findPet.cy.js -> get pet by id api tests
- updatePet.cy.js -> update pet api tests
- deletePet.cy.js -> delete pet api tests

*cypress/fixtures/test_data*
This folder keeps our test data files, including:
- responseCodes.js -> this stores the various response codes used in the api documentation
- petData.js -> a collection of pet objects that are used during testing

*cypress/support/*
In this folder, there is the utility file for making api calls.
- petApiCalls.js -> this file houses the different api calls used in our tests

---

## **How to Run the Code**

### 1. **Clone the Repository**:
```
git clone https://github.com/tochis-dev-repo/codility-challenge-repo.git
cd codility-challenge-repo
```
### 2. Install Dependencies:
After navigating into the project directory, run the following command to install the necessary dependencies:
```
npm install
```
### 3. Run Tests Locally:
You can run the tests in interactive mode or headless mode.

- Interactive Mode (Runs Cypress Test Runner):
```
npx cypress open
```
- Headless Mode (CI/CD or faster local execution):
```
npx cypress run
```
### 4. Configure the Base URL (Optional):
By default, the base URL for the API is set in *cypress.config.js*. If you need to run the tests against a different environment (e.g., staging, production), you can modify the baseUrl in the *cypress.config.js* file or set it dynamically using environment variables when running tests.

```
const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://petstore.swagger.io/v2',  // Use env variable or fallback to default
  },
});
```
#License
This project is licensed under the MIT License. See the LICENSE file for details.

#Additional Resources
##[Swagger PetStore API](https://petstore.swagger.io/)
