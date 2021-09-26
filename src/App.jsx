import Index from 'pages';
import InfoArgentinaPage from 'pages/argentina';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'styles/estilos.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route path='/Argentina'>
            <InfoArgentinaPage />
          </Route>
          <Route path='/'>
            <Index />
           </Route> 
        </Switch>
     </Router>
    </div>
  );
}
  export default App;
