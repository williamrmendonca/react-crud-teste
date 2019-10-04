import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';
import { styled } from '@material-ui/core/styles';

import AddToQueueIcon from '@material-ui/icons/AddToQueue';

const StyledListItem = styled(ListItem)({
  root: {
    fontSize: '8px !important',
  },
  backgroundColor: '#FFF',
  color: '#707683',
  borderColor: '#fff',
  border: 'solid',
  borderTopWidth: 0,
  borderRight: 0,
  borderBottomWidth: 0,
  borderLeftWidth: 4,
  '&:hover': {
    backgroundColor: '#ebf4ff',
    color: '#1af',
    borderColor: '#1af',
  },
  '&:selected': {
    backgroundColor: '#ebf4ff',
    color: '#1af',
    borderColor: '#1af',
  },
  '&.Mui-selected': {
    backgroundColor: '#fff !important',
    color: '#1af !important',
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#ebf4ff !important',
    color: '#1af',
    borderColor: '#1af',
  },
});

const StyleList = styled(List)({
  height: '100%',
});

const StyledListItemIcon = styled(ListItemIcon)({
  backgroundColor: 'inherit',
  color: 'inherit',
});

const StyledListItemUpgrade = styled(ListItem)({
  width: '100%',
  bottom: '10px',
  position: 'absolute',
  '&.MuiButton-contained': {
    width: '100%',
  },
});
const StyledButtonUpgrade = styled(Button)({
  width: '100%',
  alignContent: 'right',
  fontSize: '8px !important',
});

export default function menuNav() {
  return (
    <StyleList>
      <Link to="/">
        <StyledListItem selected button>
          <StyledListItemIcon>
            <DashboardIcon />
          </StyledListItemIcon>
          <ListItemText primary="Dashboard" />
        </StyledListItem>
      </Link>
      <Link to="/testes">
        <StyledListItem button to="/testes">
          <StyledListItemIcon>
            <ShoppingCartIcon />
          </StyledListItemIcon>
          <ListItemText primary="Orders" />
        </StyledListItem>
      </Link>
      <StyledListItem button>
        <StyledListItemIcon>
          <PeopleIcon />
        </StyledListItemIcon>
        <ListItemText primary="Customers" />
      </StyledListItem>
      <StyledListItem button>
        <StyledListItemIcon>
          <BarChartIcon />
        </StyledListItemIcon>
        <ListItemText primary="Reports" />
      </StyledListItem>
      <StyledListItem button>
        <StyledListItemIcon>
          <LayersIcon />
        </StyledListItemIcon>
        <ListItemText primary="Integrations" />
      </StyledListItem>
      <StyledListItemUpgrade>
        <StyledButtonUpgrade variant="contained" size="medium" color="primary">
          <AddToQueueIcon />
          &nbsp;&nbsp;Upgrade versão PRO
        </StyledButtonUpgrade>
      </StyledListItemUpgrade>
    </StyleList>
  );
}
