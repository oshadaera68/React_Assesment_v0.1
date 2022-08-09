import './UserRegister.css'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';

function UserRegister() {
    return (
        <div>
            <Typography variant="h4" fontFamily='Ubuntu' color='red' gutterBottom component="div">
                User Registration
            </Typography>
            <div className='text__container'>
                <TextField id="standard-basic" label="First Name" variant="standard" className='txt' />
                <TextField id="standard-basic" label="Last Name" variant="standard" className='txt' />
                <TextField id="standard-basic" label="Email" variant="standard" className='txt' />
                <TextField id="standard-basic" label="User Name" variant="standard" className='txt' />
                <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" className='txt' />
                <TextField id="standard-basic" label="City" variant="standard" className='txt' />
                <TextField id="standard-basic" label="Street" variant="standard" className='' />
                <TextField id="standard-basic" label="Street No" variant="standard" className='txt' />
                <TextField id="standard-basic" label="Zip Code" variant="standard" className='txt' />
                <TextField id="standard-basic" label="Lat Value" variant="standard" className='lat__value' />
                <TextField id="standard-basic" label="Long Value" variant="standard" className='long__value' />
                <TextField id="standard-basic" label="Mobile No" variant="standard" className='mobile__no' />
            </div>
            <div>
                <Button variant="contained" color='error' className='clear'>Clear</Button>
                <Button variant="contained" color='success' className='save'>Save</Button>
            </div>

            <div>
            </div>
        </div>
    );
}

export default UserRegister