import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StudentInsert from "./components/StudentInsert";
import StudentUpdate from "./components/StudentUpdate";
import StudentList from "./components/StudentList";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={StudentList} />
        <Route path="/student/create" exact component={StudentInsert} />
        <Route path="/student/update/:id" exact component={StudentUpdate} />
      </Switch>
    </Router>
  );
}

export default App;
