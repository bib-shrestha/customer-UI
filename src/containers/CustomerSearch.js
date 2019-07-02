import React, { Component } from 'react';
import axios from 'axios'
import Aux from '../hoc/Aux';
import CustomerResultsBlock from '../components/Customer/CustomerResultsBlock'
import './CustomerSearch.css';

class CustomerSearch extends Component{
 constructor(props) {
   super(props);
   this.state = {
    loading : false,
    error : false,
    value : ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
 }
    
 handleChange = event => {
     this.setState({ value : event.target.value})
 }

  handleSearch = async event => {
      event.preventDefault();
      this.setState({ loading : true, error : false});
      try{
        let url = "http://localhost:8080/customers";
        if(this.state.value) url = url + "/search?name="+this.state.value;
        let result = await axios.get(url);
        this.setState({
            results : result.data,
            loading : false,
            error : false
        })
      } catch (error){
          this.setState({error : true, loading : false})
      }
      

  }

  render(){
      let { loading, error, results } = this.state; 
      return (
         <React.Fragment>
            <div className ="container">
                <form className="search" onSubmit={this.handleSearch}>
                    <input type="text" value = {this.state.value} placeholder="Enter Name or Leave Blank For All Customers" name="search" onChange={this.handleChange}/>
                    <button type="submit"><i class="fa fa-search"></i>Search</button>
                </form>
            </div>
            {loading && <div class="loader"></div>}
            {error && <div className ="notFound"> Something went wrong </div>}
            {results && (results.length > 0 ? <CustomerResultsBlock customers= {results}/> : <div className ="notFound">Customers not found</div>)}
          </React.Fragment>
      );
  }
}

export default CustomerSearch;