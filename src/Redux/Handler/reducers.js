import * as Actions from '../types';
const initialState = {
    Tasks: [],
    Login: [],
};
const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actions.LOGIN:
            console.log(payload);
            return { ...state, Login: payload };

        case Actions.UPDATE_TASK:
            return { ...state, Tasks: payload };

        case Actions.DELETE_TASK:
            return { ...state, Tasks: payload };

        default:
            return state;
    }
};

export default Reducer;
