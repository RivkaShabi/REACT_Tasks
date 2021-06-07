import { connect } from "react-redux";
import React, { useState } from 'react';
import { logUser, getToDos } from '../store/actions';
import Todos from "./Todos";

  //const inputMail=useRef(null);
// const textMail=(e)=>{
//     inputMail.current.value=e.target.value;
//     console.log(e.target.value)
//     console.log( inputMail.current.value)

// }
 const Login = (props) => {
  const [goodUser, setGoodUser] = useState(false);

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');

    const inputRef = React.createRef()
    const inputRefMail = React.createRef()

    const updateName = () => {
      const inputText = inputRef.current.value
      setName(inputText)
      console.log( inputText)
    }


    const updateMail = () => {
        const inputTextMail = inputRefMail.current.value
        setMail(inputTextMail)
        console.log( inputTextMail)
      }

      const log = () => {
        
        if (props.currentUser!=null)
            setGoodUser(true);


    }
if(goodUser)
    return <Todos/>

    return (<>
    <input type="text" ref={inputRef} placeholder="שם משתמש"   onKeyUp={updateName}></input><br/>
    <input type="mail" ref={inputRefMail} placeholder="מייל" onKeyUp={updateMail}></input>
    <br/>
        <input type="button" value="לוגין" onClick={() => { props.logUser({ username: name, email: mail }) ;log() } } />
        {/* <br/>
        <input type="button" value="הבא את כל המשימות שליוזר 2" onClick={() => { props.getToDos(2) }} /> */}
        </>);

}

const mapStateToProps = (state) => {
  return {
      currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { logUser, getToDos })(Login);