import * as yup from 'yup';


export const schemaLogin = yup
    .object().shape({
        email: yup
            .string()
            .email("Email must be a valid email")
            .required(),
        password: yup
            .string()
            .min(8, "password is too short - minimum 8 characters")
            // .matches(/[a-zA-Z]/, "password can only contain latin letters")
            .required(),   
    })
    .required();