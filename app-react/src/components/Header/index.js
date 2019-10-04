import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

import { Link } from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    backgroundColor: '#48403C',
    paddingRight: '3%',
    paddingLeft: '3%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  profile: {
    color: '#fff'
  },
  title: {
    flexGrow: 1,
  },
}));



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={5}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: '#1ba', //theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    '&:hover': {
      backgroundColor: '#1ba', //theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Header() {
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.profile.profile);
  const classes = useStyles();

  function handleSignOut() {
    dispatch(signOut());
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const [anchorEl1, setAnchorEl1] = React.useState(null);

  function handleClick1(event) {
    setAnchorEl1(event.currentTarget);
  }

  function handleClose1() {
    setAnchorEl1(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.menu}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick1}
          >
            <MenuIcon />
          </IconButton>

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
          >
            <StyledMenuItem>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </StyledMenuItem>
          </StyledMenu>





          <Typography variant="h6" className={classes.title}>
            Cadastro Teste
          </Typography>
          <Profile className={classes.profile}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <img
                src={`http://api.adorable.io/avatar/${userProfile.name}`}
                alt="Avatar"
              />
              <div className={classes.profile}>
                {`${userProfile.name} ${userProfile.lastName}`}
                {userProfile.isAdmin && <p>Administrador</p>}
              </div>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleSignOut}>Logout</MenuItem>
            </Menu>
          </Profile>
        </Toolbar>
      </AppBar>
    </div>
  );
}
