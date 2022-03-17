import { combineReducers } from 'redux';
import { charactersReducer } from './modules/characters/reducer';
import { loadingReducer } from './modules/loading/reducer';

// to-do: add reducers
export const reducers = combineReducers({
    characters: charactersReducer,
    loading: loadingReducer,
});
