var constants = require('./constants');

/*
 * Sample data:
 * {
 *      "users": [
 *          {
 *              "name": "Vishal",
 *              "email": "vishal.sherathiya@pixometryinfosoft.com",
 *              "mobile_no" 9978259999
 *          },
 *          {
 *              "name": "Jay",
 *              "email": "jay.patel@pixometryinfosoft.com",
 *              "mobile_no" 4567891230
 *          }
 *       ]
 * }
 * 
 * Requirements: 
 *   - name should be string,
 *   - email should be string,
 *   - mobile_no should be number,
 *   - all fields are required
 */

module.exports = {
    user_list: {
        type: Object,
        schema: {
            users: {
                type: Array,
                required: true,
                len: '1-',
                schema: {
                    type: Object,
                    unknownKeys: 'allow',
                    schema: {
                        name: {
                            type: String,
                            required: true,
                            match: /^.+$/,
                            trim: true,
                            errors: {
                                type: {
                                    errorCode: constants.ERROR_CODES.INVALID_DATA_TYPE,
                                    message: constants.ERROR_MSGS.NAME_INVALID_DATA_TYPE
                                },
                                required: {
                                    errorCode: constants.ERROR_CODES.REQUIRED_FIELD,
                                    message: constants.ERROR_MSGS.NAME_REQUIRED
                                },
                                match: {
                                    errorCode: constants.ERROR_CODES.INVALID_MINIMUM_LENGTH,
                                    message: constants.ERROR_MSGS.NAME_REQUIRED
                                }
                            }
                        },
                        email: {
                            type: String,
                            required: true,
                            match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            trim: true,
                            errors: {
                                type: {
                                    errorCode: constants.ERROR_CODES.INVALID_DATA_TYPE,
                                    message: constants.ERROR_MSGS.EMAIL_INVALID_DATA_TYPE
                                },
                                required: {
                                    errorCode: constants.ERROR_CODES.REQUIRED_FIELD,
                                    message: constants.ERROR_MSGS.EMAIL_REQUIRED
                                },
                                match: {
                                    errorCode: constants.ERROR_CODES.INVALID_EMAIL,
                                    message: constants.ERROR_MSGS.INVALID_EMAIL
                                }
                            }
                        },
                        mobile_no: {
                            type: Number,
                            required: true,
                            errors: {
                                type: {
                                    errorCode: constants.ERROR_CODES.INVALID_DATA_TYPE,
                                    message: constants.ERROR_MSGS.MOBILE_NO_INVALID_DATA_TYPE
                                },
                                required: {
                                    errorCode: constants.ERROR_CODES.REQUIRED_FIELD,
                                    message: constants.ERROR_MSGS.MOBILE_NO_REQUIRED
                                }
                            }
                        }
                    },
                    errors: {
                        type: {
                            errorCode: constants.ERROR_CODES.INVALID_DATA_TYPE,
                            message: constants.ERROR_MSGS.USER_INVALID_DATA_TYPE
                        },
                        required: {
                            errorCode: constants.ERROR_CODES.REQUIRED_FIELD,
                            message: constants.ERROR_MSGS.USER_REQUIRED
                        }                    
                    }
                },
                errors: {
                    type: {
                        errorCode: constants.ERROR_CODES.INVALID_DATA_TYPE,
                        message: constants.ERROR_MSGS.USERS_INVALID_DATA_TYPE
                    },
                    required: {
                        errorCode: constants.ERROR_CODES.REQUIRED_FIELD,
                        message: constants.ERROR_MSGS.USERS_REQUIRED                
                    },
                    len: {
                        errorCode: constants.ERROR_CODES.INVALID_MINIMUM_LENGTH,
                        message: constants.ERROR_MSGS.USERS_INVALID_MINIMUM_LENGTH
                    }
                }
            }
        }
    }
}
