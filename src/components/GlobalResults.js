import React from "react";
import { Row} from 'react-bootstrap';
import VideoCard from './VideoCard';

class GlobalResults extends React.Component {
   
    constructor(props) {
      super(props);
      this.state= {
         url:"http://www.omdbapi.com/?",
         params:props.params,
       //  url:(this.state.vf+"="+this.state.vv+"&plot=full&apikey=21e17e06&y="+this.state.vy+"&type="+this.state.vt),
         cards:[],
         mydata:"",
         vf:props.vf,
         vv:props.vv,
         y:props.vy,
         type:props.vt,
         test:"http://www.omdbapi.com/?",
         history:props.his,
      }
    //  this.state.location=this.props.location;
      this.state.test=this.state.test+this.state.vf+"="+this.state.vv+"&plot=full&apikey=21e17e06&y="+this.state.y+"&type="+this.state.type;
      this.goback=this.goback.bind(this);
     };

//    this.state.vf+"="+this.state.vv+"&plot=full&apikey=21e17e06&y="+this.state.vy+"&type="+this.state.vt


goback(){
    
  /*    let history = useHistory();
      history.push('/results');*/
      this.state.history.goBack();
      //.push('/detailedresults'); 
  }
  componentDidMount(){

   /*this.setState({
     test:this.state.test+
    });*/
  //  const url=(this.state.test+this.state.vf+"="+this.state.vv+"&plot=full&apikey=21e17e06&y="+this.state.vy+"&type="+this.state.vt);

  
  // alert(this.state.test);

    fetch(this.state.test)      
    .then(response => response.json())
    .then(data => 
      {
       // alert(data['Response'])
        if(data['Response']==='False'){
          // redirect back to search page ...
          alert('We have no results for your query ... PLZ adjust your research and try again');
          this.state.history.push('/home');        
        }  

        if(this.state.vf==="s"){
        this.setState({
          mydata: data['Search'],
          cards: []
        })} else{
          this.setState({
            mydata: [data],
            cards: []
          })

        }
        
        for(let i=0;i<this.state.mydata.length;i++){
          let oneMovie=
          <li style={{listStyleType:"none"}} key={i}>
          <VideoCard his={this.state.history} avatar={this.state.mydata[i]['Poster']}
          movieName= {this.state.mydata[i]['Title']} 
          imdbID= {this.state.mydata[i]['imdbID']}
          year={this.state.mydata[i]['Year']}
          type={this.state.mydata[i]['Type']} />
          </li>
          
          this.setState({
            cards: this.state.cards.concat(oneMovie)
          });
        //  alert('m here')
        }
       
       
      });

      

    }     


  
   
    
render(){ 
  

  return (
    <div  style={{background:'#F7F7F9'}}> 

<Row  className="mt-5 mb-5" align="center" justify="center">
<div  className="overflow-auto card mx-auto col-md-8" style={{height: '400px',display:'block'}}>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <div className="row" style={{width:'100%'}}>
  <div className="row col-md-9" style={{}}>
 
  <h4><span className="badge badge-success mr-2">Results:</span></h4>
 <h4><span className="badge badge-dark mr-1"><span className="badge badge-info mr-1">Video content:</span>{this.state.vv}</span></h4>
 <h4><span className="badge badge-dark"><span className="badge badge-info mr-1">Video type:</span>{this.state.type}</span></h4>
  </div>
  <div className="row col-md-3" style={{textAlign:'right',display:'block'}}>
  <button onClick={this.goback} className="btn btn-secondary">Go back</button>
  </div>
  </div>

</nav>



<ul>
      {this.state.cards}
</ul>

</div>
</Row>
</div> 

);
}
}
export default GlobalResults;


