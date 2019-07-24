import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import image from '../image.jpg';

class buildProfile extends React.Component {
  render() {
    return (
      <div className="buildProfile">
        <h1>
          Profile
        </h1>
        <form>
          <p>
            <img src={image} width="100" height="100" alt="picture"/>
          </p>
          <p>
            Name:
              <input id='login_input' type="text" name="name" placeholder="Name"/>
          </p>
          <p>
            Username:
              <input id='login_input' type="text" name="Username" placeholder="Username"/>
          </p>
          <p>
          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Location
            <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a href="#">New York,New York</a></li>
              <li><a href="#">Austin,Texas</a></li>
              <li><a href="#">Florham Park,New Jersey</a></li>
            </ul>
          </div>
          </p>
          <p>
            How would you describe yourself?
              <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Workout Level
                <span class="caret"></span></button>
                <ul class="dropdown-menu">
                  <li><a href="#">Casual </a></li>
                  <li><a href="#">Intermediate</a></li>
                  <li><a href="#">Hard-core</a></li>
                </ul>
              </div>
          </p>
        </form>
      </div>
    );
  }
}

export default buildProfile;
