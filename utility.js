var validator = require('isvalid');
var ValidatorResponse = require('./validatorResponse');

var Utility = function (){};

//This method acts as a validation bridge between routes and validation_schema
Utility.validateRequest = function(schema,errorCallback){
    return function validate(request,response,next){
        validator((request.body || request.params),
            schema,
            function(err){
                if (err) {
                    if (errorCallback !== undefined) {
                        errorCallback(request, response);
                    }

                    var validatorResponse = new ValidatorResponse(response);
                    validatorResponse.setStatusCode(err.message.errorCode)
                        .setResponseBody({error: err.message.message})
                        .send();
                } else {
                    next();
                }
            }
        );
    };
};

module.exports = Utility;