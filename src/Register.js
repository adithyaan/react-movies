import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { OutlinedInput } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withRouter, Router, BrowserRouter, Route, Link } from 'react-router-dom'
import history from './history';
import Header from './header';

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
      padding: 10,
      height:500,
      position:'absolute',
      top:'20%',
      left:'10%'
    },
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: 4 * 3,
      marginRight: 4* 3,
      
    },
  
  };

class Register extends Component {

  
    constructor(props){
        super(props)
        this.handleclick = this.handleclick.bind(this);
        this.routeChange = this.routeChange.bind(this);
        this.state={name:'',email:'',password:'',phonenumber:''}
    }
    handleChange = (item) => {
        this.setState({[item.target.name]: item.target.value});
        console.log(item.target.name + " == " + item.target.value);
    }

    routeChange(){
      let path = './main';
      history.push(path);
      }
    render() {
      return (
        <div style={styles.root}>
         <Header />
        <main style={styles.main} >
        <Paper style={styles.paper} >
          <Avatar >
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={this.handleclick}>
          <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="User">User name</InputLabel>
              <Input id="username" name="name" autoComplete="username" autoFocus 
                onChange={this.handleChange}
                on
              />
            </FormControl>
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
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="number">Phone number</InputLabel>
              <Input id="phonenumber" name="phonenumber" 
              onChange={this.handleChange}
              autoComplete="phonenumber" autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={this.handleclick}
              fullWidth
              variant="contained"
              color="primary">
              Sign Up
            </Button>
          </form>
        </Paper>
        </main>
        </div>
      );
    
    }
    handleclick(){
        var details = {
            'name': this.state.name, 
            'email': this.state.email,
            'phonenumber': this.state.phonenumber,
            'password': this.state.password
            
            
        };
        alert(JSON.stringify(this.state.name))
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('http://192.168.139.71:8080/api/users/register',{method:'POST',headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        body: formBody}).then((response)=>response.json())
          .then((response)=>{
            console.log(JSON.stringify(response)) 
              console.log(JSON.stringify(response))
              localStorage.setItem('token',response.token)
              localStorage.setItem('userid',response.user._id)
            alert(localStorage.getItem('userid'))
            this.routeChange();
          })
          .catch((err) => {
              console.log(err);
          })
          
    }

   
}  
 export default withRouter(Register);
  