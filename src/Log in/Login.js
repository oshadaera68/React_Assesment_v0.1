import './Login.css'
import './normalize.css'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
            <TextField id="standard-basic" className='text1' size='small' label="User Name" variant="standard" />
            <TextField id="standard-basic" className='text2' type='password' label="Password" variant="standard" />
            </div>
            <div className='btn__container'>
                <Button variant="contained" className='btn' fontFamily="Ubuntu">Log in</Button>
            </div>
            <div className='userAcc_container'>
            <Typography variant="h8" gutterBottom fontFamily="Comfortaa" color="white" component="div">
                Create new user account? <a href='#'>click here</a>
            </Typography>
            </div>     
        </div>  
    </div>
    );
}

export default LogIn;