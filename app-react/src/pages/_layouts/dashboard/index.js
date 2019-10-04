import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tooltip from '@material-ui/core/Tooltip';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import MenuNav from './menuNav';
import MenuNav from './menuNav';

import SettingDrawer from '~/components/Setting';
import logo from '~/assets/images/omni_g.png';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://tecmasternet.com.br/" target="_blank">
        Tecmaster - Gestão eficiente de documentos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: '#FFF', // Cor de fundo do Topo
    minHeight: 50,
    color: '#707683',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    minHeight: '50px !important',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    minHeight: '50px !important',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 25,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    backgroundColor: '#FFF', // Cor de fundo da lateral
    color: '#707683',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(8),
    },
  },
  drawerPaperItems: {
    paddingLeft: 2,
  },
  appBarSpacer: {
    minHeight: 50,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingLeft: 0,
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  toolbarItem: {
    backgroundColor: '#FFF',
    color: '#707683',
    '&:hover': {
      backgroundColor: '#1af',
      color: '#2a0',
    },
  },
  ListItems: {
    height: '100%',
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={3}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: '#1ba', // theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    '&:hover': {
      backgroundColor: '#1ba', // theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Dashboard({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  function handleClick1(event) {
    setAnchorEl1(event.currentTarget);
  }

  function handleClose1() {
    setAnchorEl1(null);
  }

  const totalUsers = useSelector(state => state.users.totalItens);
  // console.log(totalUsers);
  // console.log('Tot Users');

  // const currentLocation = window.location.pathname;

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  /*
  if (currentLocation === '/users') {
    titleDash = '/Home/Usuários';
  }
  if (currentLocation === '/testes') {
    titleDash = '/Home/Teste';
  }
  */

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation="2"
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

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

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            teste
            <img
              src={logo}
              height="35px"
              alt="Omni Doc"
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            />
          </Typography>

          <Tooltip title="Notificações">
            <IconButton color="inherit">
              <Badge badgeContent={totalUsers} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <SettingDrawer />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <img src={logo} height="35px" alt="Omni Doc" />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <MenuNav />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container id="XXX" maxWidth="lg" className={classes.container}>
          {/* Paginas filho */}
          {children}
        </Container>
        <Copyright />
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  children: PropTypes.element.isRequired,
};
