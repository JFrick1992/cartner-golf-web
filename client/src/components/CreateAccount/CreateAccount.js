import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import createAccountStyles from './styles.js'
import axios from 'axios'
import { Redirect} from 'react-router-dom'


const CreateAccount = props => {
  const classes = createAccountStyles()
  const [user, setUser] = useState({fname: '', lname: '', username: '', password: '', hasCreated: false})
  const didSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/register', {
      fname: user.fname,
      lname: user.lname,
      username: user.username,
      password: user.password
    })
      .then( ({data: jwt}) => {
        localStorage.setItem('jwt', jwt)
        setUser({...user, hasCreated: true})
      })
      .catch( error => {
        console.error(error)
      })
  }
  
  const formChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  if (user.hasCreated){
    return <Redirect to="/dashboard" /> 
  }
  else{
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={didSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete="fname"
                  name="fname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event)=>{formChange(event)}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                  autoComplete="lname"
                  onChange={(event)=>{formChange(event)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onChange={(event)=>{formChange(event)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event)=>{formChange(event)}}
                />
              </Grid>
            </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled = {user.fname && user.lname && user.username && user.password ? false : true}
              >
                Sign Up
              </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )

  }

}

export default CreateAccount