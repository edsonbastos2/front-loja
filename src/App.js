import { BrowserRouter } from 'react-router-dom';
import FooterArea from './components/Footer';
import Header from './components/Header';
import { Template } from './components/mainComponents';
import Routers from './router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routers />
        <FooterArea />
      </Template>
    </BrowserRouter>
  );
}

export default App;
