import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownItem from 'react-bootstrap/DropdownItem';
// import DropdownMenu from 'react-bootstrap/DropdownMenu';
import image from '../image.jpg';
import { withRouter } from 'react-router';

class buildProfile extends React.Component {

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

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeSchedule = this.handleChangeSchedule.bind(this);
      this.handleChangeContact = this.handleChangeContact.bind(this);
    }

    handleChange(event) {
      let change = {};
      change[event.target.name] = event.target.value;
      console.log(change);
      this.setState(change);
      console.log(this.state);

    }

    handleChangeSchedule(event) {
      let change = this.state.Schedule[0];
      if (event.target.value == "true") {
        change[event.target.name] = true;
      } else {
        change[event.target.name] = false;
      }
      // change[event.target.name] = event.target.value;
      console.log(change);
      this.setState(change);
      console.log(this.state);

    }

    handleChangeContact(event) {
      let change = this.state["Contact Information"][0];
      change[event.target.name] = event.target.value;
      console.log(change);
      this.setState(change);
      console.log(this.state);

    }

    handleSubmit(event) {
      // alert('Your favorite flavor is: ' + this.state.value);
      //alert("" + this.state.location + " " + this.state.level + " " + this.state.schedule["Monday Morning"]);
      // alert(JSON.stringify(this.state.profile));

      this.setState({name: event.target.name.name});
      console.log(event.target.name);
      // console.log(JSON.stringify(this.state))
//       console.log(JSON.stringify({
// "Name": "Johnna Chowdhury",
// "Username": "Ish.Chowdhury1",
// "Contact Information" : [
// {"cell": "6460087789", "email": "Ish.Chowdhury1@gmail.com" }],
// "Location": "NYC",
// "Level": "Beginner",
// "Schedule": [{
// "Monday Morning": true,
// "Monday Afternoon": true,
// "Monday Evening": true,
// "Tuesday Morning": true,
// "Tuesday Afternoon": false,
// "Tuesday Evening": false,
// "Wednesday Morning": true,
// "Wednesday Afternoon": false,
// "Wednesday Evening": false,
// "Thursday Morning": false,
// "Thursday Afternoon": false,
// "Thursday Evening": false,
// "Friday Morning": false,
// "Friday Afternoon": true,
// "Friday Evening": false,
// "Saturday Morning": false,
// "Saturday Afternoon": false,
// "Saturday Evening": false,
// "Sunday Morning": true,
// "Sunday Afternoon": false,
// "Sunday Evening": false}],
// "Workout Type":
// ["Cardio"]
// }));

      fetch('https://cors-anywhere.herokuapp.com/https://93tqqyb2qd.execute-api.us-east-2.amazonaws.com/test1/write/',
      {
        method:"POST",
        mode: 'cors',
        headers: {
            'Origin':'fitnessapp.com',
            'Content-Type': 'application/json',
            // "Access-Control-Request-Method": "POST"
            // "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            // "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(this.state),
      }
      )
      .then(results => {
        return results.json()
      }).then(data =>
        // localStorage.setItem('data',
        // JSON.stringify(data))).then(
          this.props.history.push({pathname:'/matches',state:data})
        );
        // console.log(data));
        // this.setState({ data: data.message }));
        // this.setState({ profiles: data.message.Items }));

      event.preventDefault();

    }

  render() {
    return (
      <div className="buildProfile">
        <h1>
          Profile
        </h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <img src={image} width="100" height="100" alt="picture"/>
          </p>
          <p>
            Name:
              <input onChange={this.handleChange} id='login_input' type="text" name="Name" placeholder="Name"/>
          </p>
          <p>
            Username:
              <input onChange={this.handleChange} id='login_input' type="text" name="Username" placeholder="Username"/>
          </p>

          <p>
            Email:
              <input onChange={this.handleChangeContact} id='login_input' type="text" name="email" placeholder="email"/>
          </p>

          <p>
            Cell:
              <input onChange={this.handleChangeContact} id='login_input' type="text" name="cell" placeholder="cell"/>
          </p>
          <p>

            <label>
              Location:
              <select name="location" value={this.state.Location} onChange={this.handleChange}>
                <option value="New York,New York">New York,New York</option>
                <option value="Austin,Texas">Austin,Texas</option>
                <option value="Florham Park,New Jersey">Florham Park,New Jersey</option>
              </select>
            </label>




          </p>

          <p>

          <label>
            <p>How would you describe yourself?</p>
            Workout Level:
            <select name="level" value={this.state.Level} onChange={this.handleChange}>
              <option value="Casual">Casual</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Hard-core">Hard-core</option>
            </select>
          </label>


          </p>

          <p>
          <label>
          <p>Schedule</p>
          {Object.keys(this.state.Schedule[0]).map((item, i) => {
              return(
                <div>
                {item}
                <select name={item} value={this.state.Schedule[0][{item}]} onChange={this.handleChangeSchedule}>
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
                </div>
              )
          })}
          </label>
          </p>

          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default withRouter(buildProfile);
