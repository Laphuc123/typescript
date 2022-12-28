import { Link, Outlet, useNavigate } from 'react-router-dom';
import Banner from '../../common/banner/Banner';
import { Form, Input } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from '../../common/schema/schemaLogin';
import { useForm, Controller } from 'react-hook-form';
type FormValues=
    {
        email: string,
        password: string,
    }
function Login() {
    const navigate = useNavigate()
    const {
        handleSubmit,
        formState: { errors },
        control,
        reset,
    } = useForm<FormValues>({
        // mode: "onchange",
        reValidateMode: "onChange",
        resolver: yupResolver(schemaLogin),
    });
    const onSubmit = () => {
        reset();
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
                <Form onFinish={handleSubmit(onSubmit)} className='w-[325px] mx-auto gap-y-[21px] flex flex-col'>
                    <div className='w-[325px] mx-auto gap-y-[21px] flex flex-col'>
                        <div className="from">
                            <Controller
                                control={control}
                                name="email"
                                render={({ field }) => <Input {...field} className='w-full h-[51px] rounded-[22px] pl-[30px] placeholder:text-[16px] font-[400] leading-[17.83px]' placeholder="Enter your email" />}
                            />
                        </div>
                        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                        <div className="from">
                            <Controller
                                control={control}
                                name="password"
                                render={({ field }) => <Input.Password {...field} className='w-full h-[51px] rounded-[22px] pl-[30px] placeholder:text-[16px] font-[400] leading-[17.83px]' placeholder="Enter password" />}
                            />
                        </div>
                        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                    </div>
                    <div className='mx-auto mt-[43px] mb-[21px]'>
                        <button type="submit" className='flex justify-center items-center bg-gradient-to-r from-[#F4C27F] to-[#D8605B] w-[315px] h-[56px] mx-auto rounded-full drop-shadow-3xl gap-x-2 hover:opacity-[0.7]'><p className='text-white'>Sign in</p> </button>
                    </div>
                </Form>
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