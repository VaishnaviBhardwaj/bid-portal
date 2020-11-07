import React,{Component} from 'react';
import "./timer.css";
import Cards from"./Cards";
import Card2 from "./Card2";
import { Button} from './Card.Css';
import "./timer.css";





 function Home(){


    
     return(
        <diV className="body">
           <Button>Logout</Button>
          
          
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


 export default Home
