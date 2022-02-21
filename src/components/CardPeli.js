import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export const CardPeli = ({ id, poster, calificacion, ver_mas }) => {
    

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={poster}
                    alt={id} />
                <CardContent>
                    <Typography variant="h6" color="initial"><StarIcon /> Rating | {calificacion}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Favorito</Button>
                    {
                        ver_mas
                    }
                </CardActions>
            </Card>
        </div>
    )
}

