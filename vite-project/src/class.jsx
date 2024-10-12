import PropTypes from "prop-types";
import React from "react";

class Class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Proper destructuring of props
    const { teams } = this.props;
    
    return (
      <>
        <button onClick={() => alert("Button is Clicked")}>Click Me</button>
        <br />
        <table border="1">
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
            {teams.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.Team}</td>
                  <td>{element.Played}</td>
                  <td>{element.Won}</td>
                  <td>{element.Drawn}</td>
                  <td>{element.Lost}</td>
                  <td>{element.Points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {teams.map((element, index) => (
          // Add `key` to the `ul` element for better React performance
          <ul key={index}>
            <li>
              {element.Team}: {element.Points}
            </li>
          </ul>
        ))}
      </>
    );
  }
}

Class.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      Team: PropTypes.string.isRequired,
      Played: PropTypes.number.isRequired,
      Won: PropTypes.number.isRequired,
      Drawn: PropTypes.number.isRequired,
      Lost: PropTypes.number.isRequired,
      Points: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Class.defaultProps = {
  teams: [
    { Team: "Team A", Played: 10, Won: 6, Drawn: 2, Lost: 2, Points: 20 },
    { Team: "Team B", Played: 10, Won: 5, Drawn: 3, Lost: 2, Points: 18 },
    { Team: "Team C", Played: 10, Won: 4, Drawn: 4, Lost: 2, Points: 16 },
  ],
};

export default Class;
