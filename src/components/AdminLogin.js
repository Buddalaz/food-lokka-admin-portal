import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid red'
    // color: 'blue',
    // backgroundImage: 'url(' + imgUrl + ')',
    // textAlign: 'center',
};

const inputStyle = {
    padding: '5px 5px',
};


function AdminLogin(props) {
    return (
        <div style={divStyle}>
            <h1>Welcome to Food Lokka {props.name}</h1>
            <TextField style={inputStyle} id="outlined-basic" label="Email*" variant="outlined" />
            <TextField style={inputStyle} id="outlined-basic" label="Password*" variant="outlined" />
            <Button variant="contained">Hello World</Button>
        </div>
    );
}

export default AdminLogin;