import Button from '@mui/material/Button';
import './NotFound.css'
import notFound from './assets/404.webp'
function NotFound() {
    return (
        <div className='wrong__Container'>
            <div className='image__Container'>
                <img src={notFound} alt='404 error' className='image' />
            </div>
            <Button variant="contained" size="medium">
                Go To Back Page
            </Button>
        </div>
    );
}

export default NotFound;