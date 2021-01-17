
import React, {useState,useEffect} from 'react';
import '../../App.css';
import Cards from '../Cards';
import '../../App';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import fire from '../../Fire';
import { createBrowserHistory } from "history";


function Home() {
  const history = createBrowserHistory();
   
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError,setemailError]=useState('');
  const [passwordError,setpasswordError]=useState('');
  const [username ,setUsername]=useState('');
  const [member ,setMember]=useState('');
  const [hasaccount,setHasaccount]=useState(false);
  
  const clearInputs=()=>{
    setEmail('');
    setPassword('');
    setUsername('');
    setMember('');
  }
  
  const clearError=()=>
  {
    setemailError('');
    setpasswordError('');
  }
  
  const handleLogin=()=>
  { 
  if(email!="" && password!="")
  {  
  fire
  .auth()
  .signInWithEmailAndPassword(email,password)
  .catch(err=>{
    switch(err.code)
    {
      case  "auth/invalid-email":
      case  "auth/user-disabled":
      case  "auth/user-not-found":
        setemailError(err.message);
        alert(err.message);
        break;
      case "auth/wrong-password":
        setpasswordError(err.message);
        alert(err.message);
        break;
    }
  });
  history.push("/Student");
  }
  else
  {alert("Fill all fields");}
  };
  
  const handleSignup=()=>
  {
      clearError();
      if(username!="" && email!="" && password!="" && member!="")
      {
      fire.auth().createUserWithEmailAndPassword(email, password).catch(err=>{
        switch(err.code)
        {
          case  "auth/email-already-in-use":
            alert(err.message);
            break;
          case  "auth/invalid-email":
            setemailError(err.message);
            alert(err.message);
            break;
          case "auth/weak-password":
            setpasswordError(err.message);
            alert(err.message);
            break;
        }
      });

      if(member=='M')
      history.push("/Member");
      else if(member=='S')
      history.push("/Student");
      else
      history.push("/");
    }
    else
    {
      alert("Fill all fields");
    }
  
  }
  
  const handleLogout=()=>
  {
    fire.auth().signOut();
  }
  
  const authlistener=()=>
  {
    fire.auth().onAuthStateChanged(user=>{
      if(user)
      { clearInputs();
        setUser(user);
      }
      else
      setUser("");
    });
  };
  
  useEffect(()=>{
  authlistener();},[])  
  return (
    <>
       <HeroSection 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasaccount={hasaccount} 
        setHasaccount={setHasaccount}
        emailError={emailError} 
        passwordError={passwordError}
        member={member}
        setMember={setMember}
        username={username}
        setUsername={setUsername}
        />
      <Cards />
     
    </>
  );
}

export default Home;
