import './App.css';
import Accordion from './Projects/Projects';
import Header from './Components/MenuHeader';
import CertificationTable from './Certifications/CertificationTable';
import './Style/Wave.css'
import AboutMeAnime from './About/AboutMeAnimation';

function App() {

  return (
    <div className="app-container">

      <div className="wave-container">
        <div className="wave"></div>
      </div>

      <div>
        <Header />
      </div>

      <div className="main-content">
        <h2>About me</h2>
      </div>
      <div>
        <AboutMeAnime />
      </div>

      <div>
        <div className="main-content">
          <h2 id='certlist'>Certifications</h2>
        </div>
        <CertificationTable />
      </div>
      <div>
        <div className="main-content">
          <h2 id='#projectlist'>Projects</h2>
        </div>
        <Accordion />
      </div>

    </div>
  );
}


export default App;
