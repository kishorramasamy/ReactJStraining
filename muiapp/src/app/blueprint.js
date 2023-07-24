import * as React from 'react';
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




export default function Blueprint() {
    return (
        <Grid sx={{height:'100vh'}}>
            {/* <AppBar position='static' sx={{ backgroundColor: 'black', padding: 4 }}></AppBar> */}
            <Grid container sx={{ backgroundColor: '#02C3D9',  boxShadow:'5'}}>
                <Grid item xs={6}>
                    <Typography  sx={{ color: 'white',mt:'0.5', ml:'2',fontSize:'23px' }}>
                        Blueprint
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography display='flex' justifyContent={'end'}>
                        <Avatar sx={{ backgroundColor: '#02C3D9' }}> <AddIcon color="white" /></Avatar>
                        <Avatar sx={{ backgroundColor: '#02C3D9' }}> <SearchIcon color="white" /></Avatar>
                        <Avatar sx={{ backgroundColor: '#02C3D9' }}> <RefreshIcon color="white" /></Avatar>
                        <Avatar sx={{ backgroundColor: '#02C3D9' }}> <SettingsIcon color="white" /></Avatar>
                    </Typography>
                </Grid>
                
                   <Box display={'flex'}   sx={{ color: 'white', backgroundColor: '#02C3D9', paddingTop: 1, }} >
                   <Avatar sx={{ backgroundColor: '#02C3D9',  }} > <HomeIcon color="white" /></Avatar><Typography mt={1} sx={{fontSize:'15px', paddingRight:'9px'}}>Overview</Typography>
                   <Avatar sx={{ backgroundColor: '#02C3D9' }} > <DraftsIcon color="white" /></Avatar><Typography mt={1} sx={{fontSize:'15px', paddingRight:'9px'}}>Inbox</Typography>
                   <Avatar sx={{ backgroundColor: '#02C3D9',  }} > <AccountTreeIcon color="white" /></Avatar><Typography mt={1}  sx={{fontSize:'15px', paddingRight:'10px'}}>Projects</Typography>
                   </Box>
            </Grid>
            <Box sx={{ backgroundColor: '#E4E7ED',border:1,borderColor:'yellow' }} >
                <Container p={0} sx={{ border:4,backgroundColor: '#E4E7ED'}}>
                    <Grid container spacing={2} marginTop={2}  sx={{border:1, borderColor:'red'}}>
                        <Grid item xs={12} sm={12} md={9} lg={9} >
                            <Grid container spacing={'15'}>
                                <Grid item xs={12} md={6} sm={6}>
                                    <Box  >
                                        <Grid container p={1} sx={{ boxShadow: 2, border: 0, backgroundColor: 'white' }}>
                                            <Grid item xs={2} sm={2} lg={2} ><Avatar sx={{ backgroundColor: '#8B8B8B' }} > <RectangleRoundedIcon color="white" /></Avatar></Grid>
                                            <Grid item xs={10} sm={8} lg={10}  ><Typography sx={{ fontSize: '16px', fontWeight: 'bold', paddingLeft: '10px' }}>Projects</Typography>
                                                <Typography sx={{ fontSize: '14px', fontWeight: 'light', paddingLeft: '10px' }}>Your Favourites</Typography></Grid>
                                        </Grid>
                                        <Box sx={{ boxShadow: 2, border: 0, borderBottom: 0, backgroundColor: 'white', p: '8px', paddingLeft:2 }}>
                                            <Typography sx={{ fontSize: '16px', fontWeight: 'medium' }}>Super Cool App</Typography>
                                            <Typography sx={{ fontSize: '14px', fontWeight: 'regular' }}>iBeliever/demo-app</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} sm={6}>
                                    <Box  >
                                        <Grid container p={1} sx={{ boxShadow: 2, border: 0, backgroundColor: 'white' }}>
                                            <Grid item xs={2} ><Avatar sx={{ backgroundColor: '#E7776B' }} > <PestControlIcon color="white" /></Avatar></Grid>
                                            <Grid item xs={10}><Typography sx={{ fontSize: '16px', fontWeight: 'bold', paddingLeft: '10px' }}>Issues</Typography>
                                                <Typography sx={{ fontSize: '14px', fontWeight: 'light', paddingLeft: '10px' }}>Assigned to You</Typography></Grid>
                                        </Grid>
                                        <Box sx={{ boxShadow: 2, border: 0, borderBottom: 0, backgroundColor: 'white', p: '8px',paddingLeft:2 }}>
                                            <Typography sx={{ fontSize: '16px', fontWeight: 'medium' }}>#1 Main home page</Typography>
                                            <Typography sx={{ fontSize: '14px', fontWeight: 'regular' }}>Version 0.1</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={'15'} mt={0.5}>
                                <Grid item xs={12} md={6} sm={6}>
                                    <Box  >
                                        <Grid container p={1} sx={{ boxShadow: 2, border: 0, backgroundColor: 'white' }}>
                                            <Grid item xs={2}><Avatar sx={{ backgroundColor: '#F8CE2F' }} > <TodayIcon color="white" /></Avatar></Grid>
                                            <Grid item xs={10}><Typography sx={{ fontSize: '16px', fontWeight: 'bold', paddingLeft: '10px' }}>Events</Typography>
                                                <Typography sx={{ fontSize: '14px', fontWeight: 'light', paddingLeft: '10px' }}>Upcoming Today</Typography></Grid>
                                        </Grid>
                                        <Box sx={{ boxShadow: 2, border: 0, backgroundColor: 'white', p: '8px',paddingLeft:2 }}>
                                            <Typography sx={{ fontSize: '16px', fontWeight: 'medium' }}>Standup @<Link href="#" underline="none" sx={{ color: 'green' }}>
                                                &nbsp;2.00 PM
                                            </Link> </Typography>
                                            <Typography sx={{ fontSize: '14px', fontWeight: 'regular' }}>Cool Project</Typography>
                                        </Box>
                                        <Box sx={{ boxShadow: 2, border: 0, borderBottom: 0, backgroundColor: 'white', p: '8px',paddingLeft:2 }}>
                                            <Typography sx={{ fontSize: '16px', fontWeight: 'medium' }}>Tech Talk @
                                                <Link href="#" underline="none" sx={{ color: 'green' }}>
                                                    &nbsp;3.00 PM
                                                </Link> </Typography>
                                            <Typography sx={{ fontSize: '14px', fontWeight: 'regular' }}>Sample App</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} sm={6} >
                                    <Box  >
                                        <Grid container p={1} sx={{ boxShadow: 2, border: 0, backgroundColor: 'white' }}>
                                            <Grid item xs={2}><Avatar sx={{ backgroundColor: '#6DCA9F' }}> <DoneIcon color="white" /></Avatar></Grid>
                                            <Grid item xs={10}><Typography sx={{ fontSize: '16px', fontWeight: 'bold', paddingLeft: '10px' }}>Tasks</Typography>
                                                <Typography sx={{ fontSize: '14px', fontWeight: 'light', paddingLeft: '10px' }}>Upcoming Today</Typography></Grid>
                                        </Grid>
                                        <Box sx={{ boxShadow: 2, border: 0, backgroundColor: 'white', p: '8px',paddingLeft:2 }}>
                                            <Typography sx={{ fontSize: '16px', fontWeight: 'medium' }}>Automatically refresh</Typography>
                                            <Typography sx={{ fontSize: '14px', fontWeight: 'regular' }}>Blueprint</Typography>
                                        </Box>
                                        <Box sx={{ boxShadow: 2, border: 0, borderBottom: 0, backgroundColor: 'white', p: '8px',paddingLeft:2 }}>
                                            <Typography sx={{ fontSize: '16px', fontWeight: 'medium' }}>Handle failures</Typography>
                                            <Typography sx={{ fontSize: '14px', fontWeight: 'regular' }}>Blueprint</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}  sx={{border:1,alignItems: 'stretch',flexGrow: 3}} >
                            <Box  sx={{ backgroundColor: 'white',border: 4,borderColor:'orange',height:'100%',height:{xs:'29vh', sm:'29vh',md:'86vh'} }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 'light',paddingTop:'2px', paddingLeft: '10px', backgroundColor: 'white' }}>Recent Activity</Typography>
                                <Grid container mt={2} sx={{ backgroundColor: 'white', padding: '1' }}>
                                    <Grid item xs={2} sm={2} md={1} lg={2} pl={1} ><Avatar sx={{ backgroundColor: '#8B8B8B' }}> <InsertDriveFileIcon color="white" /></Avatar></Grid>
                                    <Grid item xs={10} sm={10} md={11} lg={10} ><Typography sx={{ fontSize: '16px', fontWeight: 'regular',paddingLeft:{xs:'12px',sm:'0px',md:'38px',lg:'18px'}  }}>Wireframes.psd</Typography>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 'light',paddingLeft:{xs:'12px',sm:'0px',md:'38px',lg:'18px'}  }}>Random Designer</Typography></Grid>
                                </Grid>
                                <Grid container mt={2} sx={{ backgroundColor: 'white' }}>
                                    <Grid item xs={2} sm={2} md={1} lg={2} pl={1}><Avatar sx={{ backgroundColor: '#E7776B' }} > <PestControlIcon color="white" /></Avatar></Grid>
                                    <Grid item xs={10} sm={10} md={11} lg={10}  ><Typography noWrap sx={{ fontSize: '16px', fontWeight: 'regular',paddingLeft:{xs:'12px',sm:'0px',md:'38px',lg:'18px'}  }}>Main home screen</Typography>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 'light',paddingLeft:{xs:'12px',sm:'0px',md:'38px',lg:'18px'}  }}>John Doe</Typography></Grid>
                                </Grid>
                                <Grid container mt={2} display={'flex'} justifyContent={'left'} sx={{ backgroundColor: 'white' }}>
                                    <Grid item xs={2} sm={2} md={1} lg={2} pl={1}><Avatar sx={{ backgroundColor: '#06A5E8' }} > <CodeIcon color="white" /></Avatar></Grid>
                                    <Grid item xs={10} sm={10} md={11} lg={10} ><Typography sx={{ fontSize: '16px', fontWeight: 'regular',paddingLeft:{xs:'12px',sm:'0px',md:'38px',lg:'18px'} }}>5 new commits</Typography>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 'light',paddingLeft:{xs:'12px',sm:'0px',md:'38px',lg:'18px'} }}>Sample User</Typography></Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Grid>
    );
}