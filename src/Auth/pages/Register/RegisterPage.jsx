import React, {useState} from 'react'
import {Grid, Container, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fondo from '../../../shared/assets/img/fondo.png'
import {LockOutlined as LockOutlined} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root:{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container:{
      opacity: '0.9',
      height: '80%',
      marginTop: theme.spacing(1),
      [theme.breakpoints.down(400 + theme.spacing(2) + 2)]:{
        marginTop: 0,
        width: '100%',
        height: '100%'
      }
    },
    div:{
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar:{
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main
    },
    form:{
      width: '100%',
      marginTop: theme.spacing(1)
    },
    button:{
      marginTop: theme.spacing(10)
      
    }
}))

export const RegisterPage = () => {
  
  const [body, setBody] = useState({usuario: '',email:'',role:'', passwd: ''})
  const classes = useStyles()

  const handleChange = (event) =>{
     console.log(event.target.value)
     setBody({
       ...body,
       [event.target.name]: event.target.value
     })
  }

  return (
    <Grid container component='main' className={classes.root}>
        <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container} >
          <div className={classes.div}>
            <Avatar className={classes.avatar} />
            <Typography component='h1' variant='h5'>Registrate con Nosotros</Typography>
            <form className={classes.form}>
              <TextField
                  fullWidth
                  autoFocus
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='Usuario'
                  name='usuario'
                  value={body.usuario}
                  onChange={handleChange}
              />
              <TextField
                  fullWidth
                  autoFocus
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='email'
                  name='email'
                  value={body.email}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  autoFocus
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='role'
                  name='role'
                  value={body.role}
                  onChange={handleChange}
                />
              <TextField
                  fullWidth
                  type='password'
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='Contraseña'
                  name='passwd'
                  value={body.passwd}
                  onChange={handleChange}
              />
              <Button
                fullWidth
                variant='contained'
                color='primary'
                >
                  A rockear!
              </Button>
            </form>
          </div>
        </Container>
    </Grid>
  )
}

export default RegisterPage;