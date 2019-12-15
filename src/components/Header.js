import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#fff'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          className={classes.root}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className={classes.root}>
          Acoustic Content
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
