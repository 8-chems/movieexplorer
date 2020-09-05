import React from "react";
//import { useHistory } from 'react-router-dom';
class DetailedVideoCard extends React.Component {
   
    constructor(props) {
      super(props);
      this.state= {
          his:props.his,
          avatar:props.avatar,
          movieName:props.movieName,
          imdbID:props.imdbID,
          type:props.type,
          year:props.year,

          released:props.released,
          runtime:props.runtime,
          genre:props.genre,
          writer:props.writer,
          director:props.director,
          actors:props.actors,
          plot:props.plot,
          languages:props.languages,
          country:props.country,
          awards:props.awards,
          ratings:props.ratings,
          imdbratings:props.imdbratings,
          imdbvotes:props.imdbvotes,
          dvd:props.dvd,
          production:props.production,
      }
      this.goback=this.goback.bind(this);
    }

    goback(){
    
    /*    let history = useHistory();
        history.push('/results');*/
        this.state.his.goBack();
        //.push('/detailedresults'); 
    }

render(){
    return (
        <div className="card mb-3" style={{height: '500px',width:'100%'}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img /*style={{height: '450px'}}*/ src={this.state.avatar} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
             
             
             <div className="card-body">
              <h5 className="card-title">{this.state.movieName+" ("+this.state.year+")"}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{"Type:"+this.state.type}</h6>
             </div>
             
             <div className="card"> 
             
             <a href="#nothing" style={{width:'100%',height:'30px',fontSize:'20px'}} className="btn badge badge-secondary" data-toggle="collapse" data-target="#plotdetails">{this.state.type+" overview"} </a>
             <div className="card collapse pl-2" id="plotdetails">
             <p> {this.state.plot}</p>
             </div>
             </div>


             <div className="card"> 
             <a href="#nothing" style={{width:'100%',height:'30px',fontSize:'20px'}} className="btn badge badge-secondary" data-toggle="collapse" data-target="#actorsdetails">Human side details</a>
             <div className="card collapse pl-2" id="actorsdetails">
             
             <div className="row pl-2">
             <div className="row col-md-2">   
             <a href="#nothing" style={{width:'100%',height:'30px'}} className="badge badge-pill badge-Light"> Writer: </a>
             </div>

             <div className="row col-md-11">   
             <p> {this.state.writer}</p>
             </div>
             </div>  

            <div className="row pl-2">
             <div className="row col-md-2">   
             <a href="#nothing" style={{width:'100%',height:'30px'}} className="badge badge-pill badge-Light"> Actors: </a>
             </div>
            <div className="row col-md-11">   
             <p> {this.state.actors}</p>
             </div>
             </div>  
             </div>
             </div>

             <div className="card"> 
             <a href="#nothing" style={{width:'100%',height:'30px',fontSize:'20px'}} className="btn badge badge-secondary" data-toggle="collapse" data-target="#technicaldetails">Technical details </a>
             <div className="card collapse pl-2" id="technicaldetails">

            <div className="row pl-2">
             <div className="row col-md-3">   
              <a href="#nothing" style={{width:'100%',height:'30px'}} className="badge badge-pill badge-Light"> Country:</a>
              </div>

              <div className="row col-md-10">   
             <p> {this.state.country}</p>
             </div>
             </div>


              <div className="row pl-2">
              <div className="row col-md-3"> 
              <a href="#nothing" style={{width:'100%',height:'30px'}} className="badge badge-pill badge-Light"> Language:</a>
              </div>
              <div className="row col-md-10">   
               <p> {this.state.languages}</p>
             </div>
             </div> 

              <div className="row pl-2">
              <div className="row col-md-3"> 
              <a href="#nothing" style={{width:'100%',height:'30px'}} className="badge badge-pill badge-Light" >Production:</a>
              </div>
              <div className="row col-md-10">   
             <p> {this.state.production}</p>
             </div>
             </div> 

             <div className="row pl-2">                
              <div className="row col-md-3"> 
              <a href="#nothing" style={{width:'100%',height:'30px'}} className="badge badge-pill badge-Light">IMDB ID:</a>
             </div>


             <div className="row col-md-10">   
             <p> {this.state.imdbID}</p>
             </div>
             </div> 

             </div> 
             </div>

             <div className="card"> 
             <a href="#nothing" style={{width:'100%',height:'30px',fontSize:'20px'}} className="btn badge badge-secondary" data-toggle="collapse" data-target="#statinfo">Statistical details </a>
             <div className="card collapse pl-2" id="statinfo">
             <div className="row pl-2">
              <div className="row col-md-3"> 
              <a href="#nothing" style={{width:'100%',height:'30px'}} className="badge badge-pill badge-Light"> {"Released in: "}</a>
              </div>

              <div className="row col-md-10"> 
              <p> {this.state.released}</p>
              </div>

             </div>

              <div className="row pl-2">
              <div className="row col-md-3"> 
              <a href="#nothing" style={{width:'100%',height:'30px'}} className="badge badge-pill badge-Light"> {"Awards: "}</a>
              </div>

              <div className="row col-md-10"> 
              <p> {this.state.awards}</p>
              </div>
             </div>

              <div className="row pl-2">
              <div className="row col-md-3"> 
              <a href="#nothing" style={{width:'100%',height:'30px'}} className="badge badge-pill badge-Light"> {"DVD: "}</a>
              </div>


              <div className="row col-md-10"> 
              <p> {this.state.dvd}</p>
              </div>
             </div>

              <div className="row pl-2">
              <div className="row col-md-3"> 
              <a href="#nothing" style={{width:'100%',height:'30px'}} className="badge badge-pill badge-Light"> {"IMDB rating:"}</a>
              </div>


              <div className="row col-md-10"> 
              <p> {this.state.imdbratings}</p>
              </div>
             </div>

              <div className="row pl-2">
              <div className="row col-md-3"> 
              <a href="#nothing" style={{width:'100%',height:'30px'}} className="badge badge-pill badge-Light"> {"IMDB votes:"}</a>
              </div>

              <div className="row col-md-10"> 
              <p> {this.state.imdbvotes}</p>
              </div>
             </div>



             </div>
             </div>



              <div className="card-body">  
              <button onClick={this.goback} className="btn btn-secondary mr-5">Go back</button>
              <a href="http://www.google.com" className="btn btn-primary">Buy on Amazon</a>
            </div>
          </div>
        </div>
      </div>);
  
 

  

  

}
}
export default DetailedVideoCard;