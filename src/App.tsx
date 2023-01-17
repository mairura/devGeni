import './App.css';
import {Routes, Route} from "react-router-dom"
import Projects from './Views/Projects';
import './Views/css/style.css'
import Footer from './Views/Components/Footer';
import ProjectDetail from './Views/ProjectDetail';
import BookNow from './Views/BookNow';

function App() {
  return (
    <>
    <div className='main'>
      <Routes>
        <Route path="/" element={<Projects/>}/>
        <Route path="/project" element={<ProjectDetail/>}/>
        <Route path="/book-now" element={<BookNow/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
