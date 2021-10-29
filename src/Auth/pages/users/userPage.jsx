import React, { useEffect, useState } from 'react';
import apiBaseUrl from '../../../shared/utils/Api';
import {Card,CardActions,CardContent,TextField,Container,Grid,Typography,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import fondo from '../../../shared/assets/img/fondo.png';

const useStyles = makeStyles(theme => ({
    root:{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    }
}));

const UsersPage = () => {
    const [users, setUsers] = useState([])
    const classes = useStyles()

    const generateItems = (data) => {
        return data.map((item) => {
            return <Grid item xs={6} className={makeStyles.root}>
                <Card>
                    <CardContent>
                        <Typography>
                            {item.email}
                        </Typography>
                        <Typography>
                            {item.role}
                        </Typography>
                        <Typography>
                            {item.shop}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        })
    }
    const getUsers = async () => {
        const response = await fetch(`${apiBaseUrl}/get-users`);
        const responseJson = await response.json();
        setUsers(generateItems(responseJson.data));
        console.log(responseJson);
    }
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <Container maxWidth="sm">
            <Grid container>
                {users}
            </Grid>
        </Container>
    )
}

export default UsersPage
