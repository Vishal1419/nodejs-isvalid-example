module.exports = {
    ERROR_CODES: {
        UNKNOWN_ERROR: 1000,
        INVALID_DATA_TYPE: 1001,
        REQUIRED_FIELD: 1002,
        INVALID_MINIMUM_LENGTH: 1003,
        INVALID_EMAIL: 1004
    },
    ERROR_MSGS: {
        USERS_INVALID_DATA_TYPE: "users shoudl be an Array",
        USER_INVALID_DATA_TYPE: "input should be javascript object",
        NAME_INVALID_DATA_TYPE: "name should be a string",
        EMAIL_INVALID_DATA_TYPE: "email should be a string",
        MOBILE_NO_INVALID_DATA_TYPE: "mobile_no should be a number",
        DOB_INVALID_DATA_TYPE: "date_of_birth should be a date",
        USERS_REQUIRED: "users is required",
        USER_REQUIRED: "input is required",
        NAME_REQUIRED: "name is required",
        EMAIL_REQUIRED: "email is required",
        MOBILE_NO_REQUIRED: "mobile_no is required",
        USERS_INVALID_MINIMUM_LENGTH: "there must be at least 1 user in users array",
        INVALID_EMAIL: "email is invalid"
    }
}