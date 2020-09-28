import React, { useState, useEffect } from 'react';
import { useVideos } from '../../providers/Videos/ApiContext';
import SideDrawer from './Drawer';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
      },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
    },
}));

const Nav = ({ searchKey, setSearchKey, submitSearch}) => {
    // const [ searchKey, setSearchKey ] = useState("Wizeline");
    // const [ result, setResult ] = useState(searchKey);
    // const videos = useYoutubeApi(result);
    // const { state, dispatch } = useVideos();
    // console.log(state);
    const classes = useStyles();

    // const search = event => {
    //     event.preventDefault();
    //     setResult(searchKey);
    // }

    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <SideDrawer></SideDrawer>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <form onSubmit={submitSearch}>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            value={searchKey}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={e => setSearchKey(e.target.value)}
                        />
                    </form>
                </div>
                <div className={classes.grow} />
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    >
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Nav;