import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const ErrorPage = () => {
  return (
    <div>
      <div className="error" >
        it looks like you're lost :(
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PostList}/>
            <Route exact path="/posts/:id" component={PostDetail}/>
            <Route exact path="/login" component={Login}/>
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
