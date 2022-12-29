import { Outlet, Link, useNavigate } from 'react-router-dom';
import Banner from '../../common/banner/Banner';
import { Form, Input } from "antd";
import { schema } from '../../common/schema/Schema';
import { pushData } from '../../services/GetData';
import { Formik } from 'formik';

type FormValues =
    {
        name: string,
        email: string,
        password: string,
        confirmPassword: string,
    }

function Registration() {
    const navigate = useNavigate()
    const handleSubmit = async (data: FormValues) => {
        const { name, email, password, confirmPassword } = data;
        await pushData("users", { name, email, password, confirmPassword })
        navigate('/login');
    }
    return (
        <>
            <div>
                <div className='mt-[40px] mb-[7px]'>
                    <Banner />
                </div>
                <div className='w-[227px] mx-auto text-center mb-[17px]'>
                    <p className='text-[24px] font-[400]  leading-[27.77px] mb-[7px]'>Get’s things done with TODO</p>
                    <p className='text-[12px] font-[400]  leading-[23px]'>Let’s help you meet up your tasks</p>
                </div>
                <Formik
                    initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
                    validationSchema={schema}
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
                        <Form onFinish={handleSubmit} className='w-[325px] mx-auto gap-y-[21px] flex flex-col'>
                            <div>
                                <Input
                                    type="name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    placeholder="Enter your name"
                                    className="w-full h-[51px] rounded-[22px] pl-[30px] placeholder:text-[16px] font-[400] leading-[17.83px]"
                                />
                                <p className='border-1 h-[10px] mt-2 ml-5'>{errors.name && touched.name && (
                                    <div style={{ color: 'red' }}>{errors.name}</div>
                                )}</p>
                            </div>
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
                            <div>
                                <Input.Password
                                    type="confirmPassword"
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    placeholder="Confirm Password"
                                    className="w-full h-[51px] rounded-[22px] pl-[30px] placeholder:text-[16px] font-[400] leading-[17.83px]"
                                />
                                <p className='border-1 h-[10px] mt-2 ml-5'>{errors.confirmPassword && touched.confirmPassword && (
                                    <div style={{ color: 'red' }}>{errors.confirmPassword}</div>
                                )}</p>
                            </div>
                            <div className='mx-auto mt-[13px] mb-[21px]'>
                                <button type="submit" className='flex justify-center items-center bg-gradient-to-r from-[#F4C27F] to-[#D8605B] w-[315px] h-[56px] mx-auto rounded-full drop-shadow-3xl gap-x-2 hover:opacity-[0.7]'><p className='text-white'>Register</p> </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className='flex justify-center items-center gap-x-1'>
                    <p>Already have an account ? </p>
                    <Link to="/login"><button className='text-[#D8605B]'>Sign in</button></Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default Registration