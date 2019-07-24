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
    <div>
    <h1>Matches</h1>


    <Table responsive striped bordered hover >
    {this.state.profiles.map((profile, index) => {
        return(
          <div class="card-container">
    <p>{profile["Name"]["S"]}</p>
    <p>{profile["Location"]["S"]}</p>
    <p>{profile["Contact Information"]["L"][0]["M"].email["S"]}</p>
    <p>{profile["Contact Information"]["L"][0]["M"].cell["S"]}</p>
    <Table responsive striped bordered hover >
    <thead>
    {Object.keys(this.state.schedule).map((item, i) => {
      if(profile["Schedule"]["L"][0]["M"][item]["BOOL"]){
        return(
          <th>{item}</th>
        )

      }

      })}
      </thead>
      </Table>

    </div>)

    })}

    {/* </tbody> */}
    </Table>

    <Link to="/">
        <button class="primary ghost">
            Home
        </button>
    </Link>
    </div>

  )

}

}

export default Matches
