import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;   
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
    font-size: 20px;
    text-align: center;
    margin-top: 30px;
    color: #000000;

    @media(min-width: 320px) and (max-width:420px){
    margin-top: 10px;

    }
`