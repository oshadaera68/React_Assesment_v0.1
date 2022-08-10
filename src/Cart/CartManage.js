import './CartManage.css'
import * as React from 'react';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

function CartManage() {
    return (
        <div>
            <div>
                <Typography variant="h5" gutterBottom style={{fontSize: '38px', fontFamily: 'comfortaa, sans-serif'}}
                            component="div">
                    Cart Manage
                </Typography>
            </div>
            <div>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    // options={top100Films}
                    style={{width:'56vh'}}
                    renderInput={(params) => <TextField {...params} label="User Name" className='combo' />}
                />

                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    // options={top100Films}
                    style={{width:'56vh'}}
                    renderInput={(params) => <TextField {...params} label="Product Title" className='combo1' />}
                />
            </div>
            <div>
                <TextField id="standard-basic" label="Date" variant="standard" className='txt1' />
                <TextField id="standard-basic" label="Qty" variant="standard" className='txt2' />
            </div>

            <div>
                <Button variant="contained" className='btn1' style={{width:'14vh'}}>clear</Button>
                <Button variant="contained" style={{width:'14vh', position:'absolute', left:'155vh', top:'290px'}}>Save</Button>
            </div>
        </div>
    );
}

export default CartManage;