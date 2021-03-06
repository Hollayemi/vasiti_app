import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import martApi from '../../../api/baseApi';
import { REQUEST_STATUS } from '../../constants';
import { storeFiles } from '../display/displayAll';

export const allCollections = createAsyncThunk(
    'post/allCollections',
    async (payload) => {
        const { data } = martApi
            .post(`/newCollection/` + payload.id, {}, { auth: payload.auth })
            .then((res) => {
                return res.response;
            })
            .catch((e) => {
                return e.response;
            });
        return data;
    }
);

export const createCollection = createAsyncThunk(
    'post/createCollection',
    async (payload) => {
        const { data } = await martApi
            .post(`/newCollection/` + payload.id, payload.body, {
                headers: { token: payload.auth.token },
            })
            .then((res) => {
                return res;
            })
            .catch((e) => {
                return e.response;
            });
        return data;
    }
);

export const updateInstance = createAsyncThunk(
    'post/collectionInstance',
    async (payload) => {
        const { data } = await martApi
            .post(`/use`, payload, {})
            .then((res) => {
                return res;
            })
            .catch((e) => {
                console.log(e.response);
                return e.response;
            });
        return data;
    }
);
//
const initialState = {
    creatname: '',
};

//
//
//
const newCollection = createSlice({
    name: 'newCollection',
    initialState,
    reducers: {},
    extraReducers: {
        [createCollection.pending]: () => {
            return { ...initialState, status: REQUEST_STATUS.pending };
        },
        [createCollection.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                status: REQUEST_STATUS.fulfilled,
                colData: payload,
            };
        },
        [createCollection.rejected]: () => {
            return { ...initialState, status: REQUEST_STATUS.rejected };
        },
    },
});

export const { addNewCollection } = newCollection.actions;
export default newCollection.reducer;

//
//
//

export const createHandler = (
    status,
    shopData,
    formData,
    otpData,
    selectedCate,
    dispatch,
    reFetchData
) => {
    if (status === REQUEST_STATUS.VERIFIED) {
        const payload = {
            id: shopData.id,
            body: {
                collectionName: formData.collectionName,
                category: selectedCate,
                collectionInfo: formData.collectionInfo,
            },
            auth: {
                token: 'Holla ' + otpData.accessToken,
            },
        };
        const subPayload = {
            id: shopData.id,
            number: 1,
            operator: '-',
            useCase: 'categories',
        };
        dispatch(createCollection(payload))
            .then(unwrapResult)
            .then((res) => {
                toaster.push(
                    <Message showIcon type={res.type}>
                        {res.message.replace('buzz_', 'business ')}
                    </Message>,
                    {
                        placement: 'topEnd',
                    }
                );
                if (res.type === 'success') {
                    dispatch(updateInstance(subPayload));
                }
                storeFiles(shopData.id, dispatch, reFetchData);
            })
            .catch((e) => {
                console.log(e.response);
            });
    }
};

//
//
//

export const deleteCol = (
    shopData,
    otpData,
    splited,
    dispatch,
    deleteHandler,
    getInfo,
    eventFunc,
    reFetchData
) => {
    const payload = {
        shopID: shopData.id,
        body: {
            delCase: 'collection',
            _id: splited[2],
            name: splited[3],
        },
        auth: {
            token: 'Holla ' + otpData.accessToken,
        },
    };
    const subPayload = {
        id: shopData.id,
        operator: '+',
        useCase: 'categories',
        number: 1,
    };
    // setOpen(true);
    dispatch(deleteHandler(payload))
        .then(unwrapResult)
        .then((resr) => {
            dispatch(getInfo(shopData.id))
                .then(unwrapResult)
                .then((res) => {
                    toaster.push(
                        <Message showIcon type={resr.type}>
                            {resr.message}
                        </Message>,
                        {
                            placement: 'topEnd',
                        }
                    );
                    if (resr.type) {
                        dispatch(updateInstance(subPayload));
                    }
                    reFetchData();
                });
            eventFunc('');
        })
        .catch((e) => {});
};
