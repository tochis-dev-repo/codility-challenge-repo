let responseSuccess = 200;
let badRequest = 400;
let notFound = 404;
let exception = 405;

const responseCodes = {
    creatPetCodes: {
        successCode:responseSuccess,
        invalidInputCode: exception
    },
    updatePetCodes:{
        successCode: responseSuccess,
        invalidIdCode: badRequest,
        petNotFoundCode: notFound,
        validationExceptionCode: exception
    },
    getPetByIdCodes:{
        successCode: responseSuccess,
        invalidIdCode: badRequest,
        petNotFoundCode: notFound
    },
    deletePetCodes:{
        successCode: responseSuccess,
        invalidIdCode: badRequest,
        petNotFoundCode: notFound
    }
}

export default responseCodes;