import * as React from 'react';
import { AppBar, InputAdornment, OutlinedInput, Box, Container, Typography, Grid, Button, Divider, Link } from '@mui/material';
export default function Events() {
    
    return (
       <Container>
<button onClick={() => {
  const name = 'James';
  alert('Hello, ', name);
}}>
  Click me!
</button>



       </Container>
    );
}