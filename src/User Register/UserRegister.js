import './UserRegister.css'
import Typography from '@mui/material/Typography'
import  TextField  from '@mui/material/TextField';
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
            <TextField id="standard-basic" label="Password" variant="standard" className='password' />
            </div>
        </div>
    );
}

export default UserRegister