/// <reference types="cypress" />
import petData from '../../fixtures/test_data/petData';
import responseCodes from '../../fixtures/test_data/responseCodes';
import { createPet } from '../../support/petApiCalls';

let apiCodes = responseCodes.creatPetCodes;

describe('PetStore - Create Pet', () => {
    petData.forEach((pet, index) => {
        it(`should create pet: ${pet.name || 'invalid data'} (Test Case #${index+1})`, () => {
            createPet(pet).then((response) => {
                if (pet.name && pet.photoUrls && typeof pet.id === 'number') {
                    // Positive case - valid pet data
                    expect(response.status).to.eq(apiCodes.successCode);
                    expect(response.body).to.have.property('id', pet.id);
                    expect(response.body).to.have.property('name', pet.name);
                } else {
                    // Negative case - invalid pet data
                    expect(response.status).to.eq(apiCodes.invalidInputCode);
                }
            });
        });
    });
});
