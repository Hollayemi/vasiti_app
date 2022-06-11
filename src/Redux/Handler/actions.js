import axios from 'axios';

import * as Types from '../types';

export const addTask = (product) => {
    return {
        type: Types.ADD_TASK,
        payload: product,
    };
};

export const myLoginHandler = (email, password) => {
    const data = axios
        .post(
            'https://stage.api.sloovi.com/login',
            {
                email: 'smithwills1989@gmail.com',
                password: '12345678',
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }
        )
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err.response);
            return err.data;
        });
    return {
        type: Types.LOGIN,
        payload: {
            Login: data,
        },
    };
};

//
export const newTask = (payload) => {
    console.log(payload);
    const data = axios
        .post(
            `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${payload.companyID}`,
            payload.body,
            {
                headers: {
                    Authorization: 'Bearer ' + payload.token,
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }
        )
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err.response);
            return err.data;
        });
    return {
        type: Types.LOGIN,
        payload: {
            Login: data,
        },
    };
};

export const convert2sec = (str) => {
    const exactTime = str.toString().split('2022')[1].split('G')[0];
    let myTime = exactTime.split(':');
    let TimeInSec = myTime[0] * 60 * 60 + myTime[1] * 60 + myTime[2];

    return TimeInSec;
};
