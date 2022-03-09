import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container App">
    <div className="profile-info">
      <img className="pofile-img" src={employee.profileImg} width="100" height="100" alt="profile-img"></img>
    </div>
    <div className="profile-info">
      <div className="detail">
      <h1>{employee.name}</h1>
      </div>
    </div>
    <div className="profile-info"> 
    <div className="detail">
      <label><strong>Location</strong></label>
      <strong>{employee.location}</strong>
      </div>
    </div>
    <div className="profile-info">
    <div className="detail">
      <label><strong>Blood group</strong></label>
      <strong>{employee.bloodGroup}</strong>
      </div>
     </div>
    <div className="profile-info"> 
    <div className="detail">
      <label><strong>Age</strong></label>
      <strong>{employee.age}</strong>
    </div>
    </div>


</div>
);
}



export default App;
