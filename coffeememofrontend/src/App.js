import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRoutes } from 'hookrouter';

// Component imports
import Navigation from './components/common/Navigation/Navigation'
import Routes from './components/Routes'

function App() {
  const routeResult = useRoutes(Routes)
  return (
    <div className='App'>
      <Navigation />
      {routeResult}
    </div>
  );
}

export default App;
