import * as React from 'react';
import { TextField, Box, Container, Grid, Button } from '@mui/material';
export default function Calculator() {
  const value1 = () => {
    let x = 10;
    x /= 5;
  }
  const value2 = () => {
    let a = 3;
    let x = (100 + 0.5) * a;
  }
  return (
    <Container justifyContent={'center'} >
      <Box ml={2}>
        <TextField
          id="standard-number"
          label="Calculator"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </Box>
      <Grid container spacing={2} mt={1} fontWeight={'bold'} >
        <Grid item xs={12}>
          <Button variant="contained">1</Button>
          <Button variant="contained">2</Button>
          <Button variant="contained">3</Button>
          <Button variant="contained">DEL</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">4</Button>
          <Button variant="contained">5</Button>
          <Button variant="contained">6</Button>
          <Button variant="contained">+</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">7</Button>
          <Button variant="contained">8</Button>
          <Button variant="contained">9</Button>
          <Button variant="contained">-</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">.</Button>
          <Button variant="contained">0</Button>
          <Button variant="contained">/</Button>
          <Button variant="contained">*</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">
            RST
          </Button>
          <Button variant="contained" href="#contained-buttons">00</Button>
          <Button variant="contained" href="#contained-buttons">UN</Button>
          <Button variant="contained" >=</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

