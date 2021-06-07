import { connect } from "react-redux";
import { getAllUser ,addUser} from '../store/actions';
import React, { useState } from 'react';
import Dialoge from "./Dialoge";
import { Redirect } from "react-router-dom";


const Register = (props) => {
    const [userRegiser, setUserRegiser] = useState({name:null,email:null,city:null,street:null,phone:null});
    const inputRefName = React.createRef(); 
    const inputRefEmail = React.createRef();
    const inputRefCity = React.createRef();
    const inputRefStreet = React.createRef();
    const inputRefPhone = React.createRef();
    const [showResults, setShowResults] = React.useState(false)
    const updateName = () => {
        const inputText = inputRefName.current.value
        setUserRegiser({
            ...userRegiser,
            name: inputText
          });
      }
      const updateCity = () => {
        const inputText = inputRefCity.current.value
        setUserRegiser({
            ...userRegiser,
            city: inputText
          });
      }  
      const updateEmail = () => {
        const inputText = inputRefEmail.current.value
        setUserRegiser({
            ...userRegiser,
            email: inputText
          });
      }  
      const updateStreet = () => {
        const inputText = inputRefStreet.current.value;
        setUserRegiser({
            ...userRegiser,
            street: inputText
          });
      }
        const updatePhone = () => {
        const inputText = inputRefPhone.current.value;
        setUserRegiser(
          {
            ...userRegiser,
            phone: inputText
          });
      }
      if(!showResults){
    return ( <>
    <input ref={inputRefName} placeholder="שם משתמש" type="text" onKeyUp={updateName}></input>
    <br/>
    <input ref={inputRefCity} placeholder="עיר" type="text" onKeyUp={updateCity}></input>
    <br/>
    <input ref={inputRefStreet} placeholder="רחוב" type="text" onKeyUp={updateStreet}></input>
    <br/>
    <input ref={inputRefEmail} placeholder="מייל" type="mail" onKeyUp={updateEmail}></input>
    <br/>
    <input ref={inputRefPhone} placeholder="טלפון" type="text" onKeyUp={updatePhone}></input>
    <br/>
    <input value="register" type="button"  onClick={() => { setShowResults(true); props.addUser(userRegiser)} }></input>
    { console.log(showResults)}
    {/* { showResults ?<> <Redirect to="Dialoge" /> return(<Dialoge /> )</>: null } */}
    </> );}
    else{
      <Redirect to="Dialoge" />
            return ( <Dialoge/>)
    }
}
const mapStateToProps = (state) => {
  return {
      currentUser:null,
  }
}

export default connect(mapStateToProps, { getAllUser,addUser })(Register);
