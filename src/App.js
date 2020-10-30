import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home/Home";
import Error from "./Components/ErrorPage/Error";
import About from "./Components/AboutPage/About/About";
import Works from "./Components/WorksPage/Works/Works";
import Blog from "./Components/BlogPage/Blog/Blog";
import NavBarTop from "./Components/HomePage/NavBarTop/NavBarTop";
import "./App.css";
import ContactPage from "./Components/ContactPage/ContactPage";
function App() {
  return (
    <div className="bg">
      <Router>
        <NavBarTop></NavBarTop>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/works">
            <Works></Works>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <ContactPage></ContactPage>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
