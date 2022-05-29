import React from 'react';
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { Stack } from 'rsuite';

const Footer = () => {
    return (
        <section className="bg-slate-900 mt-10 pb">
            <div className="flex flex-col lg:flex-row justify-evenly mt-10 pt-10 px-5">
                <div className="w-full lg:min-w-[300px] mt-10 lg:w-60">
                    <h5 className="text-white">Tranding Brands</h5>
                    <Stack>
                        <div className="px-3 m-2 py-1 rounded shadow bg-slate-800 text-slate-300">
                            State
                        </div>
                        <div className="px-3 py-1 rounded shadow bg-slate-800 text-slate-300">
                            Tranding
                        </div>
                    </Stack>
                </div>
                <div className="flex w-full flex-wrap lg:flex-nowrap lg:w-[calc(100%-300px)] justify-between md:justify-evenly">
                    <div className="w-40 md:min-w-[200px] mt-10">
                        <div className="w-full text-left font-  text-sm text-blue-300 border-b-2 pb-1 border-blue-400 pl-3">
                            About us
                        </div>
                        <div className="flex flex-col mt-3">
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Terms and Conditions
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Privacy Policy
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                About xMart
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Refund Policy
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Cookie Policy
                            </h4>
                        </div>
                    </div>
                    <div className="w-40 md:min-w-[200px] mt-10">
                        <div className="w-full text-left font-  text-sm text-blue-300 border-b-2 pb-1 border-blue-400 pl-3">
                            Support
                        </div>
                        <div className="flex flex-col mt-3">
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                FAQ
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Safty tips
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                support
                            </h4>
                        </div>
                    </div>
                    <div className="w-40 md:min-w-[200px] mt-10">
                        <div className="w-full text-left font-  text-sm text-blue-300 border-b-2 pb-1 border-blue-400 pl-3">
                            Contact us
                        </div>
                        <div className="flex flex-col mt-3">
                            <h4 className="leading-5 flex items-center py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                <i className="w-8">
                                    <FaEnvelope />
                                </i>
                                <p>info@xMart.com</p>
                            </h4>
                            <h4 className="leading-5 flex items-center py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                <i className="w-8">
                                    <FaPhoneAlt />
                                </i>
                                <p>034-8529-594</p>
                            </h4>
                            <h4 className="leading-5 flex items-center py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-auto px-1">
                                <i className="w-8">
                                    <FaLocationArrow />
                                </i>
                                <p>
                                    Jakande estate, Isolo, <br /> Lagos State,
                                    Nigeria.
                                </p>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center h-10 justify-center text-slate-500 bg-slate-800 mt-10">
                We make it possible
            </div>
        </section>
    );
};

export default Footer;
