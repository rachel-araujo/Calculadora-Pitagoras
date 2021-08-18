import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  position:absolute;
  width: 100vw;

`

export const H1 = styled.h1`

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    line-height: 42px;
    text-align: center;
    margin-top:10px;

    color: #000000;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
    @media(min-width: 320px) and (max-width:420px){
    
      font-size:3rem;
      text-align: center;
      
  }
`