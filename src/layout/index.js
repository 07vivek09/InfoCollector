import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function DenseAppBar() {
    const [value, setValue] = React.useState(0);
    const tabs = useSelector((state)=>state.nav && state.nav.tabs)
    const navigate = useNavigate()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">

                    <Typography variant="h6" color="inherit" component="div">
                        Info-Collector
                    </Typography>

                    <Tabs value={value} style={{ marginLeft: "10%", marginRight: "10%",width:"50%" }} fullWidth={true} centered onChange={handleChange} aria-label="icon label tabs example">
                    {tabs && tabs.map((tab)=>(
                        <Tab style={{ marginLeft: "20%", marginRight: "10%" }} onClick={()=>{navigate(tab.url)}} icon={tab.icon} label={tab.title} />
                        
                    ))}
                        
                    </Tabs>
                </Toolbar>
            </AppBar>

            <div>
                <Outlet />
            </div>
        </Box>
    );
}