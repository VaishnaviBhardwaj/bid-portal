import React, {Component} from 'react';
import Fire from './config/Fire';
import"./Login.css";
import Home from"./home";

import {Route,Link} from 'react-router-dom';


class Login extends Component {


    constructor(props){

        super(props);

        this.state = {

            email: '',

            password: '',

            FireErrors: '',

            formTitle: 'Login',

            loginBtn: true

        }

    }



    login = e => {

        e.preventDefault();

        const db = Fire.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("bid-login").add({
            
            email: this.state.email,
            password: this.state.password,
          });  
          

    }
    



    register = e => {

        e.preventDefault();
        const db = Fire.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("bid-register").add({
            
            email: this.state.email,
            password: this.state.password,
          });  
        
          

    }


    



    getAction = action => {

        if(action === 'reg'){

            this.setState({formTitle: 'Register New User', loginBtn: false, FireErrors: ''});
          

        }else{

            this.setState({formTitle: 'Login', loginBtn: true, FireErrors: ''});
           

        }

    }



    handleChange = e => {

        this.setState({[e.target.name]: e.target.value});

    }



    render(){



        let errorNotification = this.state.FireErrors ? 

            ( <div className="Error"> {this.state.FireErrors} </div> ) : null;



        let submitBtn = this.state.loginBtn ? 

            (<input className="loginBtn" type="submit" onClick={this.login}  value="Enter" />) : 

            (<input className="loginBtn" type="submit" onClick={this.register} value="Register" />);



        let login_register = this.state.loginBtn ?

            (<button className="registerBtn" onClick={() => this.getAction('reg')}>Register</button>) : 

            (<button className="registerBtn" onClick={() => this.getAction('login')}>Login</button>)



        return(

            <div className="form_block">

                <div id="title">{this.state.formTitle}</div>

                <div className="body">

                    {errorNotification}

                    <form>

                        <input type="text" 

                        value={this.state.email} 

                        onChange={this.handleChange} 

                        name="email" />



                        <input type="password" 

                        value={this.state.password} 

                        onChange={this.handleChange} 

                        name="password" />



                        {submitBtn}

                    </form>

                    {login_register}

                </div>

            </div>

        )

    }

}

    
export default Login;