import "../styles/ProjectFinance.scss";
import Tile from "./Tile";

const ProjectFinance = (props) => {
  const { people } = props;

  return (
    <Tile>
      <div className="projectFinance">
        <span className="title">Project Finance</span>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Progress</th>
              <th>Achived</th>
              <th>Status</th>
              <th>View all</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => {
              return (
                <tr>
                  <td>
                    <img src={person.image} alt='face' />
                    {person.name}
                  </td>
                  <td>{person.progress}</td>
                  <td>{person.value}</td>
                  <td>
                    <div className="statusCircle"></div>
                    {person.status}
                  </td>
                  <td>...</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Tile>
  );
};

export default ProjectFinance;
