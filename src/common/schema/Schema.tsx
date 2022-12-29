import * as yup from 'yup';

// let yup = require('yup')

export const schema = yup
    .object().shape({
        name: yup
            .string()
            .max(20)
            .required(),
        email: yup
            .string()
            .email("Email must be a valid email")
            .required(),
        password: yup
            .string()
            .min(8, 'Password must be 8 characters long')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol')
            .required(),
        confirmPassword: yup
            .string()
            .when("password", {
                is: (val: string | any[]) => (val && val.length > 0 ? true : false),
                then: yup.string().oneOf(
                    [yup.ref("password")],
                    "Both password need to be the same"
                )
            })

            .required(),
    })
    .required();