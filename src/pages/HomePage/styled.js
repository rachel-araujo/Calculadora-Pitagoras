import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column; 
    margin-top:-10px;  

    @media(min-width: 320px) and (max-width:420px){
        flex-wrap: wrap;
        text-align: center;
        width:300px;
  
    }
    
`

export const H2 = styled.h2`

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin-top: 1px;
    color: #000000;
  
    @media(min-width: 320px) and (max-width:420px){

            font-size:20px;
            text-align: center;
            
    
  }
`
export const Texto = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    width: 50vw;
    margin-top: -5px;

    color: #000000;

    @media(min-width: 320px) and (max-width:420px){
       width:300px;
        


`