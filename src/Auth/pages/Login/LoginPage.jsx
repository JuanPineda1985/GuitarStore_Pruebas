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
      height: '60%',
      marginTop: theme.spacing(10),
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
    button2:{
      marginTop: theme.spacing(1)
    }
}))

export const LoginPage = () => {
  
  const [body, setBody] = useState({usuario: '', passwd: ''})
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
            <Typography component='h1' variant='h5'>¿Quien Eres?</Typography>
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
              
              <Button
                fullWidth
                variant='contained'
                color='primary'
                className={classes.button2}
                >
                  yo quiero!
              </Button>
            </form>
          </div>
        </Container>
    </Grid>
  )
}

export default LoginPage;