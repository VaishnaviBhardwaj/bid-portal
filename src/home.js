import React,{Component} from 'react';
import "./timer.css";
import Cards from"./Cards";
import Card2 from "./Card2";
import { Button} from './Card.Css';
import "./timer.css";
import fire from "./service/firebase"




 class Home extends  Component{

    constructor(props){
      super(props);
        this.logout = this.logout.bind(this);
    }

  logout() {
      fire.auth().signOut();
  }

    render(){
     return(
        <diV className="body">
           <Button onClick = {this.logout}>Logout</Button>
          
          
   <div class="flex-container">
     <div class="column">
       <Cards/>
     </div>
   <div className= "column bg-alt">
     <Card2/>
   </div>
   </div>

   

   <div className="Content">
       <center>
       <input
       className="field"
          type="text" 
          placeholder="                       Enter the Bid"
        />
        <Button><h3>Bid</h3></Button>
      
    </center>
   </div>
   
   </diV>
  
     );
 }
}


 export default Home
