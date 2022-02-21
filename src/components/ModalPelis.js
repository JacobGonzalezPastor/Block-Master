import React, { useState } from 'react'
import { Typography, Modal, Box, Button } from '@mui/material'

export const ModalPelis = ({ id, img, title, date, description, rating}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    return (
        <>
            <Button onClick={handleOpen}>
                Ver mas
            </Button>
            <Modal 
                open={open}
                onClose={handleClose}
                id={id}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h1">
                        {title}
                    </Typography>
                    <img alt='No found' src={img} width='150px' />
                    <Typography variant="h4" color="initial">Fecha de estreno: {date}</Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}> Sinopsis: 
                        {description}
                    </Typography>
                    <Typography variant="h5" color="initial">Rating: {rating}</Typography>
                </Box>
            </Modal>
        </>
    )
}
