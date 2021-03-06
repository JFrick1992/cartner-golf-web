import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import User from './../../utils/User'
import TextField from '@material-ui/core/TextField'
import SendFriendReqModel from './../SendFriendReqModel'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
const btnClasses = createMuiTheme({
  overrides: {
    palette: {
      primary: green
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  searchIcon: {
    marginTop: '8px'
  },
  buttonHeight: {
    height: '56px',
    marginTop: '15px',
    color: 'white',
    border: '1px solid rgba(63, 151, 181, 0.5)',
    background: 'green',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 135, .3)',
    borderRadius: '3px',
    display: 'block',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: '56px',
    marginTop: '15px',
    color: 'white',
    border: '1px solid rgba(63, 151, 181, 0.5)',
    boxShadow: '0 3px 5px 2px #90ee9066',
    borderRadius: '3px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    backgroundColor: '#4caf50 !important',
    '&:hover': {
      backgroundColor: 'green !important',
    },
  },
  onLinkHover: {
    '&: hover': {
      cursor: 'pointer',
      backgroundColor: 'green',
      color: '#ffffff',
    },
  },

}))

const SearchBar = () => {
  const classes = useStyles()
  const [value, setValues] = React.useState({
    searchVal: '',
    error: false,
    errorMessage: ''
  })
  const [inviteModel, setModel] = React.useState(<></>)

  const handleChange = (prop) => (event) => {
    setValues({ ...value, [prop]: event.target.value, error: false, errorMessage: '' })
  }
  const onSubmit = event => {
    event.preventDefault()
    if (value.searchVal === '') {
      setValues({ ...value, error: true, errorMessage: 'Please enter a value to search' })
    }
    else {
      User.findUser(value.searchVal)
        .then(({ data }) => {
          console.log(data)
          if (data.message) {
            setValues({ ...value, error: true, errorMessage: data.message })
          } else {
            const model = <SendFriendReqModel inviteWasClosed={inviteWasClosed} user={data} />
            setModel(model)
          }
        })
    }
  }
  const inviteWasClosed = () => {
    setModel(<></>)
  }
  return (
    <FormControl fullWidth className={classes.margin} variant="outlined" >
      <Grid container spacing={3}>
        {inviteModel}
        <Grid item sm={10} xs={12}>
          <TextField
            error={value.error}
            helperText={value.errorMessage}
            variant="outlined"
            margin="normal"
            fullWidth
            name="searchVal"
            label={<InputAdornment className={classes.searchIcon} position="start"><SearchIcon />Search</InputAdornment>}
            type="text"
            id="searchVal"
            onChange={handleChange('searchVal')}
          />
        </Grid>
        <ThemeProvider theme={btnClasses}>
          <Grid
            item sm={2}
            xs={12}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={classes.margin + ' ' +  classes.submit}
              onClick={onSubmit}
            >Search
            </Button>
          </Grid>
        </ThemeProvider>
      </Grid>
    </FormControl >
  )
}

export default SearchBar