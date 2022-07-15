import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function DashBoard() {

  // const [data, setData] = useState([{}]);
  const [area, setArea] = useState('');
  const [street, setStreet] = useState('');
  const [restName, setRestName] = useState('');
  const [locationLink, setLocLink] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [meals, setMeals] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeMeals = (event) => {
    setMeals(event.target.value);
  };

  const handleChangePR = (event) => {
    setPriceRange(event.target.value);
  };

  const clearFields = () => {
    setArea('')
    setStreet('')
    setRestName('')
    setLocLink('')
    setCity('')
    setZipCode('')
    setCountry('')
    setPhone('')
    setMeals('')
    setPriceRange('')
  };

  const saveRestDetails = () => {
    console.log(area);
    console.log(street);
    console.log(restName);
    console.log(locationLink);
    console.log(city);
    console.log(zipCode);
    console.log(country);
    console.log(phone);
    console.log(meals);
    console.log(priceRange);

    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     "Area": area,
    //     "Street": street,
    //     "ResturentName": restName,
    //     "LocationLink": locationLink,
    //     "City": city,
    //     "ZipCode": zipCode,
    //     "Country": country,
    //     "Phone": phone,
    //     "Meals": meals,
    //     "PriceRange": priceRange
    //   })
    // };

    // fetch("/save-resturents", requestOptions).then(
    //   res => res.json()
    // ).then(
    //   data => {
    //     // setData(data)
    //     console.log(data);
    //   }
    // )
  };

  // useEffect(() => {
  //   fetch("/get-resturents").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       // setData(data)
  //       console.log(data);
  //     }
  //   )
  // }, [])

  return (
    <div className="App">
      <Typography variant="h4" gutterBottom component="div">
        Welcome to Admin Dash Board
      </Typography>
      <Card style={{ maxWidth: 900, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant='h5'>Resturent Save Form</Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField label="Area" placeholder='Enter First Name' variant='outlined' value={area} onChange={e => setArea(e.target.value)} fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label="Street" placeholder='Enter Strret Name' variant='outlined' value={street} onChange={e => setStreet(e.target.value)} fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField label="Resturent Name" placeholder='Enter Resturent Name' variant='outlined' value={restName} onChange={e => setRestName(e.target.value)} fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField label="Location Link" placeholder='Enter Location Link' variant='outlined' value={locationLink} onChange={e => setLocLink(e.target.value)} fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label="City" placeholder='Enter City' variant='outlined' value={city} onChange={e => setCity(e.target.value)} fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label="Zip Code" placeholder='Enter Zip Code' variant='outlined' value={zipCode} onChange={e => setZipCode(e.target.value)} fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                {/* <TextField label="Country" placeholder='Enter First Name' variant='outlined' fullWidth required /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="Country"
                    onChange={handleChangeCountry}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label="Phone" placeholder='Enter Phone NUmber' variant='outlined' value={phone} onChange={e => setPhone(e.target.value)} fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                {/* <TextField label="Meals" placeholder='Enter First Name' variant='outlined' fullWidth required /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Meals</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={meals}
                    label="Meals"
                    onChange={handleChangeMeals}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} item>
                {/* <TextField label="Price Range" placeholder='Enter First Name' variant='outlined' fullWidth required /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Price Range</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priceRange}
                    label="Price Range"
                    onChange={handleChangePR}
                    required
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12} item>
                <Button variant='contained' style={{ margin: 5 }} onClick={saveRestDetails}>Save</Button>
                <Button variant='contained' color='secondary' onClick={clearFields}>Clear</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <div style={{ height: 400, maxWidth: 1500, margin: "10px 10px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{ backgroundColor: 'black' }}>
              <TableRow style={{ color: 'white' }}>
                <TableCell style={{ color: 'white' }}>Dessert (100g serving)</TableCell>
                <TableCell style={{ color: 'white' }} align="right">Calories</TableCell>
                <TableCell style={{ color: 'white' }} align="right">Fat&nbsp;(g)</TableCell>
                <TableCell style={{ color: 'white' }} align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell style={{ color: 'white' }} align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default DashBoard;