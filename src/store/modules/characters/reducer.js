const initialState = [];

export const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'characters/SET':
            return action.payload;
        default:
            return state;
    }
};
