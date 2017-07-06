//This function acts like constructor
function validatorResponse(response){
    this.statusCode = 1000;
    this.body = [];
    this.response = response;
}

//prototype means a virtually automatically created function from which this function inherits
validatorResponse.prototype.setStatusCode = function (statusCode) {
    this.statusCode = statusCode;
    return this;
};

validatorResponse.prototype.setResponseBody = function (responseBody) {
    this.body = responseBody;
    return this;
};

validatorResponse.prototype.send = function () {
    var responseBody = {
        statusCode: this.statusCode
    };

    for (var key in this.body) {
        responseBody[key] = this.body[key];
    }

    this.response.send(responseBody);
};

module.exports = validatorResponse;
