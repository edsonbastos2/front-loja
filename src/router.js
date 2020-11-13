import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  )
}

export default Routers;