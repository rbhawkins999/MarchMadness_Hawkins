import React from 'react';
//import logo from './logo.svg';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

const teamNames = teamsData.teams;

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Heading() {
  return <h1>Welcome to March Madness</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>Mascot Name: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamsList() {
  return (
    <div>
      {teamNames.map((numTeam) => (
        <Team {...numTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamsList />
    </div>
  );
}

export default App;
