import React, { Component } from 'react'

import Table from 'react-bootstrap/Table'

import Profiles from './Profiles2.json'



class Display extends Component {

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

    // fetch('https://cors-anywhere.herokuapp.com/https://6tprkltz8e.execute-api.us-east-2.amazonaws.com/test/helloworld?name=John&city=Seattle')
    fetch('https://cors-anywhere.herokuapp.com/https://93tqqyb2qd.execute-api.us-east-2.amazonaws.com/test1/read/')
    .then(results => {
      return results.json()
    }).then(data =>
      // console.log(data))
      // this.setState({ data: data.message }));
      this.setState({ profiles: data.message.Items }));


  }

render() {
  return(
    <div>
    <h1>Records</h1>

    
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
    {this.state.data}
    {this.state.schedule["Monday Morning"]?"true":"false"}

    </div>

  )

}

}

export default Display
