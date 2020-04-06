import { makeStyles } from '@material-ui/core/styles';
const recReqDisplayStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '50%',
    padding: '5px 0px',
    display: 'contents'
  },
  listStyle: {
    display: 'contents'
  },
  accept: {
    borderColor: 'green',
    color: 'green',
    marginLeft: '3rem',
    marginRight: '10rem',

  },

  buttons: {
    maxWidth: '70%',
    minWidth: ' 70%',
    flexBasis: ' 70%',
    marginTop: '1vh',
  },
  container: {
    width: '100%',
    display: 'flex',
    // flexWrap: 'wrap',
    flexBasis: '100%',
    boxSizing: 'borderBox',

  },
}))

export default recReqDisplayStyles