// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
//import './App.css'
import PropTypes from 'prop-types';

function App({teams}) {
  

  return (
    <>
    <button onClick={()=>alert("Button is Clicked") }>Click Me</button>
    <br />
    <table border='1'>
      <thead>
        <tr>
          <td>Team</td>
          <td>Played</td>
          <td>Won</td>
          <td>Drawn</td>
          <td>Lost</td>
          <td>Points</td>
        </tr>
      </thead>
      <tbody>
       { teams.map(({Team,Played,Won,Drawn,Lost,Points},index)=>{
         return( <tr key={index}>
            <td>{Team}</td>
            <td>{Played}</td>
            <td>{Won}</td>
            <td>{Drawn}</td>
            <td>{Lost}</td>
            <td>{Points}</td>
          </tr>
)})}
      </tbody>
      </table>

      { teams.map(({Team,Points},index)=>(
        // eslint-disable-next-line react/jsx-key
        <ul key={index}>
          <li>{Team}: {Points}</li>
        </ul>
      ))}
    </>
  )
}

App.propTypes={
 teams: PropTypes.arrayOf(
    PropTypes.shape({
      Team: PropTypes.string.isRequired,
      Played: PropTypes.number.isRequired,
      Won: PropTypes.number.isRequired,
      Drawn: PropTypes.number.isRequired,
      Lost: PropTypes.number.isRequired,
      Points: PropTypes.number.isRequired,
    })
  ).isRequired
}

App.defaultProps={
teams:[
  {Team:"Team A",Played:10,Won:6,Drawn:2,Lost:2,Points:20},
  {Team:"Team B",Played:10,Won:5,Drawn:3,Lost:2,Points:18},
  {Team:"Team C",Played:10,Won:4,Drawn:4,Lost:2,Points:16},
]
};



export default App
