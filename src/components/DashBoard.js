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

  const [data, setData] = useState([{}])
  const [restName, setRestName] = useState('')
  const [place, setPlace] = useState('')

  useEffect(() => {
    fetch("/get-resturents").then(
      res => res.json()
    ).then(
      data => {
        // setData(data)
        console.log(data);
      }
    )
  }, [])

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
                <TextField label="Resturent Name" placeholder='Enter First Name' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label="Address" placeholder='Enter First Name' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField label="Location" placeholder='Enter First Name' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <Button variant='contained' style={{ margin: 5 }}>Save</Button>
                <Button variant='contained' color='secondary'>Clear</Button>
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