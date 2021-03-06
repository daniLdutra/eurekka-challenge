import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { CreateReport } from './components/CreateReport';
import { ViewReport } from './components/ViewReport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/report/create" />} />
        <Route path="/report/create" element={<CreateReport />} />
        <Route path="/report/:reportId" element={<ViewReport />} />
      </Routes>
    </Router>
  );
}

export default App;
