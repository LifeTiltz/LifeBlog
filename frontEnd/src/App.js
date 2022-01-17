import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import RandomShake from './RandomShake';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/LifeBlog/">
              {<Home />}
            </Route>
            <Route exact path="/LifeBlog/create">
              <Create />
            </Route>
            <Route exact path="/LifeBlog/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/LifeBlog/poem">
              <RandomShake />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

