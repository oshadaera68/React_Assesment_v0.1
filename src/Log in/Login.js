import './Login.css'
import './normalize.css'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
function LogIn(){
    return( 
    <div className="fill__container">
        <div className="login__cover">
            <div className='title__container'>
            <Typography variant="h4" fontFamily="ubuntu" gutterBottom component="div">
                Log In
            </Typography>
            </div>
            <div className='form__container'>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" type="password" label="Outlined" variant="outlined" />
            </div>
            <div className='btn__container'></div>     
        </div>  
    </div>
    );
}

export default LogIn;