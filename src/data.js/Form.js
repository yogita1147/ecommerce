import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

function Form()
{
    const initialValues={
        name:'',
        email:'',
        confirm_password:'',
        password:''
    }
    const {values,errors,handleChange,handleBlur,handleSubmit,touched}=useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values,action)=>(console.log(values), action.resetForm())
    }
    
    )
    // console.log(errors);
   

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' id='name' onChange={handleChange} onBlur={handleBlur}/><br/><br/>{errors.name && touched.name?<p>{errors.name}</p>:null}
            <input type='text' name='email' id='email' onChange={handleChange} onBlur={handleBlur}/><br/><br/>{errors.email && touched.email?<p>{errors.email}</p>:null}
            <input type='password' name='password' id='password' onChange={handleChange} onBlur={handleBlur} /><br/><br/>{errors.password && touched.password?<p>{errors.password}</p>:null}
            <input type='password' name='confirm_password' id='confirm_password' onChange={handleChange} onBlur={handleBlur} /><br/><br/>{errors.confirm_password && touched.confirm_password?<p>{errors.confirm_password}</p>:null}
            <input type='submit' onSubmit={handleSubmit}/>

        </form>
        </>
    )
}
export default Form;