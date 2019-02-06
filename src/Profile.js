import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined'
import { Input } from '@material-ui/core';

class Profile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card style={{position:'absolute',left:'30%',top:'30%',width:600,height:400,flex:'display',flexDirection:'column'}} elevation={5}>
                <AccountCircleOutlined
                  style={{position:'absolute',left:'35%',top:'10%',width:150,height:150}}
                  src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/38-512.png"
                 />
                 <div>
                <h1>{localStorage.getItem('username')}dfdf</h1>
                <h1>{localStorage.getItem('email')}</h1>
                <h1>{localStorage.getItem('phonenumber')}</h1>
                </div>
            </Card>
        );
    }
}

export default Profile; 