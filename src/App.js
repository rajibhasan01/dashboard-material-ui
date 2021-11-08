import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css';
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/User/User";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch >

          <Route exact path="/" component={Home} />

          <Route path="/users" component={UserList} />

          <Route path="/user/:userId" component={User} />

        </Switch >
      </div>
    </Router>
  );
}

export default App;
