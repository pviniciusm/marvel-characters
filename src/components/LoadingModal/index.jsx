import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const LoadingModal = () => {
    // const [open, setOpen] = React.useState(true);
    const open = useSelector((state) => state.loading);

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p
                        style={{
                            textAlign: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        Aguarde... carregando.
                    </p>
                    <LinearProgress />
                </Box>
            </Modal>
        </div>
    );
};
