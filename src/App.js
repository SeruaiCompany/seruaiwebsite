import Main from './Pages/main'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>} />
      </Routes>
    </Router>

  );
}

export default App;
