import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CreateReport } from './components/CreateReport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/report/create" element={<CreateReport />} />
      </Routes>
    </Router>
  );
}

export default App;
