import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/images/png/Vasiti-Logo-black 1.png';
const Header = () => {
    const [open, setOpen] = useState('-mr-48');
    return (
        <section>
            <div className="flex justify-center">
                <div className="flex items-center h-16 w-4/5 justify-between border-b border-gray-100">
                    <div>
                        <Link to="/share-story">
                            <img src={Logo} alt="logo" width={120} />
                        </Link>
                    </div>
                    <div className="w-48 md:w-auto">
                        <ul
                            className={`flex fixed w-48 ${open} md:w-auto md:mr-10 shadow md:shadow-none md:relative bg-white md:bg-transparent right-0 top-0  flex-col md:flex-row h-full items-center z-50 md:h-[50px] py-2 text-xs`}
                        >
                            <i
                                className="md:hidden absolute top-2 left-2 w-6 h-6 flex items-center justify-center rounded-full bg-orange-200"
                                onClick={() => setOpen('-mr-48')}
                            >
                                <FaTimes />
                            </i>
                            <li className="h-10 px-2 sm:20 m-2 lg:w-24  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                                ABOUT US
                            </li>
                            <li className="h-10 px-2 sm:20 m-2 lg:w-24  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                                STORIES
                            </li>
                            <li className="h-10 px-2 sm:20 m-2 lg:w-24  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                                CONTACT
                            </li>
                            <li className="h-10 px-2 sm:20 m-2 lg:w-24  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                                LOG IN
                            </li>
                            <li className="h-10 px-2 bg-orange-500 text-white px-3 shadow-md rounded sm:20 m-2 lg:w-24  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                                SIGN UP
                            </li>
                        </ul>
                    </div>
                </div>

                <i
                    onClick={() => setOpen('mr-0')}
                    className=" h-16 flex items-center text-xl text-black block md:hidden"
                >
                    <FaBars />
                </i>
            </div>
            <div className="flex justify-center w-full border-b border-gray-100 shadow-md hidden md:flex">
                <ul className="flex items-center h-[35px] py-2 text-xs">
                    <li className="h-full w-20 m-2 md:w-24  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                        MARKET PLACE
                    </li>
                    <li className="h-full w-24 m-2 md:w-32  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                        WHOLESALE CENTER
                    </li>
                    <li className="h-full w-24 m-2 md:w-32  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                        SELLER CENTER
                    </li>
                    <li className="h-full w-20 m-2 md:w-32  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                        SERVICES
                    </li>
                    <li className="h-full w-20 m-2 md:w-32  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                        EVENTS
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Header;
