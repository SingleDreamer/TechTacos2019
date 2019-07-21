import React, { Component } from 'react'

import Table from 'react-bootstrap/Table'

import Profiles from './Profiles.json'

var sched = {
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
};

class Display extends Component {

componentDidMount(){

  fetch('https://cors-anywhere.herokuapp.com/https://6tprkltz8e.execute-api.us-east-2.amazonaws.com/test/helloworld?name=John&city=Seattle')
  .then(results => {
    return results.json()
  }).then(data =>
    console.log(data))

}


render() {




  return(
    <div>
    <h1>Records</h1>


    <Table responsive striped bordered hover >
      <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Email</th>
        <th>Cell</th>

      </tr>
      </thead>
        <tbody>
    {Profiles.map((profile, index) => {
        return(
    <tr>
      <td>{profile.Name}</td>
      <td>{profile.Location}</td>
      <td>{profile["Contact Information"][0].email}</td>
      <td>{profile["Contact Information"][0].cell}</td>
    </tr>)

    })}
    </tbody>
    </Table>
    </div>


  )

}

}

export default Display
