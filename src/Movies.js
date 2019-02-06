
import React,{Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import AddRounded from '@material-ui/icons/AddRounded';


class Movies extends React.Component{
  constructor(props){
    super(props);
    this.state={data:[]}
    console.log("Movies: " + JSON.stringify(props));
  }
  componentDidMount(){
    var data=this.props.prop;
    this.setState({data:data})
  }
    render(){
      var data=this.state.data;
        return(
            <div>
              {this.props.show && 
                 <List dense style={styles.container} disablePadding={true}>
          {this.state.data.map((value) => (
           
              <Card style={styles.listitem}>
            <ListItem key={value} button > 
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value}`}
                  src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/38-512.png"
                  
                />
              </ListItemAvatar>
          <ListItemText primary={<b>{(value.name).toUpperCase()}</b>  }  secondary={
            <React.Fragment>
              <Typography component="span" color="textPrimary">
                      {value.description}
              </Typography>
            </React.Fragment>
          }/>
              
            </ListItem>
            <ListItem key={value} button > 
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value}`}
                  src="https://cdn4.iconfinder.com/data/icons/rcons-user/32/secret_agent_man-512.png"
                  
                />
              </ListItemAvatar>
          <ListItemText primary={<b>{(value.casts).toUpperCase()}</b>  }  secondary={
            <React.Fragment>
              <Typography component="span" color="textPrimary">
                      {value.releasedon}
              </Typography>
            </React.Fragment>
          }/>
              
            </ListItem>
{/* 
            <ListItem key={value} button > 
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value}`}
                  src="https://cdn3.iconfinder.com/data/icons/main-ui-elements-with-color-bg-vol-2/512/heart-512.png"
                />
              </ListItemAvatar>
          <ListItemText primary={<b>{(value.casts).toUpperCase()}</b>  }  secondary={
            <React.Fragment>
              <Typography component="span" color="textPrimary">
                      {value.releasedon}
              </Typography>
            </React.Fragment>
          }/>
            </ListItem> */}
            <ListItem style={{display: 'flex',flex: 1,alignItems:'flex-end'}}>
            <Avatar 
                              alt={`Avatar n°${value}`}

            src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/heart-love-like-likes-loved-favorite-512.png"/>
            
            </ListItem>
            </Card>

          ))}
        </List>
              }
            </div>
        );
    }
}
const styles = {
  container:{
      position:'absolute',
      left:'20%',
      right:'20%',
      top:'20%',
        },
  listitem:{
      marginBottom:30,
      width:800,
      minHeight:300
  }
}
export default Movies;