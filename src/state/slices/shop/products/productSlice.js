import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import martApi from '../../../api/baseApi';
import { REQUEST_STATUS } from '../../constants';

//add product
export const createNewProduct = createAsyncThunk(
    'post/newProduct',
    async (payload) => {
        const { data } = await martApi
            .post(`/newProduct/` + payload.id, payload.body, {
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
const myNewProduct = createSlice({
    name: 'newCollection',
    initialState,
    reducers: {},
    extraReducers: {
        [createNewProduct.pending]: () => {
            return { ...initialState, status: REQUEST_STATUS.pending };
        },
        [createNewProduct.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                status: REQUEST_STATUS.fulfilled,
                colData: payload,
            };
        },
        [createNewProduct.rejected]: () => {
            return { ...initialState, status: REQUEST_STATUS.rejected };
        },
    },
});

export const { addNewCollection } = myNewProduct.actions;
export default myNewProduct.reducer;

//
//
//

export const createProductHandler = (formData, dispatch, neededInfo) => {
    if (neededInfo.otpStatus === REQUEST_STATUS.VERIFIED) {
        const payload = {
            id: neededInfo.shopData.id,
            body: {
                ...formData,
                shopId: neededInfo.shopData.id,
            },
            auth: {
                token: 'Holla ' + neededInfo.otpData.accessToken,
            },
        };
        const subPayload = {
            id: neededInfo.shopData.id,
            number: 1,
            operator: '-',
            useCase: 'products',
        };
        dispatch(createNewProduct(payload))
            .then(unwrapResult)
            .then((res) => {
                console.log(res);
                toaster.push(
                    <Message showIcon type={res.type}>
                        {res.message
                            .replace('prod', 'Product ')
                            .replace(
                                'Vari" must be an array',
                                ' specifications" must be selected '
                            )}
                    </Message>,
                    {
                        placement: 'topEnd',
                    }
                );
                if (res.type === 'success') {
                    dispatch(updateInstance(subPayload));
                }
                neededInfo.reFetchData();
            })
            .catch((e) => {
                console.log(e);
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
