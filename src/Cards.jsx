import React, { useState } from 'react';
import {Card,Content ,FeatureListItem,Plantimer,} from "./Card.Css";
import Timer from"./Timer";

function Cards (){
    
    const[feature]=useState([
        
        " Current bid : ₹ 10,000",
    
    ]);
        return(
        <div>
        <Card>
            <Content>
            {
                 feature.map(item=>(
                    <FeatureListItem>
                        <span>
                            {item}
                        </span>
                    </FeatureListItem>
                ))
            }
            <h1>
                Count-Down
            </h1>
            <Plantimer>
                <Timer/>
            </Plantimer>  
            </Content>
        </Card>
    </div>
        
        
        );
    }



export default Cards;
