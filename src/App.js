import Posts from './pages/Posts/Posts';
import Header from './components/Header';
import Albums from './pages/Albums';
import Todos from './pages/Todos/Todos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import './index.css';

const store = setupStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Albums" element={<Albums />} />
            <Route path="*" element={<Todos />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
