import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

function App() {
  return (
    <BrowserRouter>
      <Route path="/"><Home /></Route>
      <Route path="/rooms/new"><NewRoom /></Route>
    </BrowserRouter>
  );
}

export default App;