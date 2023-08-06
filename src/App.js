import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './AppRoute';

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
