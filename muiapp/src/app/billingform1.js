import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange, green, red } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment'
import Badge from '@mui/material/Badge';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import { AppBar, InputAdornment, OutlinedInput, Box, Container, Typography, Grid, Button, Divider, Link } from '@mui/material';


export default function Billingform1() {
  const [formn, setFormn] = useState({
    email: '',
    password: '',
    first: '',
    second: '',
  })
  // const validEmail = new RegExp(
  //   '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');


  // const [emailErr, setEmailErr] = useState(false);

  // const validate = () => {

  //   if (!validEmail.test(formn.email)) {
  //     setEmailErr(true);
  //   } else setEmailErr(false);

  // }

const [formnError,setFormnError]=useState ({})

  const validateForm = () =>{
    let err={}
    if (formn.first ===''){
      err.first = 'first Required'
    }
    if (formn.last ===''){
      err.last = 'last Required'
    }
    if (formn.email ===''){
      err.email = 'email Required'
    } else{
      let regex= /'^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
      if (!regex.test(formn.email)){
        err.email = 'Email not-valid'
      }
    }
    if (formn.password ===''){
      err.password = 'password Required'
    }else{
      if (formn.password.length<4){
      err.password='password should be atleast 4 inputs'
      }
    }
    setFormnError({...err})
    
    return Object.keys(err).length<1;
  }
  
  const [submittedData, setSubmittedData] = useState([])


  
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setFormn({
      ...formn, [name]: value
    })
   
  }

  const handleSubmit = () => {
    // e.preventDefault()
    const list3 = { ...formn }
    setSubmittedData([...submittedData, list3]
    )
    console.log(submittedData, "submittedData")
    console.log(formn, "formn");
    // let isValid = validateForm()
    // if (isValid){
    //   alert('submitted')
    // } else {
    //   alert( 'Invalid-Form')
    // }
    // console.log(isValid)
    setFormn({
      email: '',
      password: '',
      first: '',
      last: '',

      // gender:'female'
    })
  }
  
  return (
    <Box >
      <AppBar position='static' sx={{ backgroundColor: 'black', padding: 4 }}></AppBar>
      

      <Box sx={{ backgroundColor: '#E4E7ED', paddingTop: 2, paddingBottom: 2, overflow: 'auto' }} >
        <Container >
          <Grid container rowGap={2} columnGap={2} >
            <Grid item xs={12} lg={12} sm={12} maxHeight="lg" sx={{ backgroundColor: '#E4E7ED' }}>
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
                    <OutlinedInput placeholder='Email Address'  name='email' value={formn.email} onChange={onChangeHandler} sx={{ outline: 'none', width: '100%', border: 1,borderColor:'white', borderRadius: 5, backgroundColor: '#E4E7ED' }} />
                  </Grid>
                  {/* {emailErr && <p>Your email is invalid</p>} */}
                  <Grid item sm={6} xs={12} >
                    <Typography>Password*</Typography>
                    <OutlinedInput placeholder='Password' type="password" name='password' value={formn.password} onChange={onChangeHandler} sx={{outline: 'none', width: '100%',border: 1,borderColor:'white', borderRadius: 5, backgroundColor: '#E4E7ED' }}
                      endAdornment={<InputAdornment position="end" sx={{ color: 'blue', textDecoration: 'underline', }}>show</InputAdornment>}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} >
                    <Typography>First Name*</Typography>
                    <OutlinedInput placeholder='First Name' name='first' value={formn.first} onChange={onChangeHandler} sx={{outline: 'none', width: '100%',border: 1,borderColor:'white', borderRadius: 5, backgroundColor: '#E4E7ED' }} />
                    {/* <Typography sx={{color:red}}>{formnErr.first}</Typography> */}
                  </Grid>
                  <Grid item sm={6} xs={12} >
                    <Typography>Last Name*</Typography>
                    <OutlinedInput placeholder='Last Name' name='last' value={formn.last} onChange={onChangeHandler} sx={{outline: 'none', width: '100%',border: 1,borderColor:'white', borderRadius: 5, backgroundColor: '#E4E7ED' }} />
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
                  <Grid item xs={12} sm={12} >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant='contained'  type="submit"onClick={() => { handleSubmit(); validateForm(); }} disableElevation
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
              <TableContainer component={Paper}>
          <Table  sx={{ borderRadius: '16px', backgroundColor: '#ffffff',minWidth: 650, padding: 2 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell >Email</TableCell>
                <TableCell >Password</TableCell>
                <TableCell >First</TableCell>
                <TableCell >Last</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                submittedData.map((data, index) =>
                (
                  <TableRow key={index}>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.password}</TableCell>
                    <TableCell>{data.first}</TableCell>
                    <TableCell>{data.last}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
              {/* <Grid>
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
              </Grid> */}
            </Grid>
            {/* <Grid item xs={12} lg={3} sm={3} sx={{ backgroundColor: '#E4E7ED', }}>
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
            </Grid> */}
          </Grid>
        </Container>
      </Box>
      <AppBar position='static' sx={{ backgroundColor: 'black', padding: 1 }}></AppBar>
    </Box>

  );
}