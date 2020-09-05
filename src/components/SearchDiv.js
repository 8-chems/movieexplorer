import React from "react";
import { Row ,label,Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
//import {useNavigate} from 'react-router-dom';
//import {useLocation} from 'react-router-dom';

class SearchDiv extends React.Component {
   
    constructor(props) {
      super(props);
      this.state= {
          searchLabel:"Enter a title:",
          videoType:"series",
          year:"1990",
          searchFactor:"t",
          searchValue:"",
          error:"none",
          correct:"none",
          iserror:"is-invalid",
          iscorrect:"is-valid",
          submit:"none",

      }
      this.clearFields=this.clearFields.bind(this);
      this.handelSelectionChangeF=this.handelSelectionChangeF.bind(this);
      this.makeSearch=this.makeSearch.bind(this);
      this.handelYearChange=this.handelYearChange.bind(this);
      this.handelVideoTypeChange=this.handelVideoTypeChange.bind(this);
      this.checkInput=this.checkInput.bind(this);

      
    };


    handelYearChange(e){
      this.setState({year:e.target.value});
    }

    handelVideoTypeChange(e){
      this.setState({videoType:e.target.value});
    }


    handelSelectionChangeF(e){
     
      this.setState({searchFactor:e.target.value});
      if(e.target.value==="t"){
        this.setState({
          searchLabel:"Enter a title:"
        });
      }else{
        this.setState({
          searchLabel:"Enter a key word:"
        });
       }
    //  alert(this.state.searchFactor)
    }

    handelSearchFactorChange(e){
      this.setState({year:e.target.value});

    }

    clearFields(e){
      e.preventDefault();
      
    }   

   
    makeSearch = () => {

    //  const navigate = useNavigate();
     // navigate('/results', { state: this.state });

    }
    


    checkInput(e){
      const input=e.target.value;
      let result = /^[a-zA-Z ]+$/.test(input);

      if(!result){
        e.target.className="form-control "+this.state.iserror;
        this.setState({error:"block"});
        this.setState({correct:"none"});
        this.setState({submit:"none"});
      }else{
        e.target.className="form-control "+this.state.iscorrect;
        this.setState({correct:"block"});
        this.setState({searchValue:e.target.value});
        this.setState({error:"none"});
        this.setState({submit:"auto"});
      }
    }
    
   

render(){ 
  const yearList=[];
  for(let y=1990;y<=2021;y++){
    yearList.push(<option key={y} value={y}>{y}</option>);
  }


  return (
    <div  style={{background:'#F7F7F9'}}> 

<Row  className="mt-5 mb-5" align="center" justify="center">
<div  className="card mx-auto col-md-6" style={{textAlign: 'left',display:'inline-block'}}>
<div className="card-header text-center">
<h2><span className="badge badge-info"> Make a new search</span></h2>
</div> 
<Form>
  <div className="form-group">
    <label value="2" htmlFor="choice">Select search type:</label>
 
    <select onChange={this.handelSelectionChangeF} className="form-control" id="choice">
      <option  value="t">Title</option>
      <option value="s">Key word</option>
     </select>
 </div>
 
  <div className="form-group">
  <label htmlFor="selectionvalue">{this.state.searchLabel}</label>
  <input type="text"  onBlur={this.checkInput}  className={"form-control  "} id="selectionvalue" placeholder="Enter a search value"/>
    
     <div style={{display:this.state.error}} className="invalid-feedback">
       You should insert a valid value !
      </div>
      <div style={{display:this.state.correct}} className="valid-feedback">
        Looks good!
      </div>
  </div>


  <div className="form-group">
    <label htmlFor="year">Year:</label>
    <select onChange={this.handelYearChange} className="form-control" id="choice">
    {yearList}
    </select>  

  </div> 


  <div className="form-group">
    <label htmlFor="choice">Select video type:</label>
 
    <select onChange={this.handelVideoTypeChange} className="form-control" id="choice">
      <option value="series">Series</option>
      <option value="movie">Movie</option>
      <option value="episode">Episode</option>
     </select>
 </div>

 <div className="col-auto my-1" style={{textAlign:'right'}} >
      <button onClick={this.makeSearch}/*{this.clearFields}*/  className="btn btn-secondary mr-5">Clear fields</button>
      <Link style={{ pointerEvents: this.state.submit }} className="btn btn-primary" to={{pathname: "/results", state:this.state}}> Search </Link>
      
    </div>
</Form>
</div>
</Row>
</div> 

);
}
}
export default SearchDiv;


