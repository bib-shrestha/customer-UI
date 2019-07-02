import React, {Component} from 'react'
import {object} from 'prop-types'
import './CustomerProfile.css'
import axios from 'axios'


class CustomerProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
         }
         this.handleDashboard = this.handleDashboard.bind(this);
      }


    componentDidMount(){
        this.loadDetails();
    }

    loadDetails = async () => {
        try{
            let url = "http://localhost:8080/customers/" + this.props.match.params.id;
            let result = await axios.get(url);
            this.setState({
                results : result.data,
            })
          } catch (error){
          }
    }

    handleDashboard = async event => {
        let{results} = this.state;
        this.props.history.push(`/dashboard/${results.id}`)
    }


    render(){

        let { results } = this.state; 
        return (
            <div className = "profileContainer">
            <div className = "title">Customer Profile</div>
                <div className = "photo"> 
                    <div class="polaroid">
                        <img src="img_5terre.jpg" alt="Image not Available"/>
                            <div class="container">
                                {results && <p>{results.firstname}  {results.lastname}</p>}
                            </div>
                    </div>
                </div>
                <div className = "info"> 
                    <div className = "secondaryTitle">Personal Infomation</div> 
                    <div class="grid-container-profile">
                        <div class="grid-item-profile right-align">email:</div>
                         <div class="grid-item-profile ">{results && <span>{results.email}</span>}</div>
                    </div>
                    <div class="grid-container-profile">
                        <div class="grid-item-profile right-align">phone:</div>
                        <div class="grid-item-profile "></div>
                    </div>
                    <div class="grid-container-profile">
                        <div class="grid-item-profile right-align">address:</div>
                        <div class="grid-item-profile ">{results && <span>{results.latitude}  {results.longitude}</span>}</div>
                    </div>
                    <div class="grid-container-profile">
                        <div class="grid-item-profile right-align">ip address: </div>
                        <div class="grid-item-profile ">{results && <span>{results.ip}</span>}</div>
                    </div>
                    <div class="grid-container-profile">
                        <div class="grid-item-profile right-align">member since:</div>
                        <div class="grid-item-profile ">{results && <span>{results.created_at}</span>}</div>
                    </div>
                </div>
                <div className = "orders">  
                    <div className = "secondaryTitle">Orders</div> 
                    <div className = "info"> 
                    <table id="orders">
                            <tr>
                                <th>Order #</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td>789	</td>
                                <td>2018-06-15T16:00:00Z</td>
                                <td>Processing	</td>
                            </tr>
                            <tr>
                                <td>456</td>
                                <td>2018-06-10T15:55:00Z</td>
                                <td>Shipped</td>
                            </tr>
                            <tr>
                                <td>123</td>
                                <td>2018-06-01T16:00:00Z</td>
                                <td>Delivered</td>
                            </tr>
                    </table>       
                    </div>
                </div>
                <div className = "info">
                    <div className = "button-container">
                        <button class="button button1" onClick={this.handleDashboard}>View Dashboard</button>
                        <button class="button button1">Update Profile</button>
                        <button class="button button1">Add Orders</button>
                    </div>
                </div>
            </div>
        );
    }
}

CustomerProfile.propTypes = {
    match: object.isRequired,
    history: object
}

export default CustomerProfile;