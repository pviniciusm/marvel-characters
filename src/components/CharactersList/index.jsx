import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';

export const CharactersList = () => {
    const characters = useSelector((state) => state.characters);
    const loading = useSelector((state) => state.loading);

    if (loading) {
        return (
            <Box sx={{ width: 300 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
        );
    }

    return (
        <React.Fragment>
            <h5>Lista de personagens:</h5>
            <ul>
                {characters.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </React.Fragment>
    );
};
