import React from 'react';
import './App.css';
import HomePage from './components/HomePage.js'
import Profiles from './components/Profiles.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// class App extends React.Component {

//   state = {
//     name: undefined,
//   }

//   getUsername = async (e) => {
//     e.preventDefault();
//     const input_username = e.target.elements.name.value;
//     console.log(input_username);

//   }




//   render (){
//     return(
//     //   <div className="wrapper">
//     //      <div className="main">
//     //        <div className="col-xs-5 title-container">
//     //         <h1>
//     //           This Is TechTacos
//     //         </h1>
//     //        </div>
          
//     //     <HomePage />
//     //   </div>
//     // </div>

//     <div>
//         <div className="wrapper">
//           <div className="main">
//                 <div className="col-xs-5 title-container">
//                   {/* <Titles /> */}
//                   <h1>
//                    Cohesion
//                   </h1>
//                 </div>
//                 <div class="col-xs-7 form-container">
//                 <HomePage/>

//                 </div>

//           </div>
//         </div>
//       </div>
//     )
//   }

    
// }

// export default App;

// renders HomePage component
function Index() {
    return (
          <div className="wrapper">
            <div className="main">
              <div className="col-xs-5 title-container">
                {/* <Titles /> */}
                  <h1>Cohesion</h1>
              </div>
              <div class="col-xs-7 form-container">
                <HomePage/>
              </div>
          </div>
        </div>
    );
}

function SignUp() {
  return <h2>SignUp</h2>;
}

function Users() {
  return <Profiles/>;
}

function AppRouter() {
  return (
    <Router>
      <div>

      {/* this is for the nav bar */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup/">SignUp</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav> */}
        {/* this is for the nav bar */}

        <Route path="/" exact component={Index} />
        <Route path="/signup/" component={SignUp} />
        <Route path="/profiles/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;