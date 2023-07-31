import * as React from 'react';
import { FormControl } from '@mui/material';
import { useState } from "react";
import { useEffect } from "react";
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { AppBar, InputAdornment, OutlinedInput, Box, Container, Typography, Grid, Button, Divider, Link, BottomNavigation } from '@mui/material';





export default function Formsevent() {

  // useEffect(() => {
  //   if (selects === "tamilnadu") {
  //     districts([
  //       { value: "madurai", label: "Madurai" },
  //       { value: "chennai", label: "Chennai" },
  //       { value: "coimbatore", label: "Coimbatore" },
  //     ]);
  //   }
  // },[selects])
 

  const [formn, setFormn] = useState({
    name: '',
    email: '',
    occupation: '',
    password: '',
    gender: '',
    languages: []
  })
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');


  const [emailErr, setEmailErr] = useState(false);

  const validate = () => {

    if (!validEmail.test(formn.email)) {
      setEmailErr(true);
    } else setEmailErr(false);

  }
  const [submittedData, setSubmittedData] = useState([])

// const [selects,setSelects] = useState();
// const [districts,setDistricts] = useState();
  
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setFormn({
      ...formn, [name]: value
    })
    if (e.target.name === 'languages') {
      let copy = { ...formn }
      if (e.target.checked) {
        copy.languages.push(e.target.value)
      } else {
        copy.languages = copy.languages.filter(ef => ef === e.target.value)
      }
      setFormn(copy)
    } else {
      setFormn(() => ({
        ...formn,
        [e.target.name]: e.target.value
      }))
    }
  }

  const handleSubmit = () => {
    // e.preventDefault()
    const list3 = { ...formn }
    setSubmittedData([...submittedData, list3]
    )
    console.log(submittedData, "submittedData")
    console.log(formn, "formn");
    setFormn({
      name: '',
      email: '',
      occupation: '',
      password: '',
      gender:'',
      languages: []

      // gender:'female'
    })
  }


  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <TextField
          required
          id="filled-required"
          name='name' value={formn.name} onChange={onChangeHandler}
          label="Required"
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          name='email' value={formn.email} onChange={onChangeHandler}
          label="Required"
          variant="filled"
        /> {emailErr && <p>Your email is invalid</p>}
        <TextField
          required
          id="filled-required"
          name='occupation' value={formn.occupation} onChange={onChangeHandler}
          label="Required"
          variant="filled"
        />
        <TextField
          id="outlined-password-input"
          name='password' value={formn.password} onChange={onChangeHandler}
          label="Password"
          type="password"
          autoComplete="current-password"/>
  <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group">
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
        <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={"female"}
          name="gender">
          <FormControlLabel name="gender" value="female" control={<Radio />} label="Female" onChange={onChangeHandler} checked={formn.gender === 'Female'} />
          <FormControlLabel name="gender" value="male" control={<Radio />} label="Male" onChange={onChangeHandler} checked={formn.gender === 'Male'} />
          <FormControlLabel name="gender" value="other" control={<Radio />} label="Other" onChange={onChangeHandler} checked={formn.gender === 'Other'} />
        </RadioGroup>
        <FormGroup>
          <FormControlLabel name="languages" value="html" control={<Checkbox />} onChange={onChangeHandler} label="html" checked={formn.languages.indexOf('html')!==-1} />
          <FormControlLabel name="languages" value="css" control={<Checkbox />} onChange={onChangeHandler} label="css" checked={formn.languages.indexOf('css')!==-1} />
          <FormControlLabel name="languages" value="javascript" control={<Checkbox />} onChange={onChangeHandler} label="javascript" checked={formn.languages.indexOf('javascript')!==-1}/>
        </FormGroup>
        {/* <div>
          <h3>{selects} </h3>
          <select value={selects} onChange={e=>setSelects(e.target.value)}>
            <option>Telangana</option>
            <option>Kerala</option>
            <option>Tamil Nadu</option>
          </select>
        </div>
        <div>
          <h3>{districts}</h3>
          <select value={districts} onChange={e=>setDistricts(e.target.value)} >
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div> */}
        <Button type="submit" onClick={() => { handleSubmit(); validate(); }}>
          Add
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Occupation</TableCell>
                <TableCell align="right">Password</TableCell>
                <TableCell align="right">gender</TableCell>
                <TableCell align="right">languages</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                submittedData.map((data, index) =>
                (
                  <TableRow key={index}>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.occupation}</TableCell>
                    <TableCell>{data.password}</TableCell>
                    <TableCell>{data.gender}</TableCell>
                    <TableCell>{data.languages}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </FormControl>
      {/* <table>
  <thead>
    <tr>
  <th>Name</th>
   <th>email</th>
   <th>occupation</th>
   </tr>
  </thead>
  <tbody>
   { 
   submittedData.map((data,index) =>
    (
      
 <tr key={index}>
<td>{data.name}</td>
<td>{data.email}</td>
<td>{data.occupation}</td>
 </tr>
          
    ) )}
  </tbody>
</table> */}

      {/* </form> */}
    </>


  );
};
