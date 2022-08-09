import './CartManage.css'
import * as React from 'react';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

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
                    renderInput={(params) => <TextField {...params} label="User Name" className='combo1' />}
                />
            </div>
        </div>
    );
}

export default CartManage;