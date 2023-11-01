import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Callback from './Callback';
import Home from './Home';
import Dashboard from './Dashboard';
import TodoList from './TodoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={ <TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
