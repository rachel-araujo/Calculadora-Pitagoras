import styled from "styled-components";

export const Img = styled.img`

  width: 30px;
  height: 30px;
  padding:20px;
  margin-top: 40px;
 
    @media(min-width: 320px) and (max-width:420px){
      width:20px;
      height:20px;
      margin-top:10px;
    }
    
  }
`

export const Rodape = styled.div`
  display:flex;
  justify-content:center;
  height: 15vh;
  // position: relative;
  width: 100%;
  
  margin-top: 100px;
  background-color: #1C1C1C;

  @media(min-width: 320px) and (max-width:420px){
    width: 126vw;
    height:10vh;
  
    
  }
 
`
