/// <reference types="cypress" />
import petData from '../../fixtures/test_data/petData';
import responseCodes from '../../fixtures/test_data/responseCodes';
import { getPetById } from '../../support/petApiCalls';

let apiCodes = responseCodes.getPetByIdCodes;
let findPetData = petData.filter(pet => pet.testTags && pet.testTags.includes("find"));

describe('PetStore - Find Pet by ID', () => {
    findPetData.forEach((pet, index) => {
        delete pet.testTags; //remove test tags from request body
        it(`should find pet by ID: ${pet.id} (Test Case #${index+1})`, () => {
            getPetById(pet.id).then((response) => {
                if (typeof pet.id === 'number') {
                    // Positive case - valid pet ID
                    expect(response.status).to.eq(apiCodes.successCode);
                    expect(response.body).to.have.property('id', pet.id);
                    expect(response.body).to.have.property('name', pet.name);
                } else {
                    // Negative case - invalid pet ID
                    expect(response.status).to.eq(apiCodes.petNotFoundCode);
                }
            });
        });
    });
});
