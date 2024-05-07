import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Todo from './components/todo';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Todo} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
