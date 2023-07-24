import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment'
import Badge from '@mui/material/Badge';
import { AppBar, InputAdornment, OutlinedInput, Box, Container, Typography, Grid, Button, Divider, Link } from '@mui/material';


export default function Billing() {
  return (
    <Box >
      <AppBar position='static' sx={{ backgroundColor: 'black', padding: 4 }}></AppBar>
      

      <Box sx={{ backgroundColor: '#E4E7ED', paddingTop: 2, paddingBottom: 2, overflow: 'auto' }} >
        <Container >
          <Grid container rowGap={2} columnGap={2} >
            <Grid item xs={12} lg={6} sm={6} maxHeight="lg" sx={{ backgroundColor: '#E4E7ED' }}>
              <Grid container sx={{ borderRadius: '16px', backgroundColor: '#ffffff', padding: 2 }}>

                <Grid item xs={12} mb={1} >
                  <Typography sx={{ marginLeft: 0.3, fontWeight: 'bold', fontSize: 17 }} >
                    <Link href="#" underline="none">
                      1
                    </Link>
                    &nbsp;Account Details
                  </Typography>
                </Grid>


                <Grid item xs={12} mb={2} sx={{ textAlign: "right" }}>
                  <Typography sx={{ fontSize: 12 }} >
                    Already have an account?
                    <Link href="#" underline="none">
                      {' sign in here'}
                    </Link>
                  </Typography>
                </Grid>
                <Grid container spacing={2} alignItems="center" >
                  <Grid item sm={6} xs={12}  >
                    <Typography >Email Address*</Typography>
                    <OutlinedInput placeholder='Email Address' sx={{ outline: 'none', width: '100%', border: 1,borderColor:'white', borderRadius: 5, backgroundColor: '#E4E7ED' }} />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Typography>Password*</Typography>
                    <OutlinedInput placeholder='Password' sx={{outline: 'none', width: '100%',border: 1,borderColor:'white', borderRadius: 5, backgroundColor: '#E4E7ED' }}
                      endAdornment={<InputAdornment position="end" sx={{ color: 'blue', textDecoration: 'underline', }}>show</InputAdornment>}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} >
                    <Typography>First Name*</Typography>
                    <OutlinedInput placeholder='First Name' sx={{outline: 'none', width: '100%',border: 1,borderColor:'white', borderRadius: 5, backgroundColor: '#E4E7ED' }} />
                  </Grid>
                  <Grid item sm={6} xs={12} >
                    <Typography>Last Name*</Typography>
                    <OutlinedInput placeholder='Last Name' sx={{outline: 'none', width: '100%',border: 1,borderColor:'white', borderRadius: 5, backgroundColor: '#E4E7ED' }} />
                  </Grid>
                  <Grid item xs={12} sm={9}  >
                    <Typography sx={{ fontSize: 13 }}>
                      By creating an account, you agree to the
                      <Link href="#" underline="none">
                        Terms And Conditions&nbsp;
                      </Link>
                      set out by this site,including our
                      <Link href="#" underline="none">
                        Cookie Use
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3} >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant='contained' disableElevation
                        sx={{
                          backgroundColor: '#EC6611',
                          textTransform: 'none', '&:hover': {
                            background: '#EC6611',
                            textTransform: 'none'
                          }, height: 45, width: 196
                        }} ><Typography>Continue</Typography></Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid>
                <Typography sx={{ fontWeight: 'bold', fontSize: 17, textAlign: "left", p: 2, borderRadius: '16px', backgroundColor: '#ffffff' }} style={{ marginTop: "10px", }}>
                  <Link href="#" underline="none">
                    {'2'}
                  </Link>
                  &nbsp;Billing Details
                </Typography>
              </Grid>
              <Grid>
                <Typography sx={{ fontWeight: 'bold', p: 2, borderRadius: '16px', backgroundColor: '#ffffff', textAlign: 'left' }} style={{ marginTop: "10px", }}>
                  <Link href="#" underline="none">
                    {'3'}
                  </Link>
                  &nbsp;Payments
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3} sm={3} sx={{ backgroundColor: '#E4E7ED', }}>
              <Grid container sx={{ borderRadius: '16px', backgroundColor: '#ffffff', padding: 2 }}>
                <Typography sx={{ ml: 2, mb: 1, fontWeight: 'bold', fontSize: 17 }} style={{ marginTop: "6px", }}>
                  Order Summary
                </Typography>
                <Grid container sx={{ p: 1 }}>
                  <Grid item xs={6} md={6} sm={6} >
                    <Typography sx={{ textAlign: 'left', fontSize: 14, fontWeight: 'medium' }}>Plan</Typography>
                  </Grid>
                  <Grid item xs={6} md={6} sm={6}>
                    <Typography sx={{ textAlign: 'right', fontSize: 14, fontWeight: 'medium' }}>Price</Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ p: 1 }}>
                  <Grid item xs={6} md={6} sm={6}>
                    <Typography sx={{ textAlign: 'left', fontSize: 11, fontWeight: 'light' }}>Free Trial</Typography>
                  </Grid>
                  <Grid item xs={6} md={6} sm={6}>
                    <Typography sx={{ textAlign: 'right', fontSize: 11, fontWeight: 'light' }}>₹.00</Typography>
                  </Grid>
                </Grid>
                <Divider bold />
                {/* <Box sx={{ borderBottom: '3px solid black' }}></Box> */}
                <Divider sx={{ color: 'black', width: '1', alignContent: 'center', ml: '2', mt: 1, mb: 1 }} />
                <Grid container sx={{ p: 1 }}>
                  <Grid item xs={6} md={6} sm={6}>
                    <Typography nowrap={true} sx={{ textAlign: 'left', fontSize: 14, fontWeight: 'medium' }}>Total due today</Typography>
                  </Grid>
                  <Grid item xs={6} md={6} sm={6}>
                    <Typography sx={{ textAlign: 'right', fontSize: 14, fontWeight: 'medium' }}>₹.00</Typography>
                  </Grid>
                </Grid>
                <Typography sx={{ fontSize: 11, ml: 2 }} style={{ marginTop: "10px" }}>
                  Packt free trial
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <AppBar position='static' sx={{ backgroundColor: 'black', padding: 1 }}></AppBar>
    </Box>

  );
}