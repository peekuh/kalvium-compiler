import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HomeScreen} from './screens/homeScreen';
import {PlaygroundScreen} from './screens/playgroundScreen';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/playground' element={<PlaygroundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;