import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {ReactComponent as Hello} from './assets/Hello.svg'
import get from './assets/Email.gif'
import Hidden from '@mui/material/Hidden';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';


import { makeStyles } from '@mui/styles';

const theme = createTheme();

const useStyles = makeStyles({
    root: {
      [theme.breakpoints.up('sm')]: {
        paddingBottom: 133
      },
    },
  });

const Index = () => {
  const classes = useStyles()  
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  return( 
    <>   {userInfo ? (
        <Grid container justifyContent='space-between' className={classes.root}>
            <Grid container sm={6}> 
                <img src={get} alt='get' style={{width: '100%', minHeight: 350}} />
            </Grid>
            <Grid container sm={6} padding={3}> 
                <Hidden smDown>
                    <Grid container style={{color: '#00004d', lineHeight: 'normal', marginTop: 40 }}>
                        <Typography variant='h2'>Thanks for Registering!</Typography>
                        <Typography variant='h3' style={{margin: '12px 0'}}>Please check your Email.</Typography>
                        <Typography variant='h5'>You can also follow me on linkedin <Link href='https://www.linkedin.com/in/shivam-damre-b84538170/'>Linkedin</Link></Typography> 
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid container style={{color: '#00004d'}}>
                        <Typography variant='h2'>Thanks for Registering!</Typography>
                        <Typography variant='h3' style={{margin: '12px 0'}}>Please check your Email.</Typography>
                        <Typography variant='h5'>You can also follow me on linkedin <Link href='https://www.linkedin.com/in/shivam-damre-b84538170/'>Linkedin</Link></Typography> 
                    </Grid>
                </Hidden>    
            </Grid>
        </Grid>
    ) : (
        <Grid container justifyContent='space-between' className={classes.root}>
            <Grid container sm={6}> 
                <Hello style={{width: '100%', minHeight: 350}} />
            </Grid>
            <Grid container sm={6} padding={3}> 
                <Hidden smDown>
                    <Grid container style={{color: '#00004d', lineHeight: 'normal', marginTop: 40 }}>
                        <Typography variant='h1' style={{textAlign: 'center'}}>Hey!<span className="wave">👋</span></Typography>
                        <Typography variant='h3'>Shivam Damre here... Full Stack Developer</Typography>
                        <Typography variant='h5'>This is a Assignment given by Invest With Tribe. You can click on register to review the Assignment. Pls, do check. You can also follow me on linkedin <Link href='https://www.linkedin.com/in/shivam-damre-b84538170/'>Linkedin</Link></Typography> 
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid container style={{color: '#00004d'}}>
                        <Typography variant='h2'>Hey! <span className="wave">👋</span></Typography>
                        <Typography variant='h3' style={{margin: '12px 0'}}>I'm Shivam Damre a Full Stack Developer</Typography>
                        <Typography variant='h5'>You can also follow me on linkedin <Link href='https://www.linkedin.com/in/shivam-damre-b84538170/'>Linkedin</Link></Typography> 
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    )}
        
    </>
    )
};

export default Index;
