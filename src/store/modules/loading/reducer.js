const initialState = true;

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'loading/SET':
            return action.payload;
        default:
            return state;
    }
};
