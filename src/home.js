import React,{useState} from 'react';
import "./timer.css";
import Cards from"./Cards";
import Card2 from "./Card2";
import { ActionButton,textbtn } from './Card.Css';
import "./timer.css";
import Marquee from 'react-double-marquee';




 function Home(){
    
     return(
        <diV className="body">
   
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
          placeholder="                   Enter the Bid"
        />
        <ActionButton><h3>Bid</h3></ActionButton>
      
    </center>
   </div>
   
   </diV>
  
     );
 }


 export default Home
