import Main from './Pages/main'
import Futureproducts from './Pages/futureproducts'
import Mission from './Pages/mission'
import Termsofservice from './Pages/termsofservice'
import Wolfgang from './Pages/wolfgang'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/futureproducts" element={<Futureproducts/>} />
        <Route path="/mission" element={<Mission/>} />
        <Route path="/termsofservice" element={<Termsofservice/>} />
        <Route path="/wolfgang" element={<Wolfgang/>} />
      </Routes>
    </Router>

  );
}

export default App;
