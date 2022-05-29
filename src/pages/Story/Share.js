import React, { useState } from 'react';
import {
    InputFile,
    InputRadio,
} from '../../components/elements/Input/InputFile';
import InputGroup from '../../components/elements/Input/InputGroup';
import TextAreaGroup from '../../components/elements/Input/TextAreaGroup';
import { FaFileSignature } from 'react-icons/fa';
const Share = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        story: '',
        interaction: '',
    });
    let newValue = {};
    function updateValue(newVal, variable) {
        variable === 'fname' && (newValue = { firstName: newVal });
        variable === 'lname' && (newValue = { lastName: newVal });
        variable === 'story' && (newValue = { story: newVal });
        variable === 'interaction' && (newValue = { interaction: newVal });
        setFormData({
            ...formData,
            ...newValue,
        });
    }
    return (
        <section className="flex items-center justify-center bg-gray-100 absolute h-full top-0 left-0 w-full">
            <div className="w-full m-2 sm:max-w-[450px] bg-white rounded-lg px-4 py-10">
                <h3 className="font-black text-xl md:text-2xl text-black ml-6 md:ml-12 mb-10">
                    Share your amazing story!
                </h3>
                <div>
                    <InputFile
                        label="Choose image"
                        icon={<FaFileSignature />}
                        name="uploadProfilePic2"
                    />
                </div>
                <div className="flex items-center">
                    <div className="px-2 w-1/2 mt-2">
                        <InputGroup
                            label="First Name"
                            required={true}
                            name="fName"
                            placeholder=" "
                            onChange={(e) =>
                                updateValue(e.target.value, 'fName')
                            }
                        />
                    </div>
                    <div className="px-2 w-1/2 mt-2">
                        <InputGroup
                            label="Last Name"
                            required={true}
                            name="Lname"
                            placeholder=" "
                            onChange={(e) =>
                                updateValue(e.target.value, 'Lname')
                            }
                        />
                    </div>
                </div>
                <TextAreaGroup
                    label="Share your story"
                    placeholder=" "
                    required={true}
                    onChange={(e) => updateValue(e.target.value, 'story')}
                />
                <div className="flex text-xs my-3 items-center">
                    <h5>What did you interact with Vasiti as?</h5>
                    <div
                        onChange={(e) =>
                            updateValue(e.target.value, 'interaction')
                        }
                        className="flex md:flex items-center"
                    >
                        <InputRadio
                            name="Reason"
                            value="Customer"
                            label="Customer"
                        />
                        <InputRadio
                            name="Reason"
                            value="Vendor"
                            label="Vendor"
                        />
                    </div>
                </div>
                {formData.interaction === '' && (
                    <div className="px-2 w-full mt-2">
                        <InputGroup
                            label="City or Higher Institution (for Students)"
                            required={true}
                            name="Lname"
                            placeholder=" "
                            onChange={(e) =>
                                updateValue(e.target.value, 'Lname')
                            }
                        />
                    </div>
                )}
                <div className="flex justify-end">
                    <button className="h-12 w-40 mr-5 rounded-md shadow-md text-md font bg-orange-500 text-white">
                        Share your story!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Share;
