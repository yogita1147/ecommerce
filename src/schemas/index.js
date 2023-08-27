import * as Yup from 'yup';

export const signUpSchema=Yup.object(
    {
        name:Yup.string().min(3).max(23).required("Please enter your name"),
        email:Yup.string().email().required("PLease enter Your email"),
        password:Yup.string().min(6).required("please enter your password"),
        confirm_password:Yup.string().oneOf([Yup.ref("password"),null],"password must match").required('confirm password is required'),
    }
)

