import { connect } from "react-redux";
import Login from "./Login";
import Message from "./Message";
import Register from "./Register";
import Todos from './Todos';
import History from './History';
import { logOutUser} from '../store/actions';
import AddToDo from "./AddToDo";
import { Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Navbar, Nav, Container ,NavItem} from 'react-bootstrap';
function App(props) {


  return (
    <>

 <Navbar  bg="dark" variant="dark" >
 <Navbar.Collapse id="basic-navbar-nav">
  <NavItem>
          <Nav.Link href="/login">התחבר
          </Nav.Link>
  </NavItem>
          <Nav.Link href="/Register">הרשם
  
  </Nav.Link>
  {props.currentUser&&  <Nav.Link href="/todo">המשימות שלי
  
  </Nav.Link>}   
      

  {props.currentUser&&  <Nav.Link href="/history">היסטורית המשמות שלי
  
  </Nav.Link>}   
  {props.currentUser&&  <Nav.Link  href="/addToDo">הוספת משימה
  </Nav.Link>}   
  {props.currentUser&&  <Nav.Link href=""  onClick={()=>props.logOutUser(null)}>יציאה
  </Nav.Link>}    
       
  </Navbar.Collapse>
 </Navbar >
      <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/todo">
        <Todos />
      </Route>

      <Route path="/history">
        <History />
      </Route>
      <Route path="/addToDo">
        <AddToDo setShow={setShowAdd} />
      </Route>
       <Route exact path="/exit">
      </Route>
   
     </Switch> 

     
    </>

    
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

const setShowAdd=()=>{}
export default connect(mapStateToProps,{logOutUser})(App);
