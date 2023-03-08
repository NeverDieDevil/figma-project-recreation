import "../styles/ProjectFinance.scss";
import Tile from "./Tile";

const ProjectFinance = (props) => {
  const { people } = props;
  const colorWithStatus=(status)=> {
    switch(status){
      case 'Financial Officer':
        return 'FO'
      case 'Project Manager':
        return 'PM'

    }
  }
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
            {people.map((person, index) => {
              if(index<2){
              return (
                <tr>
                  <td>
                    <div className='name'>
                      <img src={person.image} alt='face' />
                      <span>{person.name}</span>
                    </div>
                  </td>
                  <td>{person.progress}</td>
                  <td>{person.value}</td>
                  <td>
                    <div className={`statusCircle ${colorWithStatus(person.status)}`}></div>
                    {person.status}
                  </td>
                  <td>...</td>
                </tr>
              );}
            })}
          </tbody>
        </table>
      </div>
    </Tile>
  );
};

export default ProjectFinance;
