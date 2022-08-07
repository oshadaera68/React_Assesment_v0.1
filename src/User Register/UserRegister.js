import './UserRegister.css'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function UserRegister() {
    return (
        <div>
            <Typography variant="h4" fontFamily='Ubuntu' color='red' gutterBottom component="div">
                User Registration
            </Typography>
            <div>
                <TextField id="standard-basic" label="First Name" variant="standard" className='first__Name' />
                <TextField id="standard-basic" label="Last Name" variant="standard" className='last__Name' />
                <TextField id="standard-basic" label="Email" variant="standard" className='email' />
                <TextField id="standard-basic" label="User Name" variant="standard" className='user__Name' />
                <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" className='password' />
                <TextField id="standard-basic" label="City" variant="standard" className='city' />
                <TextField id="standard-basic" label="Street" variant="standard" className='street' />
                <TextField id="standard-basic" label="Street No" variant="standard" className='street__no' />
                <TextField id="standard-basic" label="Zip Code" variant="standard" className='zip__code' />
                <TextField id="standard-basic" label="Lat Value" variant="standard" className='lat__value' />
                <TextField id="standard-basic" label="Long Value" variant="standard" className='long__value' />
                <TextField id="standard-basic" label="Mobile No" variant="standard" className='mobile__no' />
            </div>
            <div className='btn__container'>
                <Button variant="contained" color='error' className='clear'>Clear</Button>
                <Button variant="contained" color='success' className='save'>Save</Button>
            </div>
        </div>
    );
}

export default UserRegister