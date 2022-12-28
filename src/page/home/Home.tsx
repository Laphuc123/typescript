import { Outlet, Link } from 'react-router-dom';
import Banner from '../../common/banner/Banner';

const Home = () => {
    return (
        <>
        <div>
            <div className='mt-[132px] mb-[13px]'>
                <Banner />
            </div>
            <div className='text-center mb-[119px]'>
                <p className='text-[16px] font-[400]  leading-[115.69%]'>Welcome to</p>
                <p className='text-[18px] font-[500]  leading-[115.69%] mb-[13px]'>OUR REMINDER</p>
                <p className='text-[12px] font-[400]  leading-[16.7px] w-[281px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc.</p>
            </div>
            <div className='pb-[56px]'>
                <Link to="/registration"><button className='flex justify-center items-center bg-gradient-to-r from-[#F4C27F] to-[#D8605B] w-[315px] h-[56px] mx-auto rounded-full drop-shadow-3xl gap-x-2 hover:opacity-[0.7]'><p className='text-white'>Get Start</p><img src="" alt=""></img> </button></Link>
            </div>
        </div>
        <Outlet />
    </>
    )
}

export default Home