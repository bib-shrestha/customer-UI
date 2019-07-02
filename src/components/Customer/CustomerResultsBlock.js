import { arrayOf, object} from 'prop-types';
import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import './CustomerResultsBlock.css'

export class CustomerResultsBlock extends Component{
    render(){
        let { customers } =  this.props;
        return (
            <div id = "searchResults">
               
            {
                customers.map(customer => (
                    <div class="grid-container">
                    <div class="grid-item">{customer.id}</div>
                    <div class="grid-item">{customer.firstname}</div>
                    <div class="grid-item">{customer.lastname}</div>  
                    <div class="grid-item">{customer.email}</div>
                    <div class="grid-item"><Link to={`/profile/${customer.id}`} className="active">View</Link></div>
                </div>
                ))
            }
            </div>
        );
    }
}

CustomerResultsBlock.propTypes = {
    customers : arrayOf(object).isRequired,
    history: object
};

export default CustomerResultsBlock;