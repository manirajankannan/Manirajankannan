import React,{ useState } from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function LogIn() {
    const [value,setValue] = useState({'val1':'','val2':''});
    let history = useHistory();
    
    
    function onChange(event){
        value[event.target.name] = event.target.value;
        setValue({...value});
      }
      const LogIn = (UserName,PassWord)=>{
          
        if(UserName === 'admin' && PassWord === '1234')
        {
            console.log(history);
            history.push("/welcome");
        }
        else
        {
          alert('Invalid Credentials');
        }
      }
    return(
        <div className="container">
        Welcome to LogIn Screen
        <TextField id="standard-basic" label="UserName" onChange={(e)=>onChange(e)} name="val1" />
        <TextField id="standard-basic" type="PassWord" label="PassWord" onChange={(e)=>onChange(e)} name="val2" />
        <br></br>
        <Button variant="contained" color="primary" onClick={()=>LogIn(value.val1,value.val2)}>LogIn</Button>
        </div>
        
    )
}
export default LogIn;