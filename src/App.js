import './App.css';
import Accordion from './Projects/Projects';
import Header from './Components/MenuHeader';
import CertificationTable from './Certifications/CertificationTable';


 function App() {

  return (
          <div className="app-container">
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
 
// App.js   
  
/* const App = () => {  
  return (  
    <div className="app-container">  
      <h1>Welcome to My Webpage</h1>  
      <div className="content-container">  
        <div className="sidebar">  
          <h2>Sidebar</h2>  
          <ul>  
            <li>Menu Item 1</li>  
            <li>Menu Item 2</li>  
            <li>Menu Item 3</li>  
          </ul>  
        </div>  
        <div className="main-content">  
          <h2>Main Content</h2>  
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  
        </div>  
      </div>  
    </div>  
  );  
};   */
  

export default App;
