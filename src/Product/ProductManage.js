import './ProductManage.css'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

function ProductManage() {

    const top100Films =[
        {label:"dhal"},
        {label: "bread"}
    ]

    return (
        <div>
            <div>
                <Typography variant="h5" gutterBottom style={{fontSize:'38px', fontFamily:'comfortaa, sans-serif'}} component="div">
                    Product Manage
                </Typography>
            </div>

            <div>
                <TextField id="filled-basic" label="Title" variant="filled" style={{width:'56vh'}} className='text1' />
                <TextField id="filled-basic" label="Price" variant="filled" style={{width:'56vh'}} className='text2' />
            </div>

            <div>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    style={{width:'56vh'}}
                    renderInput={(params) => <TextField {...params} label="Catagory" className='combo' />}
                />
            </div>
            <div>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Description"
                    style={{ width: '56vh', height: '19vh'}}
                    className='textArea'
                />
            </div>
            <div>
                <Link to='./dashboard'><Button variant="contained" className='btn1' color='success'>Save</Button></Link>
                <Button variant="contained" style={{left:'109vh', top:'229px'}} className='btn2'>Clear</Button>
            </div>
        </div>
    );
}

export default ProductManage;