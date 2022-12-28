import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ImgUser from '../../asset/Group4.png';
import clock from '../../asset/Group 7.png';
import more from '../../asset/plus-circle.png';
import { getTask } from "../../services/GetData";
import { Checkbox } from "antd";

type TTaskList = {
    id: string | number;
    completed: boolean;
    name: string
}

const Dashboard = () => {
    const [tasksList, setTasksList] =useState<TTaskList[]>([]);
    useEffect(()=>{
        const fetchListTodo = async () => {
            try{
                const dataListTodo =await getTask("tasks");
                setTasksList(dataListTodo);
            } catch (error){}
        };
        fetchListTodo();
    },[]);
    return (
        <>
            <div className="">
                <div>
                    <img className="mx-auto" src={ImgUser} alt=""></img>
                </div>
                <div className="text-center">
                    <p>Phuc</p>
                    <p>Phuc@gmail.com</p>
                </div>
                <div className="text-center">
                    <Link  to="/"><button className="w-[89px] bg-[#F4C27F] rounded-full text-[10px] font-[400]">Log Out</button></Link>
                </div>
                <div className="bg-white  pb-[102px] rounded-bl-[19px] rounded-br-[19px]">
                    <div className="mt-[32px] mb-[24px]">
                        <img className="mx-auto" src={clock} alt=""></img>
                    </div>
                    <div className="mb-[15px]">
                        <p className="text-[12px] font-[600] leading-[13.88px] text-center">Good Afternoon</p>
                    </div>
                    <div className="mb-[20px]">
                        <p className="text-[18px] font-[600] leading-[20.82px]">Tasks List</p>
                    </div>
                    <div className="border shadow-4xl rounded-[18px] w-[323px] mx-auto">
                        <div className="flex justify-between items-center mt-[16px] w-[90%] mx-auto mb-[19px]">
                            <div>
                                <p className="text-[14px] font-[400] leading-[16.2px] ">Tasks List</p>
                            </div>
                            <div>
                                <img src={more} alt=""></img>
                            </div>
                        </div>
                        <div className="w-[90%] mx-auto h-[150px]">
                            <div className=" overflow-hidden overflow-y-scroll h-[120px]">
                                
                                <ul>
                                {
                                    tasksList[0] && tasksList.map((todo) => {
                                        return (
                                                <li key={todo.id}>
                                                    <Checkbox defaultChecked = {todo.completed} />
                                                    <span className="ml-[10px]">
                                                        {todo.name} 
                                                    </span>
                                                </li>
                                            )
                                    })
                                }
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Dashboard