import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Table from 'react-bootstrap/Table'

import Profiles from './Profiles2.json'



class Matches extends Component {

  constructor(props) {
      super(props);

      this.state = {
        data: null,
        profiles: Profiles,
        // sample schedule to reference the keys
        schedule: {
          "Monday Morning": true,
          "Monday Afternoon": false,
          "Monday Evening": false,
          "Tuesday Morning": false,
          "Tuesday Afternoon": false,
          "Tuesday Evening": false,
          "Wednesday Morning": false,
          "Wednesday Afternoon": false,
          "Wednesday Evening": true,
          "Thursday Morning": false,
          "Thursday Afternoon": false,
          "Thursday Evening": false,
          "Friday Morning": false,
          "Friday Afternoon": false,
          "Friday Evening": true,
          "Saturday Morning": false,
          "Saturday Afternoon": false,
          "Saturday Evening": true,
          "Sunday Morning": false,
          "Sunday Afternoon": false,
          "Sunday Evening": false
        }
      };
    }

  componentDidMount(){



      // let data = '';
      // if (localStorage && localStorage.getItem('data')) {
      //    data = JSON.parse(localStorage.getItem('data'));
      //   }
      // console.log("data",data.body.Items);
      // this.setState({profiles: data.body.Items});

      let data = this.props.location.state;
      console.log(this.props.location.state);
      this.setState({profiles: data.body.Items});


  }

render() {
  return(
    
    <div className="profile_body">
      <Link to="/">
        <button class="primary ghost">
            Home
        </button>
    </Link>
    <h1>Matches</h1>


    <Table responsive striped bordered hover >
    {this.state.profiles.map((profile, index) => {
        return(
          <div class="card-container">
             <span class="pro">MATCH!</span>
             <img
                class="round"
                src="https://randomuser.me/api/portraits/women/79.jpg"
                  alt="user"
                />
    <h3>{profile["Name"]["S"]}</h3>
    <h6>{profile["Location"]["S"]}</h6>
    <h6>Level : {profile["Level"]["S"]}</h6>
    <p>{profile["Contact Information"]["L"][0]["M"].email["S"]}</p>
    <div class="buttons">
        <button class="primary">
          Message
          </button>
          <Link to="/display">
            <button class="primary ghost">
                View Profile
                  </button>
            </Link>
      </div>
      <div class="skills">
        <h6>Workout Type</h6>
        {/* <ul> */}
          {/* {profile["Workout Type"].map(inner => (
              <li>{inner}</li>
          ))} */}
          {/* </ul> */}
          </div>
          <div class="skills">
        <h6>Availability</h6>

          
    {/* <p>{profile["Contact Information"]["L"][0]["M"].cell["S"]}</p> */}
    <ul>
    {Object.keys(this.state.schedule).map((item, i) => {
      if(profile["Schedule"]["L"][0]["M"][item]["BOOL"]){
        return(
          <li>{item}</li>
        )

      }

      })}
      </ul>
 
      </div>

    </div>)

    })}

    </Table>

    
    </div>

  )

}

}

export default Matches
