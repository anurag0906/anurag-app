import './App.css';
import Accordion from './Projects/Projects';
import Header from './Components/MenuHeader';
import CertificationTable from './Certifications/CertificationTable';
//import Experience from './PastExp/Expereince.jsx';
import './Style/Wave.css'


 function App() {

  return (
          <div className="app-container">
          
          <div className="wave-container">  
              <div className="wave"></div>  
          </div>  

              <div>
              <Header/>
              </div>          
              <div> 
              <div className="main-content">
              <h2 id='certlist'>Certifications</h2>  
              </div>
                <CertificationTable/>
              </div>
              <div>
              <div className="main-content">
              <h2 id='#projectlist'>Projects</h2>  
              </div>
                  <Accordion/>     
              </div>
              <div className="main-content">
              <h2>Education</h2>              
              </div>
              
        </div>
  );
} 
 

export default App;
