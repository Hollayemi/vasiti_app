import React, { useEffect, useState } from 'react';
import { DatePicker, Placeholder } from 'rsuite';
import InputGroup from '../../components/elements/Input/InputGroup';
import Image1 from '../../assets/images/png/Testimonial image 1.png';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { connect } from 'react-redux';
import {
    convert2sec,
    myLoginHandler,
    newTask,
} from '../../Redux/Handler/actions';
const Soolvi = (prop) => {
    const [newTask, setTask] = useState(true);
    const [formData, setFormData] = useState({
        task_msg: '',
        task_time: '',
        task_date: '',
        assigned_user: '',
    });
    useEffect(() => {
        prop.Login();
    }, []);
    console.log(prop.LoginState);

    const save = () => {
        let date = new Date();
        console.log(formData.task_date.getDate);
        let dateFormat =
            formData.task_date.getFullYear() +
            ' ' +
            '0' +
            formData.task_date.getMonth() +
            ' ' +
            formData.task_date.getDay();
        const payload = {
            // companyID: prop.LoginState.results.company_id,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTQ5MjIyODcsIm5iZiI6MTY1NDkyMjI4NywianRpIjoiM2I1ZTYzM2QtNDQ5OS00ZGVjLTlhZjUtYzYyNTI1ODExZWY1IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.eJAF4w7zzaEiLmxTh00vTdsv94YjBn0IHxAZT1i77Zk',
            companyID: 'company_413ef22b6237417fb1fba7917f0f69e7',
            body: {
                ...formData,
                task_date: dateFormat,
                task_time: convert2sec(formData.task_time),
                is_completed: 1,
                time_zone: date.getTime(),
            },
        };
        prop.addNewTask(payload);
    };

    let newValue = {};
    function updateValue(newVal, variable) {
        variable === 'task_msg' && (newValue = { task_msg: newVal });
        variable === 'task_date' && (newValue = { task_date: newVal });
        variable === 'task_time' && (newValue = { task_time: newVal });
        variable === 'assigned_user' && (newValue = { assigned_user: newVal });
        setFormData({
            ...formData,
            ...newValue,
        });
    }

    return (
        <div className="flex items-center h-[100vh]">
            <div className="w-32 h-full bg-slate-800"></div>
            <div className="flex flex-col items-center w-[380px] px-4">
                <div className="w-full bg-slate-100 mx-4 px-6 py-8 rounded-lg border">
                    <div className="flex h-8 justify-between pl-4 rounded items-center justify-center border mb-5">
                        <h5>Tasks</h5>
                        <i
                            onClick={() => setTask(!newTask)}
                            className="h-full flex items-center justify-center w-8 border-l bg-slatw-200 text-slate-500"
                        >
                            <FaPlus />
                        </i>
                    </div>
                    <div className={newTask ? 'hidden' : 'block'}>
                        <div className="px-2 w-full">
                            <h5 className="text-xs font-bold pb-0.5 px-0.5">
                                Task Description
                            </h5>
                            <InputGroup
                                placeholder="Medium"
                                data={[]}
                                onChange={(e) =>
                                    updateValue(e.target.value, 'task_msg')
                                }
                            />
                        </div>
                        <div className="flex items-center">
                            <div className="px-2 w-1/2 mt-2">
                                <h5 className="text-xs font-bold pb-0.5 px-0.5">
                                    Date {prop.LoginState.message}
                                </h5>
                                <DatePicker
                                    size="md"
                                    format="yyyy MM dd"
                                    className="w-full"
                                    placeholder="Medium"
                                    onChange={(e) =>
                                        updateValue(e, 'task_date')
                                    }
                                />
                            </div>
                            <div className="px-2 w-1/2 mt-2">
                                <h5 className="text-xs font-bold pb-0.5 px-0.5">
                                    Time
                                </h5>
                                <DatePicker
                                    label="fdf"
                                    format="HH:mm"
                                    ranges={[]}
                                    style={{ width: 260 }}
                                    onChange={(e) =>
                                        updateValue(e, 'task_time')
                                    }
                                />
                            </div>
                        </div>
                        <div className="px-2 w-full my-5">
                            <div className=" w-full">
                                <h5 className="text-xs font-bold pb-0.5 px-0.5">
                                    Assign User
                                </h5>
                                <InputGroup
                                    placeholder=" "
                                    onChange={(e) =>
                                        updateValue(
                                            e.target.value,
                                            'assigned_user'
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setTask(!newTask)}
                                className="h-8 w-24 mr-2 rounded shadow-sm hover:bg-slate-200 text-black text-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={save}
                                className="h-8 w-20 mr-2 rounded shadow-sm bg-green-600 text-white text-md"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center m-3 w-full bg-white justify-between py-2 px-3 border rounded-md shadow">
                    <div className="flex items-center">
                        <img
                            src={Image1}
                            className="w-10 h-10"
                            alt={<Placeholder />}
                        />
                        <div className="flex flex-col text-xs ml-2">
                            <b>$12</b>
                            <h5>Follow up</h5>
                        </div>
                    </div>

                    <i>
                        <FaEdit />
                    </i>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        holls: 443,
        LoginState: state.Login,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        Login: () => dispatch(myLoginHandler()),
        addNewTask: (payload) => dispatch(newTask(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Soolvi);
