import { BrowserRouter as Router} from 'react-router-dom';
import './App.scss';

import Header from './components/header/Header';
import Pages from './pages/Pages';
import Footer from './components/footer/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Pages />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
