import React from 'react';
import HomeWrapper from './HomeWrapper';
import Image1 from '../../assets/images/png/Testimonial image 1.png';
import Image2 from '../../assets/images/png/black-beautiful-ladies-smiling 1.png';
import Person1 from '../../assets/images/png/Ellipse 22.png';
import Person2 from '../../assets/images/png/Ellipse 23.png';
import Person3 from '../../assets/images/png/Ellipse 24.png';
import { ImageNote, Testimonials } from './Components';
import Footer from './Footer';

const Home = () => {
    return (
        <HomeWrapper>
            <div className="h-[calc(100vh-100px)] overflow-hidden flex items-center justify-center">
                <div className="w-5/6 flex flex-col md:flex-row items-center justify-evenly">
                    <div className="w-full md:w-1/2">
                        <h5 className="mt-16 md:mt-0">
                            <strong className="strongHeader text-2xl sm:text-3xl mt-20 md:text-4xl font-black text-black">
                                Amazing <br /> Experiences from Our <br />{' '}
                                Wonderful Customers
                            </strong>
                            <p className="text-sm text-gray-500 mt-5 w-68 max-w-[400px]">
                                Here is what customers and vendors are saying
                                about us, you can share your stories with us
                                too.
                            </p>
                        </h5>
                    </div>
                    <div className="w-full mt-4 md:mt-0 md:w-1/2 h-68 relative flex justify-center">
                        <div className="absolute w-full h-full rounded-full bg-orange-100 left-0 top-0"></div>
                        <img
                            src={Image1}
                            className="w-[470px] z-40"
                            alt="img-here"
                        />
                    </div>
                </div>
            </div>
            <ImageNote
                image={Image2}
                heading="Tolu & Joy’s Experience"
                backdrop={true}
                note="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
            />
            <div className="flex items-center justify-center pt-5 flex-wrap">
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person3}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person1}
                        name="Joseph Ike"
                        location="ikeja"
                        type="customer"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person3}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person2}
                        name="Joseph Ike"
                        location="ikeja"
                        type="customer"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person1}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person2}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
            </div>
            <ImageNote
                image={Image2}
                heading="Tolu & Joy’s Experience"
                second={true}
                note="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
            />
            <div className="flex items-center justify-center pt-5 flex-wrap">
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person3}
                        name="Joseph Ike"
                        location="ikeja"
                        type="customer"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person1}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person3}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person2}
                        name="Joseph Ike"
                        location="ikeja"
                        type="customer"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person1}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person2}
                        name="Joseph Ike"
                        location="ikeja"
                        type="customer"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
            </div>

            <Footer />
        </HomeWrapper>
    );
};

export default Home;
