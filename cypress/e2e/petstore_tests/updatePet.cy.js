/// <reference types="cypress" />
import petData from '../../fixtures/test_data/petData';
import responseCodes from '../../fixtures/test_data/responseCodes';
import { updatePet } from '../../support/petApiCalls';

let apiCodes = responseCodes.updatePetCodes;
let updatePetData = petData.filter(pet => pet.testTags && pet.testTags.includes("update"));

describe('PetStore - Update Pet', () => {
    updatePetData.forEach((pet, index) => {
        delete pet.testTags; //remove test tags from request body
        it(`should update pet: ${pet.name || 'invalid data'} (Test Case #${index+1})`, () => {
            const updatedPet = { ...pet, name: `${pet.name}_updated` };

            updatePet(updatedPet).then((response) => {
                if (pet.name && typeof pet.id === 'number') {
                    // Positive case - valid update
                    expect(response.status).to.eq(apiCodes.successCode);
                    expect(response.body).to.have.property('name', `${pet.name}_updated`);
                } else {
                    // Negative case - invalid update
                    expect(response.status).to.be.oneOf([
                        apiCodes.invalidIdCode, 
                        apiCodes.petNotFoundCode, 
                        apiCodes.validationExceptionCode]);
                }
            });
        });
    });
});
