import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
    
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container className="main" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
        </Typography>
        <form className={classes.form} noValidate>
          
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Meet Abhishek
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="Secondary (#9FA6B2)"
            className={classes.submit}
          >
            <a href="https://www.instagram.com/abhishek_bhonde_/">
            Insta
          </a>
            
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="Info (#Warning (#E4A11B)
            )"
            className={classes.submit}
          >
            <a href="https://www.linkedin.com/in/abhishek-bhonde-ba501a22a">
            Linkedin
          </a>
            
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="Info (#Warning (#E4A11B)
            )"
            className={classes.submit}
          >
            <a href="https://github.com/abhishekbhonde">
            Github
          </a>
            
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="Info (#Warning (#E4A11B)
            )"
            className={classes.submit}
          >
            <a href="https://twitter.com/bhonde_abhishek">
            Twitter
          </a>
            
          </Button>
          <Grid container>
            
            <Grid item>
             
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}