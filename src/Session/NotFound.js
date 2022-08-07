import Button from '@mui/material/Button';
import './NotFound.css'
import notFound from './assets/404.webp'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
        <div className='wrong__Container'>
            <div className='image__Container'>
                <img src={notFound} alt='404 error' className='image' />
            </div>
            <Link to="/">
                <Button variant="outlined" size="medium">
                    Go To Back Page
                </Button>
            </Link>
        </div>
    );
}

export default NotFound;