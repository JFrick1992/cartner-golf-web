import { makeStyles } from '@material-ui/core/styles';
import { green, deepOrange, deepPurple } from '@material-ui/core/colors';
const friendCardStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
    flexBasis: '100%',
    // minInlineSize: 'max-content',
    // marginBottom: '.5rem',
  },
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: '#05b0b0cc!important;',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  green: {
    color: 'white',
    backgroundColor: green[500],
  },
  buttons: {
    maxWidth: '24vh',
    minWidth: '24vh',
    flexBasis: '24vh',
    marginRight: 'auto',
  },
  accept: {
    borderColor: '#4caf50',
    color: '#ffffff'
  },
  MuiTypography: {
    boxSizing: 'border-box',
    marginRight: '-.5rem',
    marginBottom: '-.5rem',
  },
  MuiButtonRoot: {
    display: 'contents',
    float: 'left',
  },
  cardStyles: {
    // display: 'inline-flex'
  },
}));

export default friendCardStyles