export const createPet = (petData) => {
    return cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet',
        body: petData
    });
};

export const getPetById = (petId) => {
    return cy.request({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/pet/${petId}`,
        failOnStatusCode: false
    });
};

export const updatePet = (petData) => {
    return cy.request({
        method: 'PUT',
        url: 'https://petstore.swagger.io/v2/pet',
        body: petData
    });
};

export const deletePetById = (petId) => {
    return cy.request({
        method: 'DELETE',
        url: `https://petstore.swagger.io/v2/pet/${petId}`,
        failOnStatusCode: false
    });
};
