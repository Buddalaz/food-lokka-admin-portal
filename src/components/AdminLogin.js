import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DashBoard from './DashBoard';

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

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {

        console.log(userName);
        console.log(password);

        const requestOptions = {
            method: 'GET',
        };

        if ('' !== userName && '' !== password) {
            fetch("/get-user/" + userName, requestOptions).then(
                res => res.json()
            ).then(
                data => {
                    // setData(data)
                    console.log(data);
                    <DashBoard />
                }
            )
        }

    };

    return (
        <div style={divStyle}>
            <h1>Welcome to Food Lokka {props.name}</h1>
            <TextField style={inputStyle} id="outlined-basic" label="Email*" variant="outlined" value={userName} onChange={e => setUserName(e.target.value)} />
            <TextField style={inputStyle} id="outlined-basic" label="Password*" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />
            <Button variant="contained" onClick={login}>Login</Button>
        </div>
    );
}

export default AdminLogin;