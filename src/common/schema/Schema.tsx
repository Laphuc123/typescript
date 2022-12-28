import * as yup from 'yup';

// let yup = require('yup')

export const schema = yup
    .object().shape({
        name: yup
            .string()
            .min(8, "name is too short - minimum 8 characters")
            .max(20)
            .required(),
        email: yup
            .string()
            .email("Email must be a valid email")
            .required(),
        password: yup
            .string()
            .min(8, "password is too short - minimum 8 characters")
            // .matches(/[a-zA-Z]/, "password can only contain latin letters")
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