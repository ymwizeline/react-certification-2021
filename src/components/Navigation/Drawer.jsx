import { Drawer, IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import * as React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    list: {
        width: 250
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`
    }
});

const SideDrawer = () => {
    const classes = useStyles();
    const [state, setState] = useState({ left: false });

    const toggleDrawer = (anchor, open) => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ [anchor]: open });
    };

    const sideDrawerList = anchor => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                <ListItem button>
                    <ListItemText primary={"Home"}>
                        <Link to={'/'}></Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText primary={"Favorites"}>
                        <Link to={'/favorites'}></Link>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer("left", true)}
            >
                <Menu fontSize="small" style={{ color: `white` }} />
            </IconButton>
            <Drawer
                anchor="left"
                open={state.left}
                onOpen={toggleDrawer("left", true)}
                onClose={toggleDrawer("left", false)}
            >
                {sideDrawerList("left")}
            </Drawer>
        </React.Fragment>
    );
};

export default SideDrawer;
