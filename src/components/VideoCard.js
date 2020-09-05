import React from "react";
import { Link } from "react-router-dom";

class VideoCard extends React.Component {
   
    constructor(props) {
      super(props);
      this.state= {
          avatar:props.avatar,
          movieName:props.movieName,
          imdbID:props.imdbID,
          type:props.type,
          year:props.year,
          his:props.his,

      }
    }

render(){
 /*   return (
    <div className="card" style={{width: '100%'}}>
    <img style={{width:'100%',height:'700px'}}src={this.state.avatar} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{this.state.movieName+" ("+this.state.year+")"}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{"Type:"+this.state.type}</h6>
    <p className="card-text"> {"IMDB ID:"+this.state.imdbID}</p>
    <a href="http://www.google.com" className="btn btn-secondary mr-5">Get More details</a>
      <a href="http://www.google.com" className="btn btn-primary">Buy on Amazon</a>
    </div>
  </div>);*/

  return (
  <div className="card mb-3" style={{height: '280px',width:'100%'}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img style={{height: '260px'}} src={this.state.avatar} className="card-img" alt="No psoter available" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{this.state.movieName+" ("+this.state.year+")"}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{"Type:"+this.state.type}</h6>
        <p className="card-text"> {"IMDB ID:"+this.state.imdbID}</p>
        {/* <a href="http://www.google.com" className="btn btn-secondary mr-5">Get More details</a> */}
        <Link  className="btn btn-secondary mr-5" to={{pathname: "/detailedresults", state:{ movieName:this.state.movieName, year:this.state.year}}}> Get More details </Link>
        <a href="http://www.google.com" className="btn btn-primary">Buy on Amazon</a>
      </div>
    </div>
  </div>
</div>);

}
}
export default VideoCard;