import { getCharacters } from '../../../services/characters';
import { setLoading } from '../loading/actions';

export const setCharacters = (payload) => {
    return {
        type: 'characters/SET',
        payload,
    };
};

export const fetchCharacters = () => {
    return (dispatch) => {
        dispatch(setLoading(true));

        getCharacters()
            .then((data) => {
                dispatch(setCharacters(data.data));
            })
            .catch((error) => {
                // dispatch(setErrorModal(error.message));
                console.log(error);
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    };
};
