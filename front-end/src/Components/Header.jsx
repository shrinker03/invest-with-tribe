import React from 'react';
import Tribe from './assets/Tribe.png'
import Button from '@mui/material/Button';
import {Link as RouterLink, useLocation} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';


const Header = () => {
  const location = useLocation()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  return (
    <Container>
      <Grid container sm={12} justifyContent='space-between' style={{padding: 10}}>
        <Grid item sm={4} xs={6}>
            <RouterLink to='/'>
                <img src={Tribe} alt='tribe' />
            </RouterLink>
        </Grid>
        {(location.pathname === '/') && (!userInfo) ? (
          <Grid item sm={4} xs={6} container justifyContent='flex-end'>
              <RouterLink to='/register' style={{textDecoration: 'none'}}>
                  <Button variant='outlined' size='large' sx={{color: 'white', background: '#00004d'}}>Register</Button>
              </RouterLink>
          </Grid>
        ) : null}
        {userInfo && 
          <Grid item sm={4} xs={6} style={{color: '#00004d'}} container justifyContent='flex-end'>
            <Typography variant='h6'>Your Email:</Typography>
            <Typography style={{color: 'blue'}} variant='h5'>{userInfo?.email}</Typography>
          </Grid>
        }
      </Grid>
    </Container>
  );
};

export default Header;
