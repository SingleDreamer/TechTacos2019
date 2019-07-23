import React from 'react';
import ProfileStyles from './ProfileStyles.css'
import Profiles from './Profiles.json'

class Display extends React.Component {

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
        
        <h1>This Is The Profiles Page</h1>
        {Profiles.map((profile, index) => {
        return(
            <div>
                    <div class="card-container">
                     <span class="pro">PRO</span>
                         <img
                            class="round"
                            src="https://randomuser.me/api/portraits/women/79.jpg"
                            alt="user"
                        />
                        <h3>{profile.Name}</h3>
                        <h6>{profile.Location}</h6>
                        <h6>Level : {profile.Level}</h6>
                        <h6>{profile["Workout Type"][0]}</h6>
                        <p>
                        {profile["Contact Information"][0].email}
                        </p>
                        <div class="buttons">
                            <button class="primary">
                                Message
                            </button>
                            <button class="primary ghost">
                                View Profile
                            </button>
                        </div>
                        <div class="skills">
                        {profile["Workout Type"].map((type, index) => {
                                <p>This is a type</p>
                         })}
                            <h6>Skills</h6>
                            <ul>
                                <li>UI / UX</li>
                                <li>Front End Development</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    </div>
            
                    
                </div>
        )

         })}
        </div>
      )
    }
}
    export default Display;

// const Profiles = () => (

//     <div>
//        <h1>This Is The Profiles Page</h1>
//        <div class="card-container">
//         <span class="pro">PRO</span>
//             <img
//                 class="round"
//                 src="https://randomuser.me/api/portraits/women/79.jpg"
//                 alt="user"
//             />
//             <h3>Ricky Park</h3>
//             <h6>New York</h6>
//             <p>
//                 User interface designer and <br />
//                 front-end developer
//             </p>
//             <div class="buttons">
//                 <button class="primary">
//                     Message
//                 </button>
//                 <button class="primary ghost">
//                     View Profile
//                 </button>
//             </div>
//             <div class="skills">
//                 <h6>Skills</h6>
//                 <ul>
//                     <li>UI / UX</li>
//                     <li>Front End Development</li>
//                     <li>HTML</li>
//                     <li>CSS</li>
//                     <li>JavaScript</li>
//                     <li>React</li>
//                     <li>Node</li>
//                 </ul>
//             </div>
//         </div>

        
//     </div>
//   );

// export default Profiles;