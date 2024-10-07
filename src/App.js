import './App.css';
import Nav from './composants/Nav';
import Footer from './composants/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <Nav />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;