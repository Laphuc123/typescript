import { Outlet, Link, useNavigate } from 'react-router-dom';
import Banner from '../../common/banner/Banner';
import { Form, Input } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from '../../common/schema/Schema';
import { useForm, Controller } from 'react-hook-form';
import { pushData } from '../../services/GetData';

type FormValues=
    {
        name: string, 
        email: string,
        password: string,
        confirmPassword: string,
    }

function Registration() {
    const navigate = useNavigate()
    const {
        handleSubmit,
        formState: { errors },
        control,
        reset,
    } = useForm<FormValues>({
        // mode: "onchange",
        reValidateMode: "onChange",
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormValues) => {
        const {name, email, password, confirmPassword}= data
        if (data.password === data.confirmPassword) {
            pushData("users",{name, email, password, confirmPassword})
            reset();
            navigate('/login');
        }
        else {
            alert("Mật khẩu ko giống nhau!")
        }
    };

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
                <Form onFinish={handleSubmit(onSubmit)} className='w-[325px] mx-auto gap-y-[21px] flex flex-col'>
                    <div className="name">
                        <div className="from">

                            <Controller
                                control={control}
                                name="name"
                                render={({ field }) => <Input {...field} className='w-full h-[51px] rounded-[22px] pl-[30px] placeholder:text-[16px] font-[400] leading-[17.83px]' placeholder="Enter your name" />}
                            />
                        </div>
                        {errors.name && <p style={{ color: 'red'}}>{errors.name.message}</p>}
                    </div>
                    <div className="from">
                        <Controller
                            control={control}
                            name="email"
                            render={({ field }) => <Input {...field} className='w-full h-[51px] rounded-[22px] pl-[30px] placeholder:text-[16px] font-[400] leading-[17.83px]' placeholder="Enter your email" />}
                        />
                    </div>
                    {errors.email && <p style={{ color: 'red'}}>{errors.email.message}</p>}
                    <div className="from">
                        <Controller
                            control={control}
                            name="password"
                            render={({ field }) => <Input.Password {...field}  className='w-full h-[51px] rounded-[22px] pl-[30px] placeholder:text-[16px] font-[400] leading-[17.83px]' placeholder="Enter password" />}
                        />
                    </div>
                        {errors.password && <p style={{ color: 'red'}}>{errors.password.message}</p>}
                        <div className="from">
                        <Controller
                            control={control}
                            name="confirmPassword"
                            render={({ field }) => <Input.Password {...field} className='w-full h-[51px] rounded-[22px] pl-[30px] placeholder:text-[16px] font-[400] leading-[17.83px]' placeholder="Confirm Password" />}
                        />
                    </div>
                        {errors.confirmPassword && <p style={{ color: 'red'}}>{errors.confirmPassword.message}</p>}
                    <div className='mx-auto mt-[43px] mb-[21px]'>
                        <button type="submit" className='flex justify-center items-center bg-gradient-to-r from-[#F4C27F] to-[#D8605B] w-[315px] h-[56px] mx-auto rounded-full drop-shadow-3xl gap-x-2 hover:opacity-[0.7]'><p className='text-white'>Register</p> </button>
                    </div>
                </Form>
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