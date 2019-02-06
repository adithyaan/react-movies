import React,{Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import Movies from './Movies';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Profile from './Profile';
import history from './history';
class Container extends Component{

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };
 
    constructor(props){
        super(props)
        this.changeContent=this.changeContent.bind(this)
        this.state={movie_data:[],movies:true,profile:false,isAuthorized:false};
    }

    componentDidMount(){
        this.getMoviesData();
    }
    getMoviesData = ()=>{
      this.setState({
        movies: false
      });
        var url='http://192.168.139.71:8080/api/movies/';

       var promise = fetch(url,{method:'GET',headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
             'Authorization': localStorage.getItem('token')
          }});
       var movieData= promise.then((response)=>response.json())
        movieData.then((response)=>{
          alert(JSON.stringify(response));
            if(!response.hasOwnProperty('error')){
            this.setState({movie_data:response, movies: true});
            }
            else{
              alert(JSON.stringify(response)+"else");
              history.push('./App')
              this.setState({movies: false,show:false});
              alert(response.error.name);
              
            }
        });
    }
    changeContent=(index)=>{
      if(index==0){
        this.setState({movies:true,profile:false})
      }
      else if(index==1){
        this.setState({movies:false,profile:true})
      }
    }
    render(){

      const sideList = (
        <div>
          <List style={{width:300}}>
            {['Home', 'Profile'].map((text, index) => (
              <ListItem button key={text} onClick={()=>{this.changeContent(index)}}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Logout'].map((text, index) => (
              <ListItem button key={text} onClick={()=>{this.changeContent(index)}}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
        var data=this.state.movie_data;
        console.log("data"+data+"size"+data.length)
        return(
            <div>
    <AppBar position="static">
    <Toolbar>
      <IconButton style={{position:'absolute',left:'0%'}} className = "menuButton"color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
      <MenuIcon />

      </IconButton>
    </Toolbar>
    </AppBar>     
    {this.state.movies &&
      
         <Movies prop={this.state.movie_data} show={this.state.movies}/>
    }
    {this.state.profile &&
    <div>
      <Profile />
      </div>
    }

        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
          <div>
            {sideList}
            </div>
          </div>
        </Drawer>

      </div>


        );
    }

    toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open,
      });
    };
  
}
const styles = {
    container:{
        position:'absolute',
        left:'20%',
        right:'20%',
        top:'10%',
          },
    listitem:{
        marginBottom:30,
        width:800,
        minHeight:300
    }
}
export default Container;