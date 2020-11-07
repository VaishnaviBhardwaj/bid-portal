import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './service/firebase';
import { SHA256 } from 'crypto-js';
const crypto = require('crypto');
const web3 = require("./web3");
const bip39 = require("bip39js");
const ethers = require("ethers")

var private_add ="";
var public_add = "";
class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }


       

      componentDidMount(){
        console.log("didmounted");
        // db.collection("Farmer")
        //   .get()
        //   .then( snapshot => {
        //         console.log(snapshot);
        //         const farmer =[]
        //         snapshot.forEach(doc => {
        //             const data=doc.data()
        //             farmer.push(data)
        //             console.log(farmer[0])
        //         })
        //   })
        //   .catch(error => console.log(error));

        //   var result = '';
        //   var len = 8;
        //   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        //   var charactersLength = characters.length;
        //   for ( var i = 0; i < len; i++ ) {
        //      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        //   }
         
        //   const hashedToken = crypto
        // .createHash('sha256')
        // .update(result)
        // .digest('hex');
        
    //     console.log(hashedToken);
    //     console.log(result.length);
    //    web3.get_Balance("0x7f473eE979DC5D5c1fBB871fbd167EfC5eabD903");
    //    web3.findhighestbidder("0x7f473eE979DC5D5c1fBB871fbd167EfC5eabD903", 1);

       ////
       const mnemonic = bip39.genMnemonic(bip39.genEntropy(128));
    
        // GET PRIVATE KEY
        let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
        const private_key = mnemonicWallet.privateKey;
    
        // GET ADDRESS
        const address = mnemonicWallet.address

        private_add = private_key;
        public_add = address;
        console.log("private key");    
        console.log(private_key);
        console.log("address");
        console.log(address);
        console.log("Mnemonic");
        console.log(private_add);
        console.log(public_add);
    }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault(); // change
    const db = fire.firestore();

    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });

    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("bid-login").add({
        
        email: this.state.email,
        password: this.state.password,
      })
    .catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();

    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })


    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
   db.collection("bid-register").add({
        
        email: this.state.email,
        password: this.state.password,
      })
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
       <div className="col-md-6">
       <form>
      <div class="form-group">
       <label for="exampleInputEmail1">Email address</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
       <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
      <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
 </form>
 
 </div>
    );
  }
}
export default Login;