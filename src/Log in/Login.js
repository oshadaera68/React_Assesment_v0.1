import './Login.css'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import {Link} from 'react-router-dom'
function LogIn(){
    return( 
    <div className="fill__container">
        <div className="login__cover">
            <div className='title__container'>
                <Typography variant="h4" fontFamily="comfortaa" gutterBottom component="div">
                    Log In Form
                </Typography>
            </div>
            <div className='form__container'>
            <TextField id="standard-basic" className='text1' style={{left:'2vh', width:'34vh'}} size='small' label="User Name" variant="standard" />
            <TextField id="standard-basic" className='text2' style={{left:'2vh', width:'34vh'}} type='password' label="Password" variant="standard" />
            </div>
            <div className='btn__container'>
                <Link to='/dashboard'><Button variant="contained" className='btn' color='success'>Log in</Button></Link>
            </div>
            <div className='userAcc_container'>
            <Typography variant="h8" gutterBottom fontFamily="Ubuntu" color="#833471" component="div">
                Create new user account? <Link to='/user'>click here</Link>
            </Typography>
            </div>     
        </div>  
    </div>
    );
}

export default LogIn;