import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        // sample schedule to reference the keys
        "Name": "na",
        "Username": "na",
        "Contact Information" : [
        {"cell": "na", "email": "na" }],
        "Location": "New York,New York",
        "Level": "Casual",
        "Schedule": [{
          "Monday Morning": false,
          "Monday Afternoon": false,
          "Monday Evening": false,
          "Tuesday Morning": false,
          "Tuesday Afternoon": false,
          "Tuesday Evening": false,
          "Wednesday Morning": false,
          "Wednesday Afternoon": false,
          "Wednesday Evening": false,
          "Thursday Morning": false,
          "Thursday Afternoon": false,
          "Thursday Evening": false,
          "Friday Morning": false,
          "Friday Afternoon": false,
          "Friday Evening": false,
          "Saturday Morning": false,
          "Saturday Afternoon": false,
          "Saturday Evening": false,
          "Sunday Morning": false,
          "Sunday Afternoon": false,
          "Sunday Evening": false}],
        "Workout Type":["Cardio"]
      };

      this.getUsername = this.getUsername.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

  getUsername = async (e) => {
    e.preventDefault();
    // const input_username = e.target.elements.name.value;
    const input_username = e.target.value;
    console.log(input_username);

  }


  handleSubmit(event) {

    var name = event.target.name.value;
    // this.setState({name: event.target.name});
    // console.log({"name" : event.target.name.value});
    if (name == "") {
      return;
    }
    fetch('https://cors-anywhere.herokuapp.com/https://93tqqyb2qd.execute-api.us-east-2.amazonaws.com/test1/read/')
    .then(results => {
      return results.json()
    }).then( data => {
      return data.message.Items
    }).then ( data => {
      return data.filter(d => d.Name.S == name)
    }).then( data => {
      console.log(data[0]);
      return data[0]
    }).then( data => {
      this.state.Name = data.Name.S;
      this.state.Username = data.Username.S;
      this.state["Contact Information"][0].cell = data["Contact Information"]["L"][0]["M"].cell.S;
      this.state["Contact Information"][0].email = data["Contact Information"]["L"][0]["M"].email.S;
      for (var key in this.state.Schedule[0]) {
        this.state.Schedule[0][key]= data.Schedule.L[0].M[key].BOOL;
      }

      // this.setState({search_profile: data[0]})
      return this.state;
      // console.log(this.state);

    }).then( data => {
      // console.log(JSON.stringify(data));
      fetch('https://cors-anywhere.herokuapp.com/https://93tqqyb2qd.execute-api.us-east-2.amazonaws.com/test1/write/',
      {
        method:"POST",
        mode: 'cors',
        headers: {
            'Origin':'fitnessapp.com',
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(data)
      }
    ).then(response => {
        return response.json()
      }).then(data =>{
        console.log(data);
        this.props.history.push({pathname:'/matches',state:data});
      })
    });

    event.preventDefault();
  }

render () {
//const HomePage = props => (
return (
  <div className="wrapper">
            <div className="main">
              <div className="col-xs-5 title-container">
                {/* <Titles /> */}
                  <h1>Cohesion</h1>
              </div>
              <div class="col-xs-7 form-container">
          <div className = "homepage_info">
            <form onSubmit={this.handleSubmit}>
                {/* Login */}

             <h4>Login</h4>
             <p/>
             <br/>
             <input onChange={this.getUsername} class="login-button" id='login_input' type="text" name="name" placeholder="ENTER NAME"/>
              <button className="home_btns" type="submit" value="Submit" >Submit</button>



                 {/* Sign Up */}
                 <p/>
                 <br/>

                 <h2>Not registered yet?</h2>
                     <Link to="/signup">
                         <button className="home_btns">Sign Up</button>
                     </Link>


          </form>
          </div>
          </div>
          </div>
        </div>
)}


}

export default HomePage;
