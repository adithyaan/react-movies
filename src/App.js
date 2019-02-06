import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { OutlinedInput, Snackbar, CssBaseline } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withRouter } from 'react-router-dom';
import Header from './header';
import history from './history';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = {
  card: {
    width:450,height:350, position:'absolute',left:'35%',
    top:'40%',justifyContent: 'center', alignItems: 'center',
     
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  ntf:{position:'absolute',left:'30%',top:'10%'},
  ptf:{position:'absolute',left:'30%',top:'30%'},
  root:{
    flex:1,
    justify:"center",
    alignItems:'center'
  },
  btn:{
    position:'absolute',left:'40%',top:'60%'
  },
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 70,
    position:'absolute',
    top:'20%',
    left:'20%'
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: 4 * 3,
    marginRight: 4* 3,
    backgroudColor:'#D3D3D3	'
    
  },

};

class App extends Component {
  constructor(props){
    super(props);
    this.loginAttempt = this.loginAttempt.bind(this);
    this.routeChange = this.routeChange.bind(this);

    this.state={email:'',password:'',open:false}
  }
  handleChange = (item) => {
    this.setState({[item.target.name]: item.target.value});
    console.log(item.target.name + " == " + item.target.value);
}
  render() {
    return (
      <div style={styles.root}>
       <Header/>
       {this.state.open &&
       <SnackbarContent
       style={{position: 'absolute',
       left: '40%',top:'80%'}}
        variant="error"
        aria-describedby="client-snackbar"
        message={
        <span id="client-snackbar">
          <IconButton />
          Please check the credentials
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
         
        >
          <CloseIcon onClick={this.handleClose} />
        </IconButton>,
      ]}
    />
   }
      <main>
      <CssBaseline />
      <Paper style={styles.paper} elevation={4} >
        <Avatar >
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus
            onChange={this.handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" 
            onChange={this.handleChange}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.loginAttempt}

          >
            Sign in
          </Button>
        </form>
      </Paper>
      </main>
      </div>
    );
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };
  loginAttempt(){
    var url='http://192.168.139.71:8080/api/users/login';
    var details={'email':this.state.email,'password':this.state.password};
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch(url,{method:'POST',headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  body: formBody}).then((response)=>response.json())
    .then((response)=>{
      console.log(JSON.stringify(response)) 
        console.log(JSON.stringify(response))
        localStorage.setItem('token',response.token)
        localStorage.setItem('userid',response.userid)
        localStorage.setItem('username',response.username)
        localStorage.setItem('phonenumber',response.phonenumber)
        localStorage.setItem('email',response.email)

        if(response.hasOwnProperty('token')){
          this.routeChange();
        }
        else{
          this.handleClick();
        }
      })
    .catch((err) => {
        console.log(err);
    })
  }

  handleClick = () => {
    this.setState({ open: true });
  };
  routeChange(){
    let path = './main';
    history.push(path);
    }
}

export default withRouter(App);
