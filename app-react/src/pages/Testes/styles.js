import { lighten, makeStyles } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import { Colors } from '~/styles/Colors';

export const useToolbarStyles = makeStyles(theme => ({
  // Paleta 304 - colours.cafe

  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  iconFilter: {
    color: Colors.cor4,
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
}));

export const useStyles = makeStyles(theme => ({
  root: {
    width: '98%',
    _marginTop: theme.spacing(3),
    color: Colors.cor1,
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
  paper: {
    backgroundColor: Colors.cor1,
    width: '100%',
    marginBottom: theme.spacing(2),
    borderRadius: 10,
    color: Colors.cor4,
    marginLeft: theme.spacing(3),
  },
  table: {
    backgroundColor: Colors.cor3,
    minWidth: 700,
  },
  rowTitle: {
    backgroundColor: Colors.cor2,
    color: '#fff',
  },
  pagination: {
    backgroundColor: Colors.cor2,
    color: Colors.cor1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  tableWrapper: {
    overflow: 'auto',
  },
  cell: {
    color: Colors.cor1,
    borderBottomColor: Colors.cor1,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export const useStylesPagination = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },
}));
