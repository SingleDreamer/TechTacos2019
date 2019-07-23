import React from 'react';

const HomePage = props => (

    <div>

    <h1>
        This Is TechTacos
      </h1>

        <form onSubmit = {props.getUsername}>
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
  );


export default HomePage;
