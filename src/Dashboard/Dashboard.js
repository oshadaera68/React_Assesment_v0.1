import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import './Dashboard.css';

function Dashboard() {

    return (
        <div>
            {/*Navigation Bar*/}
            <header>
                <nav className='nav-bar'>
                    <div className='naming'>
                        <p className='h3'>Dashboard</p>
                    </div>
                    <div className='btn__center'>
                        <Link to='/product'><Button variant="contained" style={{width:'14vh', left: '17vh', top:'17px'}} className='btn1' color='success'>Product</Button></Link>
                        <Link to='/cart'><Button variant="contained" className='btn2' color='success'>Cart</Button></Link>
                    </div>
                </nav>
            </header>

            {/*Cards*/}
            <div>
                <div className='card_1'>
                    <Card sx={{ backgroundColor: 'red', height:'27vh'}}>
                        <CardContent>
                            <Typography variant="h4" className='type' gutterBottom component="div"
                                        fontFamily='comfortaa'>
                                <span className='span2' style={{top:'3vh', left:'2vh'}}>Products</span>
                                <br/>
                                <span className='span3' style={{top:'6vh', left:'9vh'}}>60</span>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card_2'>
                    <Card sx={{backgroundColor: '#9b59b6', height:'27vh'}}>
                        <CardContent>
                            <Typography variant="h4" className='type1' gutterBottom component="div"
                                        fontFamily='comfortaa, sans-serif'>
                                <span className='span1' style={{top:'3vh', left:'6vh'}}>Cart</span>
                                <br/>
                                <span className='span' style={{top:'6vh', left:'9vh'}}>12</span>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card_3'>
                    <Card sx={{backgroundColor: '#9b59b6', height:'27vh'}}>
                        <CardContent>
                            <Typography variant="h4" className='type1' gutterBottom component="div"
                                        fontFamily='comfortaa, sans-serif'>
                                <span className='span4' style={{top:'3vh', left:'6vh'}}>Users</span>
                                <br/>
                                <span className='span5' style={{top:'6vh', left:'9vh'}}>43</span>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;