import React from 'react';
import { Card, CardMedia } from '@mui/material';

import './Barbers.css';

const SingleBarber = ({ barber }) => {
    return (
        <div className={'team_overlay'}>
            <Card className={'barber_card'} >
                <CardMedia
                    component={'img'}
                    alt={barber.name}
                    width={300}
                    image={barber.picture}
                    className={'gray_scale'}
                />
                <div style={{margin: '10px'}}>
                    <h3>{barber.name}</h3>
                    <h4>{barber.description}</h4>
                </div>
            </Card>
        </div>
    );
};

export default SingleBarber;