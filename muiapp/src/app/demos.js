import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
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
import { InputAdornment, OutlinedInput, Container, Grid, Button, Link } from '@mui/material';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const drawerWidth = 240;
const navItems = ['BECOME A MENTOR', 'SIGN UP', 'LOG IN'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    
    const drawer = (
        <Box onClick={handleDrawerToggle}   sx={{ textAlign: 'center',backgroundColor:'#003648',color:'white',height:'100vh',padding:'10px' }}>
            <Avatar sx={{ backgroundColor: '#003648', color: 'white', height: '30px', width: '30px', alignItems: 'end', flexGrow: '.09' }} > < ClearIcon sx={{ fontSize: '25px', }} /></Avatar>
            <Typography  sx={{ fontSize: '12px', fontWeight: 'medium', marginTop:'17px'}}>Find Mentors <KeyboardArrowDownIcon sx={{ fontSize: '14px', }} /></Typography>
            <Typography  sx={{ fontSize: '12px', fontWeight: 'medium', marginTop:'17px'}}>Find Freelancers <KeyboardArrowDownIcon sx={{ fontSize: '14px', }} /></Typography>
            <Typography sx={{ fontSize: '12px', fontWeight: 'medium', marginTop:'17px' }}>
            How It Works
          </Typography>
          <Typography sx={{fontSize: '12px', fontWeight: 'medium', marginTop:'17px'  }}>
            Events
          </Typography>
          <Typography sx={{fontSize: '12px', fontWeight: 'medium', marginTop:'17px',marginBottom:'17px'  }}>
            Blog
          </Typography>

            <Divider color={'white'}/>
            <Typography  sx={{ fontSize: '12px', fontWeight: 'medium', marginTop:'17px' }}>
            BECOME A MENTOR
          </Typography>
            {/* <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
             <Button variant='contained' disableElevation 
            sx={{
              backgroundColor: '#FF6B54',
              textTransform: 'none', '&:hover': {
                background: '#FF6B54',
                textTransform: 'none'
              }, height: 25, width:90, marginTop:'17px'
            }} ><Typography sx={{ fontSize: '12px', fontWeight: 'medium', justifyContent:'normal'}}>SIGN UP</Typography></Button>
          <Typography sx={{fontSize: '12px', fontWeight: 'medium', marginTop:'17px',paddingTop:'5px' }}>
            LOG IN
          </Typography>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{backgroundColor:'#003648'}}>
                <Toolbar sx={{columnGap:'0.9'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                   
                    <Link href="#" underline="none" mr={1} ><Typography display={'flex'} justifyContent={'center'} sx={{ fontSize: '12px', fontWeight: 'medium', color: 'white', display: { xs: 'none', sm: 'block' } }}>Find Mentors<KeyboardArrowDownIcon sx={{ fontSize: '14px', }} /></Typography>
                    </Link> 
                    <Link href="#" underline="none" mr={1}><Typography display={'flex'} justifyContent={'baseline'} sx={{ fontSize: '12px', fontWeight: 'medium', color: 'white', display: { xs: 'none', sm: 'block' } }}>Find Freelancers <KeyboardArrowDownIcon sx={{ fontSize: '14px', }} /></Typography>
                    </Link>
                    <Link href="#" underline="none" mr={1.2}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'regular', color: 'white', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        How It Works
                    </Typography></Link>
                    <Link href="#" underline="none" mr={1.2}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'regular', color: 'white', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        Events
                    </Typography></Link>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'regular', color: 'white', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        Blog
                    </Typography>
                    
                    {/* <Link href="#" underline="none" display={'flex'} justifyContent={'end'} mr={1}>
                    <Typography sx={{ fontSize: '11px', fontWeight: 'regular', color: 'white', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        Blog
                    </Typography></Link> */}
                    {/* <Typography display={'flex'} justifyContent={'end'} sx={{ fontSize: '11px', fontWeight: 'regular', color: 'white', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        hello
                    </Typography> */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {/* {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))} */}
                         <Grid item columnGap={1.5} display='flex' justifyContent={'end'}>
          <Typography  sx={{ fontSize: '12px', fontWeight: 'regular', color: 'white',paddingTop:'5px' }}>
            BECOME A MENTOR
          </Typography>
          <Button variant='contained' disableElevation 
            sx={{
              backgroundColor: '#FF6B54',
              textTransform: 'none', '&:hover': {
                background: '#FF6B54',
                textTransform: 'none'
              }, height: 25, width:90, 
            }} ><Typography sx={{ fontSize: '13px', justifyContent:'normal'}}>SIGN UP</Typography></Button>
          <Typography sx={{fontSize: '12px', fontWeight: 'bold', color: 'white',paddingTop:'5px' }}>
            LOG IN
          </Typography>
        </Grid>
                    </Box>
                    
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="persistent"
                    open={mobileOpen}
                    onClose={handleDrawerToggle }
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" display={'flex'} justifyContent={'center'} sx={{ p: 0, }}>
                <Toolbar />
                <Grid sx={{ padding: '30px', backgroundColor: 'white', }}>
                    <Grid container sx={{ marginTop: { xs: '50px', sm: '60px' } }} >
                        <Grid item xs={12} sm={7} sx={{  height: { xs: '26vh', sm: '72vh', lg: '72vh' } }}>
                            <Typography display={'flex'} justifyContent={'center'} sx={{ marginRight: { xs: '10px',}, marginBottom: { xs: '40px' } }} >   <Box
                                component="img"
                                sx={{
                                    height: 340,
                                    width: 420,
                                    maxHeight: { xs: 180, sm: 1500, lg: 3500 },
                                    maxWidth: { xs: 220, sm: 800, lg: 900 },
                                }}
                                alt="The house from the offer."
                                src="https://next-cdn.codementor.io/images/landing-page/freelance-job.png"
                            /></Typography>
                        </Grid>
                        <Grid item xs={12} sm={5} marginTop={'15px'}>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bold', paddingLeft: '15px', marginTop: { xs: '55px', sm: '0px' } }}>Project-based freelance Work</Typography>
                            <Typography display={'flex'} justifyContent={'left'} sx={{ fontSize: '15px', paddingTop: '35px' }}><Avatar sx={{ backgroundColor: 'white', color: '#007F9E', height: '30px', width: '30px', alignItems: 'baseline', flexGrow: '.09' }} > < IntegrationInstructionsOutlinedIcon sx={{ fontSize: '25px', }} /></Avatar>&nbsp;Find experts for on-demand code review</Typography>
                            <Typography display={'flex'} justifyContent={'left'} sx={{ fontSize: '15px', paddingTop: '10px' }}><Avatar sx={{ backgroundColor: 'white', color: '#007F9E', height: '30px', width: '30px', alignItems: 'baseline', flexGrow: '.09' }} > <PersonSearchOutlinedIcon sx={{ fontSize: '25px', }} /></Avatar>&nbsp; Build features for your existing product</Typography>
                            <Typography display={'flex'} justifyContent={'left'} sx={{ fontSize: '15px', paddingTop: '10px', paddingBottom: '30px' }}><Avatar sx={{ backgroundColor: 'white', color: '#007F9E', height: '30px', width: '30px', alignItems: 'baseline', flexGrow: '.07' }} > <RocketLaunchOutlinedIcon sx={{ fontSize: '25px', }} /></Avatar>&nbsp;Turn your idea into an MVP</Typography>
                            <Button variant='contained' disableElevation
                                sx={{
                                    backgroundColor: '#FF644C',
                                    textTransform: 'none', '&:hover': {
                                        background: '#FF644C',
                                        textTransform: 'none'
                                    }, height: 45, marginLeft: '20px'
                                }} ><Typography fontSize={'15px'}>FIND A FREELANCER</Typography></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;