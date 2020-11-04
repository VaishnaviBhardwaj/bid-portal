import React, { useState } from 'react';
import ima from "./assets/images/download.jpg";
import {Card,Content ,FeatureListItem,PlanTitle,Plantimer} from "./Card.Css";
function Card2 (){
    const[feature]=useState([
        "Farmer Name: Shobhit ",
        "Quantity:200 kg",
        "Variety of Crop : Basmati Rice",
        "Price of product Per kg :  ₹ 500  ",
        
    ])
     
return(
        <div>   
        <Card>
            <Content>
            <PlanTitle>
                Rice
            </PlanTitle>
            <Plantimer>
                <img src ={ima}/>
            </Plantimer>
            {
                feature.map(item=>(
                    <FeatureListItem>
                        <span>
                            {item}
                        </span>
                    </FeatureListItem>
                ))
            }
            </Content>
        </Card>
    </div>
        
        
        );
    }



export default Card2


