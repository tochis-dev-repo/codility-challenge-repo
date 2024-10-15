/// <reference types="cypress" />
import petData from '../../fixtures/test_data/petData';
import responseCodes from '../../fixtures/test_data/responseCodes';
import { deletePetById } from '../../support/petApiCalls';

let apiCodes = responseCodes.deletePetCodes;

describe('PetStore - Delete Pet', () => {
    petData.forEach((pet, index) => {
        it(`should delete pet by ID: ${pet.id} (Test Case #${index})`, () => {
            deletePetById(pet.id).then((response) => {
                if (typeof pet.id === 'number') {
                    // Positive case - valid pet ID
                    expect(response.status).to.eq(apiCodes.successCode);
                    expect(response.body.message).to.eq(`${pet.id}`);
                } else {
                    // Negative case - invalid pet ID
                    expect(response.status).to.eq(apiCodes.petNotFoundCode);
                }
            });
        });
    });
});
