import React,{useState} from 'react';
import "./timer.css";
import Cards from"./Cards";
import Card2 from "./Card2";
import { ActionButton,textbtn } from './Card.Css';




 function Home(){
    
     return(
        <diV>
          <div className="row"> 
            <div className="column">
              <Cards/> 
            </div>
            <div className="column">
              <Card2/>
            </div>
          </div>


   <div className="Content">
       <center>
       <input
       className="field"
          type="text" 
          placeholder="                   Enter the Bid"
        />
        <ActionButton><h3>Bid</h3></ActionButton>
      
    </center>
   </div>
   
   </diV>
  
     );
 }


 export default Home
