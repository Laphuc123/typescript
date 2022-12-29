import { Link, Outlet, useNavigate } from 'react-router-dom';
import Banner from '../../common/banner/Banner';
import { schemaLogin } from '../../common/schema/schemaLogin';
import { Form, Input } from "antd";
import { Formik } from 'formik';
interface FormValues {
    email: string,
    password: string,
};
function Login() {
    const navigate = useNavigate()
    const handleSubmit = (data: FormValues) => {
        navigate('/dashboard');
    };
    return (
        <>
            <div>
                <div className='mt-[40px] mb-[7px]'>
                    <Banner />
                </div>
                <div className='w-[227px] mx-auto text-center mb-[17px]'>
                    <p className='text-[16px] font-[400]  leading-[27.77px] mb-[7px]'>Welcome back to</p>
                    <p className='text-[18px] font-[500]  leading-[27.77px]'>OUR REMINDER</p>
                </div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={schemaLogin}
                    onSubmit={(values) => {
                        handleSubmit(values);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <Form onFinish={handleSubmit} className="w-[325px] mx-auto gap-y-[21px] flex flex-col">
                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter your email"
                                    className="w-full h-[51px] rounded-[22px] pl-[30px] placeholder:text-[16px] font-[400] leading-[17.83px]"
                                />
                                <p className='border-1 h-[10px] mt-2 ml-5'>{errors.email && touched.email && (
                                    <div style={{ color: 'red' }}>{errors.email}</div>
                                )}</p>
                            </div>
                            <div>
                                <Input.Password
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="w-full h-[51px] rounded-[22px] pl-[30px] placeholder:text-[16px] font-[400] leading-[17.83px]"
                                />
                                <p className='border-1 h-[10px] mt-2 ml-5'>{errors.password && touched.password && (
                                    <div style={{ color: 'red' }}>{errors.password}</div>
                                )}</p>
                            </div>
                            <button type="submit" className='flex justify-center items-center bg-gradient-to-r from-[#F4C27F] to-[#D8605B] w-[315px] h-[56px] mx-auto rounded-full drop-shadow-3xl gap-x-2 hover:opacity-[0.7]' disabled={isSubmitting}>
                                <p className='text-white'>Login</p>
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className='flex justify-center items-center gap-x-1 pb-[42px]'>
                    <p>Don’t have an account ?</p>
                    <Link to="/registration"><p className='text-[#D8605B]'>Sign Up</p></Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default Login