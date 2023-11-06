import React from 'react';
import { Link } from "react-router-dom";

import { AppBar, Divider, IconButton, Toolbar, Button, Typography, Box } from "@mui/material";

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Tienda Deportiva FULLSTACK
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to='/'>
                            <Button
                                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                Home
                            </Button>
                        </Link>
                        <Link to='/terms'>
                            <Button
                                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                Términos
                            </Button>
                        </Link>

                        <Button
                            sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                            Contacto
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block', border: 2 }}>
                            Acerca de
                        </Button>
                    </Box>
                    <IconButton color="inherit" aria-label="Admin Access">
                        <Typography variant="body1" sx={{ pr: 1 }}>
                            Acceso Admin
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Divider style={{ marginBottom: 20 }}></Divider>
        </div>
    );
};

export default Header;