import * as React from 'react';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PestControlIcon from '@mui/icons-material/PestControl';
import CodeIcon from '@mui/icons-material/Code';
import TodayIcon from '@mui/icons-material/Today';
import DoneIcon from '@mui/icons-material/Done';
import RectangleRoundedIcon from '@mui/icons-material/RectangleRounded';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment'
import Badge from '@mui/material/Badge';
import { AppBar, InputAdornment, OutlinedInput, Box, Container, Typography, Grid, Button, Divider, Link } from '@mui/material';

export default function Codementor01() {


  return (

    <Grid sx={{  backgroundColor: '#FAF1FF',height:'100vh' }}>
      {/* <Grid container display={'flex'} justifyContent={'center'} sx={{ backgroundColor: '#003648', boxShadow: '5', padding: 2 }}>
        <Grid item xs={12} sm={6} columnGap={2} pt={'5px'} display='flex' justifyContent={'start'}>
          <Link href="#" underline="none" ><Typography display={'flex'} justifyContent={'left'}  sx={{ fontSize: '11px', fontWeight: 'medium', color: 'white' }}>Find Mentors&nbsp;<Avatar sx={{ backgroundColor: '#003648', color: 'white', height: '9px', width: '9px', paddingTop: '4px' }} > <KeyboardArrowDownIcon sx={{ fontSize: '25px', }} /></Avatar></Typography>
          </Link>
          <Link href="#" underline="none" ><Typography display={'flex'} justifyContent={'left'}  sx={{ fontSize: '11px', fontWeight: 'medium', color: 'white' }}>Find Freelancers&nbsp;<Avatar sx={{ backgroundColor: '#003648', color: 'white', height: '9px', width: '9px', paddingTop: '4px' }} > <KeyboardArrowDownIcon sx={{ fontSize: '25px', }} /></Avatar></Typography>
          </Link>
        
          <Typography sx={{ fontSize: '11px', fontWeight: 'regular', color: 'white' }}>
            How It Works
          </Typography>
          <Typography sx={{ fontSize: '11px', fontWeight: 'regular', color: 'white' }}>
            Events
          </Typography>
          <Typography sx={{ fontSize: '11px', fontWeight: 'regular', color: 'white' }}>
            Blog
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} columnGap={2} display='flex' justifyContent={'end'}>
          <Typography sx={{ fontSize: '12px', fontWeight: 'regular', color: 'white',paddingTop:'5px' }}>
            BECOME A MENTOR
          </Typography>
          <Button variant='contained' disableElevation
            sx={{
              backgroundColor: '#FF6B54',
              textTransform: 'none', '&:hover': {
                background: '#FF6B54',
                textTransform: 'none'
              }, height: 25, width:90, paddingBottom:'8px'
            }} ><Typography sx={{ fontSize: '13px' }}>SIGN UP</Typography></Button>
          <Typography sx={{fontSize: '12px', fontWeight: 'bold', color: 'white',paddingTop:'5px' }}>
            LOG IN
          </Typography>
        </Grid>
      </Grid>
       */}

      <Container sx={{ padding: '10px', backgroundColor: '#FAF1FF',  }}>
        <Grid container sx={{ marginTop: {xs:'10px',sm:'60px'} }} >
          
          <Grid item xs={12} sm={7} paddingLeft={4} alignItems={'right'} padding={'3.5'} >
          <Typography sx={{  fontSize: '21px',fontWeight:'bold', paddingLeft: '15px',paddingBottom:'0px' }}>codementor<Typography sx={{ letterSpacing: 1,fontSize: '11px',fontWeight:'bold', marginTop:'0px' }}>EVENTS</Typography></Typography>
          
          <Typography sx={{ fontSize: '26px',fontWeight:'bold',paddingLeft: '15px', marginTop:'15px',paddingBottom:'0px' }}>Technical and career talks</Typography>
            <Typography sx={{ fontSize: '26px',fontWeight:'bold',paddingLeft: '15px', marginTop:'0px',color:'#881BBB' }}>for developers</Typography>
            <Typography sx={{ fontSize: '16px',fontWeight:'light',paddingLeft: '15px', marginTop:'10px' }}>Attend and give developers talks with topics like new tools and frameworks, techical concets, live coding, career progession, and more.</Typography>
            <Typography display={'flex'} justifyContent={'baseline'}  sx={{ fontSize: '15px',fontWeight:'bold',paddingLeft: '15px', marginTop:'15px',color:'#881BBB' }}>See upcoming events&nbsp;&nbsp;<Avatar sx={{ backgroundColor: '#FAF1FF', color: '#881BBB', height: '20px', width: '20px',}}><ArrowForwardIcon sx={{ fontSize: '25px', }} /></Avatar></Typography>
            {/* <Typography display={'flex'} justifyContent={'center'} sx={{ fontSize: '15px', paddingTop: '35px' }}><Avatar sx={{ backgroundColor: 'white', color: '#007F9E', height: '30px', width: '30px', alignItems: 'baseline', flexGrow: '.09' }} > < IntegrationInstructionsOutlinedIcon sx={{ fontSize: '25px', }} /></Avatar>&nbsp;Find experts for on-demand code review</Typography>
            <Typography display={'flex'} justifyContent={'center'} sx={{ fontSize: '15px', paddingTop: '10px' }}><Avatar sx={{ backgroundColor: 'white', color: '#007F9E', height: '30px', width: '30px', alignItems: 'baseline', flexGrow: '.09' }} > <PersonSearchOutlinedIcon sx={{ fontSize: '25px', }} /></Avatar>&nbsp; Build features for your existing product</Typography>
            <Typography display={'flex'} justifyContent={'center'} sx={{ fontSize: '15px', paddingTop: '10px', paddingBottom: '30px' }}><Avatar sx={{ backgroundColor: 'white', color: '#007F9E', height: '30px', width: '30px', alignItems: 'baseline', flexGrow: '.07' }} > <RocketLaunchOutlinedIcon sx={{ fontSize: '25px', }} /></Avatar>&nbsp;Turn your idea into an MVP</Typography> */}
            {/* <Button variant='contained' disableElevation
              sx={{
                backgroundColor: '#FF644C',
                textTransform: 'none', '&:hover': {
                  background: '#FF644C',
                  textTransform: 'none'
                }, height: 45, marginLeft: '20px'
              }} ><Typography fontSize={'15px'}>FIND A FREELANCER</Typography></Button> */}
          </Grid>
          <Grid item xs={12} sm={5} sx={{ height: { xs:'26vh' , sm:'72vh' , lg:'72vh'  },marginTop:{xs:'6px'} }}>
            <Typography display={'flex'} justifyContent={'center'} sx={{marginRight:{xs:'10px'},marginBottom:{xs:'40px'}}} >   <Box
              component="img"
              sx={{
                height: 300,
                width: 360,
                maxHeight: { xs: 190, sm: 1500, lg: 3500 },
                maxWidth: { xs: 230, sm: 800, lg: 900 },
              }}
              alt="The house from the offer."
              src="https://next-cdn.codementor.io/images/cm-events/homepage/hero-image-dkt.png"
            /></Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}