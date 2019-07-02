import React, {Component} from 'react';
import axios from 'axios'
import {object} from 'prop-types'
import './Dashboard.css';

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
         }
      }

    componentDidMount(){
        this.loadDetails();
    }

    loadDetails = async () => {
        try{
            let url = "http://localhost:8080/customers/" + this.props.match.params.id;
            let result = await axios.get(url);
            let memberSince = parseInt(Math.floor(Math.abs(new Date() - new Date(result.data.created_at))/1000)/86400);
            this.setState({
                memberSince : memberSince,
            })
          } catch (error){
          }
    }

    render(){
        let {memberSince} = this.state;
        return (
            <div className = "profileContainer">
                <div className = "title">Customer Dashboard</div>

                <div class="row">
                    <div class="column">
                        <div class="card">
                        <p>Member Since</p>
                        <h3>{memberSince}</h3>
                        <p>Days</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                        <p>Total</p>
                        <h3>3</h3>
                        <p>Orders</p>
                        </div>
                    </div>
                    
                    <div class="column">
                        <div class="card">
                        <p>Last Order</p>
                        <h3>5</h3>
                        <p>Days ago</p>
                        </div>
                    </div>
                    
                    <div class="column">
                        <div class="card">
                        <p>last Updated</p>
                        <h3>8</h3>
                        <p>Days ago</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="column">
                        <div class="card">
                        <p>Last Year</p>
                        <h3>1000</h3>
                        <p>Dollors</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                        <p>This Year</p>
                        <h3>1300</h3>
                        <p>Dollors</p>
                        </div>
                    </div>
                    
                    <div class="column">
                        <div class="card">
                        <p>Last Month</p>
                        <h3>300</h3>
                        <p>Dollors</p>
                        </div>
                    </div>
                    
                    <div class="column">
                        <div class="card">
                        <p>This Month</p>
                        <h3>150</h3>
                        <p>Dollors</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Dashboard.propTypes = {
    match: object.isRequired,
    history: object
}

export default Dashboard;