export const createPet = (petData) => {
    return cy.request({
        method: 'POST',
        url: '/pet',
        body: petData,
        failOnStatusCode: false
    });
};

export const getPetById = (petId) => {
    return cy.request({
        method: 'GET',
        url: `/pet/${petId}`,
        failOnStatusCode: false
    });
};

export const updatePet = (petData) => {
    return cy.request({
        method: 'PUT',
        url: '/pet',
        body: petData,
        failOnStatusCode: false
    });
};

export const deletePetById = (petId) => {
    return cy.request({
        method: 'DELETE',
        url: `/pet/${petId}`,
        failOnStatusCode: false
    });
};
