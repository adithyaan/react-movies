import React,{Component} from 'react';

class Movies extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.getMoviesData();
    }

    getMoviesData = ()=>{
        var url='http://192.168.139.71:8080/api/movies/';

       var promise = fetch(url,{method:'GET',headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
             'Authorization': localStorage.getItem('token')
          }});
       var movieData= promise.then((response)=>response.json())
        movieData.then((response)=>{
            alert(response)
        })
    }
    render(){
        return(
            <h1>Movies</h1>
        );
    }
}

export default Movies;