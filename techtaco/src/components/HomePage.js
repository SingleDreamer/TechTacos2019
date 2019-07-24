import React from 'react';



class HomePage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {};

      this.getUsername = this.getUsername.bind(this);
    }

  getUsername = async (e) => {
    e.preventDefault();
    const input_username = e.target.elements.name.value;
    console.log(input_username);

  }

render () {
//const HomePage = props => (
return (
    <div>

    <h1>
        This Is TechTacos
      </h1>

        <form onSubmit = {this.getUsername}>
		<h4>Login</h4>

		<input id='login_input' type="text" name="name" placeholder="Username..."/>
        <button>Submit</button>
        </form>

        <form>
		<h4>Signup</h4>

		{/* <input id='signup_input' type="text" name="new_name" placeholder="Enter A New Username..."/> */}
        <button>Signup</button>
        </form>
    </div>
  // );
)}


}

export default HomePage;
