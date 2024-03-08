//Ryan Hawkins. Section 2.
//The following app welcomes the user to the march madness website
//Then displays a list of teams in March Madness and their mascot and location

import React from 'react';
//import logo from './logo.svg';
import './App.css';

//importing the json file
import teamsData from './CollegeBasketballTeams.json';

//declaring the variable to access the json file for later
const teamNames = teamsData.teams;

//listing out the data types for each one we will use in this app
interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Heading() {
  return <h1>Welcome to March Madness</h1>;
}

//displaying the info for each team
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div className="Team">
        <h2>{oneTeam.school}</h2>
        <h3>Mascot Name: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

//listing the team info
function TeamsList() {
  return (
    <div>
      {teamNames.map((numTeam) => (
        <Team {...numTeam} />
      ))}
    </div>
  );
}

//where the above are getting called
function App() {
  return (
    <div className="App">
      <Heading />
      <TeamsList />
    </div>
  );
}

export default App;
