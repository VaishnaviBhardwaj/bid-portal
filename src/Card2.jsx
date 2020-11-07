import { SHA256 } from 'crypto-js';
import React, { useState, Component } from 'react';
import ima from "./assets/images/download.jpg";
import {Card,Content ,FeatureListItem,PlanTitle,Plantimer} from "./Card.Css";
import {db} from './service/firebase';
const crypto = require('crypto');
const web3 = require("./web3");
const bip39 = require("bip39js");
const ethers = require("ethers")



class Card2 extends Component{

    state ={
        details: [
            {
                "Farmer Name": "Sahyog Saini",
                "Quantity of crop": "200kg",
                "variety of crop": "Basmati chawal",
                "Price of product per kg": "Rs 200",
            }
        ]
    }

    

    componentDidMount(){
        console.log("didmounted");
        db.collection("Farmer")
          .get()
          .then( snapshot => {
                console.log(snapshot);
                const farmer =[]
                snapshot.forEach(doc => {
                    const data=doc.data()
                    farmer.push(data)
                    console.log(farmer[0])
                })
          })
          .catch(error => console.log(error));

          var result = '';
          var len = 8;
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;
          for ( var i = 0; i < len; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
         
          const hashedToken = crypto
        .createHash('sha256')
        .update(result)
        .digest('hex');
        
        console.log(hashedToken);
        console.log(result.length);
       web3.get_Balance("0x7f473eE979DC5D5c1fBB871fbd167EfC5eabD903");
       web3.findhighestbidder("0x7f473eE979DC5D5c1fBB871fbd167EfC5eabD903", 1);

       ////
       const mnemonic = bip39.genMnemonic(bip39.genEntropy(128));
    
        // GET PRIVATE KEY
        let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
        const privateKey = mnemonicWallet.privateKey;
    
        // GET ADDRESS
        const address = mnemonicWallet.address
        console.log("private key");    
        console.log(privateKey);
        console.log("address");
        console.log(address);
        console.log("Mnemonic");
        console.log(mnemonic);
    }
    

     render(){
         
        var buttonStyle = {
            margin: '10px 10px 10px 0'
          };
          
         return(
        <div>   
        <Card>
            <Content>
            <PlanTitle>
            </PlanTitle>
            <Plantimer>
                <img src ={ima}/>
            </Plantimer>
            {
                // details.map(item=>(
                //     <FeatureListItem>
                //         <span>
                //             {item}
                //         </span>
                //     </FeatureListItem>
                // ))
            }
            </Content>
            <button
                className="btn btn-default"
                style={buttonStyle}
                onClick={this.props.handleClick}>{this.props.label}</button>
        </Card>
    </div>
        
        
        );
     }

    }



export default Card2


