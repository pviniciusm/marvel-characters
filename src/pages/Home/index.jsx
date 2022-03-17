import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CharactersList } from '../../components/CharactersList';
import { LoadingModal } from '../../components/LoadingModal';
import { fetchCharacters } from '../../store/modules/characters/actions';

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
    }, []);

    return (
        <React.Fragment>
            <h1>Home-page</h1>
            <p>Este é um template React</p>
            <LoadingModal />
            <CharactersList />
        </React.Fragment>
    );
};
