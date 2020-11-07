import Home from "./home";
import React from 'react';
import Login from './Login';
import fire, {db, auth} from './service/firebase';

class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        this.setState({user});
        localStorage.setItem('user', user.uid);
      }
      else{
        this.setState({user: null});
        localStorage.removeItem('user');
      }
    })
  }

  render(){
    return (
      <div className="App">
       {this.state.user ? (<Home/>) : (<Login />)}
     </div>
    
    
    );
  } 
  }
  

export default App;
