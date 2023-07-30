import Home from "./pages/home/Home";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";


function App() {
  const currentUser =true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/posts"> <Home /></Route>
        <Route path="/register">{currentUser ? <Home/> :<Register/> }</Route>
        <Route path="/login">{currentUser ? <Home/> :<Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">{currentUser ? <Settings /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;