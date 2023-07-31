import * as React from 'react';
import { AppBar, InputAdornment, OutlinedInput, Box, Container, Typography, Grid, Button, Divider, Link } from '@mui/material';


  function myfun(){
    alert('hello');
  }

    
export default function Events() {


    return (
       <Container>
        <p className="App"/>
        <h1>click the button</h1>
        <Button variant='contained' onClick={myfun}></Button>

<div>
  
</div>

       </Container>
    );
}