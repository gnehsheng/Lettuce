import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Visible } from 'react-grid-system';
import Room from './components/room/Room';
import Welcome from './components/welcome/Welcome';
import Footer from './components/common/Footer';

export default function RoutesPath() {
  return (
    <Router>
      <div style={{ minHeight: '100%' }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/room/:id" element={<Room />} />
        </Routes>
        <Visible xs>
          <div style={{ marginBottom: '60px' }} />
        </Visible>
      </div>
      <Footer />
    </Router>
  );
}
