import React from "react";
import { Row} from 'react-bootstrap';
import DetailedVideoCard from './DetailedVideoCard';

class DetailedResult extends React.Component {
   
    constructor(props) {
      super(props);
      this.state= {
         year:props.y,
         title:props.t,
         his:props.his,
         test:"http://www.omdbapi.com/?t=Iron+Sky%3A+The+Coming+Race&y=2019&plot=full&apikey=21e17e06",
         url:"http://www.omdbapi.com/?&plot=full&apikey=21e17e06&",
         detailedVideo:""
      }
      
      this.state.url=this.state.url+"t="+this.state.title+"&y="+this.state.year;
    //  alert(this.state.url)
      
    };


  componentDidMount(){
    fetch(this.state.url)      
    .then(response => response.json())
    .then(data => 
      {
        
        const video=  <DetailedVideoCard 
        
        his={this.state.his}
        avatar= {data['Poster']}
        movieName={data['Title']}
        imdbID={data['imdbID']}
        type={data['Type']}
        year={data['Year']}

        released={data['Released']}
        runtime={data['Runtime']}
        genre={data['Genre']}
        writer={data['Writer']}
        director={data['Director']}
        actors={data['Actors']}
        plot={data['Plot']}
        languages={data['Language']}
        country={data['Country']}
        awards={data['Awards']}
        ratings={data['Ratings']}
        imdbratings={data['imdbRating']}
        imdbvotes={data['imdbVotes']}
        dvd={data['DVD']}
        production={data['Production']} 
        />  
        
        this.setState({detailedVideo:video});
        
        });
       
    
    }     


  
   
    
render(){ 
  

  return (
    <div  style={{background:'#F7F7F9'}}> 

<Row  className="mt-5 mb-5" align="center" justify="center">
<div  className="overflow-auto card mx-auto col-md-8" style={{height: '400px',textAlign: 'left',display:'block'}}>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    {/* <a className="navbar-brand" href="http://www.google.com">Search Results</a> */}
    <h2><span className="badge badge-success mr-2">Detailed Search Result</span></h2>

  </div>
</nav>


 {this.state.detailedVideo}



</div>
</Row>
</div> 

);
}
}
export default DetailedResult;


