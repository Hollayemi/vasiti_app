import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/images/png/Vasiti-Logo-black 1.png';
const Header = () => {
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
                        <ul className="flex fixed w-48 -mr-48 md:w-auto shadow md:shadow-none md:relative bg-white md:bg-transparent right-0 top-0  flex-col md:flex-row h-full items-center z-50 md:h-[50px] py-2 text-xs">
                            <li className="h-10 sm:20 m-2 lg:w-24  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                                ABOUT US
                            </li>
                            <li className="h-10 sm:20 m-2 lg:w-24  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                                STORIES
                            </li>
                            <li className="h-10 sm:20 m-2 lg:w-24  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                                CONTACT
                            </li>
                            <li className="h-10 sm:20 m-2 lg:w-24  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                                LOG IN
                            </li>
                            <li className="h-10 bg-orange-500 text-white px-3 shadow-md rounded sm:20 m-2 lg:w-24  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center hover:text-orange-500 cursor-pointer">
                                SIGN UP
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to="/share-story">
                    <i className=" h-16 flex items-center text-xl text-black block md:hidden">
                        <FaBars />
                    </i>
                </Link>
            </div>
            <div className="flex justify-center w-full border-b border-gray-100 shadow-md hidden md:block">
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
