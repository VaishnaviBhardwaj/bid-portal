import styled,{css} from "styled-components";
const gradient= degs => css`
        /* background:
            linear-gradient(
                ${degs || 130}deg, */
                background-color: #8EC5FC;
                background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);


        
`;


export const Card =styled.div`
    position:relative;
    overflow:hidden;
    width:700px;
    height:500px;
    padding:3rem 0 2rem;
    border-radius:0.2rem;
    color:white;
    ${gradient()};
    box-shadow: 0 24px 38px 3px rgba(0,0,0,0,0.025),
                0 9px 46px 8px rbga (0,0,0,0.025),
                0 11px 15px -7px rgba(0,0,0,0.025);
    &::after{
            content:"";
            position:absolute;
            z-index:0;
            top:0;
            left:0;
            width:100%auto;
            height:200%auto;
            opacity: 0.0;
            ${gradient(-50)};
            transition:opacity 0.75s; 
            transition:opacity 0.s ease;

    }
    &:hover::after{opacity:1.0}   
    @media Screen  and (max-width: 500px) {
            width:100%;
    }
          

    `;



export const Content =styled.div`
        position:relative;
        z-index:3;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        
        @media Screen  and (max-width: 500px) {
            font-size: 1rem;
        }`


export const PlanTitle = styled.div`
        font-size:2.25rem;
        color:black;
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        @media Screen  and (max-width: 500px) {
            font-size: 1rem;
        }`

export const Plantimer = styled.div`
        font-size: 1rem;
        @media Screen  and  (max-width: 500px) {
            font-size: 0.8rem;
        }
`

export const FeatureListItem =styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:0.35rem;
        font-size:1.5rem;
        color:black;
        font-family:Times New Roman;
        @media Screen  and (max-width: 500px) {
            font-size: 0.8rem;
        }
`;

export const ActionButton=styled.div`
        flex: 01 auto; 
        height:40px;
        width:150px;
        padding:0 2rem;
        border:1;
        border-radius: 5%;
        color:black;
        background:#8EC5FC;
        box-shadow: 0 11px 15px -7px rgba(0,0,0,0.25);
        transition: background 0.25rem;
        margin-top:10px;
        
        


        &:hover{ background :#FF6A88;}
        @media Screen  and (max-width: 500px) {
            width:100%;
        }

`;
export const Image = styled.div`
      
        @media Screen  and (max-width: 700px) {
            width:100%;
        }`


export const ActionButton1=styled.div`
        /* flex: 01 auto; */
        height:40px;
        width:200px;
        padding:0 2rem;
        border:1;
        border-radius: 40%;
        color:black;
        background:#8EC5FC;
        box-shadow: 0 11px 15px -7px rgba(0,0,0,0.25);
        transition: background 0.25rem;
        margin-top:10px;
        text-align:center;


        &:hover{ background :rgb(187, 58, 247);}
        @media Screen  and  (max-width: 500px) {
            width:100%;
        }`

;

export const Body=styled.div`

@media  Screen  and (max-width: 500px) {
        width:100%;
    }`
