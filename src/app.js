import React, {useEffect} from 'react';
import clsx from 'clsx';
import './app.css';

import CustomBrowserRouter from "./app.router";
import * as initialState from "./initial-state.json";
import {CssBaseline} from "@material-ui/core";
import {useTheme} from '@material-ui/core/styles';
import {Drawer, Grid, Container, AppBar, Toolbar, Typography, ListSubheader, IconButton} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/core';
import {LightTheme} from "./shared/light-theme";
import {useAppStyles} from "./app.styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useApp} from "./app.hooks";

const App = props => {
    const classes = useAppStyles();
    const theme = useTheme();
    const {openDrawer, showDrawer} = useApp();
    console.log('classes');
    console.log(classes);

    const drawerWidth = 240
    return(

            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={clsx(classes.appBar, {
                    [classes.appBarShift]: openDrawer,
                })}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={showDrawer}
                            edge="start"
                            className={clsx(classes.menuButton, openDrawer && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Persistent drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left"
                        variant="persistent"
                        open={openDrawer}
                        className={classes.appDrawer}
                        classes={{
                            paper: classes.appDrawerPaper
                        }}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={showDrawer}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <ListSubheader>Clients</ListSubheader>
                </Drawer>
                <main className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}>
                    <div className={classes.drawerHeader} />
                    <CustomBrowserRouter/>
                </main>
            </div>
    )

};

export default App;