import './App.css';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import Error from './Components/Error/Error'
import Mission from './Components/Mission/Mission';
import MagazineViewer from './Components/Magazine/MagazineViewer';
import SpMobile from './Components/SpMobile/SpMobile';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
        <Route path='/projects' element={<Projects />} />
         <Route path='/mission' element={<Mission />} />
         <Route path='/magazine' element={<MagazineViewer />} />
         <Route path='/mobile' element={<SpMobile />} />

        {/* <Route path='/About Us' element={<AboutUs />} /> */}
        <Route path='/not-found' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
