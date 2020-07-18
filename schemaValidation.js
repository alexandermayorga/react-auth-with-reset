const registerSchemaValidator = {
    username: {
        in: ['body'],
        isLength: {
            errorMessage: 'Username should be at least 4 chars long',
            // Multiple options would be expressed as an array
            options: { min: 4 }
        },
        isAlpha: true,
        trim: true
    },
    firstname: {
        in: ['body'],
        isLength: {
            errorMessage: 'First Name should be at least 4 chars long',
            // Multiple options would be expressed as an array
            options: { min: 1 }
        },
        trim: true
    },
    lastname: {
        in: ['body'],
        isLength: {
            errorMessage: 'Last Name should be at least 4 chars long',
            // Multiple options would be expressed as an array
            options: { min: 1 }
        },
        trim: true
    },
    email: {
        in: ['body'],
        errorMessage: 'Email is not a valid email address',
        isEmail: true,
        normalizeEmail: {
            options: [{ gmail_remove_dots: false }]
        }
    },
    password: {
        in: ['body'],
        isLength: {
            errorMessage: 'Password should be at least 5 chars long',
            // Multiple options would be expressed as an array
            options: { min: 5 }
        }
    }
}

const loginSchemaValidator = {
    username: {
        in: ['body'],
        isLength: {
            errorMessage: 'Username should be at least 4 chars long',
            // Multiple options would be expressed as an array
            options: { min: 4 }
        },
        trim: true
    },
    email: {
        in: ['body'], 
        errorMessage: 'Email is not a valid email address',
        isEmail: true,
        normalizeEmail: {
            options: [{ gmail_remove_dots: false }]
        }
    },
    password: {
        in: ['body'],
        isLength: {
            errorMessage: 'Password should be at least 5 chars long',
            // Multiple options would be expressed as an array
            options: { min: 5 }
        }
    }
}


//Export the model
module.exports = { loginSchemaValidator }