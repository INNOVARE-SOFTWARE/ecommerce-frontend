import React from 'react';
import { AppBar, Divider, IconButton, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Tienda Deportiva FULLSTACK
                    </Typography>
                    <IconButton color="inherit" aria-label="Admin Access">
                        <Typography variant="body1" sx={{ pr: 1 }}>
                            Acceso Admin
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Divider style={{marginBottom:20}}></Divider>
        </div>
    );
};

export default Header;