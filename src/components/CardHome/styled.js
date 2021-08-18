import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  width: 900px;
  height: 300px;
  border-radius:20px;
  background-color: white;
  padding:10px;
  margin-top:10px;

    &:hover{
      box-shadow: 5px 10px 18px gray;
      cursor: pointer;
    }
    
    @media(min-width: 320px) and (max-width:420px){
      width: 300px;
      height: 400px;
      margin-left:50px;
      
    }
`

export const CardButton = styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:row;
    width: 50vw;
    margin-top:10px;
    

    .hipotenusa{
      color:blue;
      font-weight: bold;
      font-size: 16px;
    }
    .cateto1{
      color:blue;
      font-weight: bold;
      font-size: 16px;
    }
    .cateto2{
      color:blue;
      font-weight: bold;
      font-size: 16px;
    }

    @media(min-width: 320px) and (max-width:420px){
      display:flex;
      justify-content:space-around;
      flex-direction:column;
      margin-top:20px;
    }
 
`

export const Img = styled.img`
  width: 250px;
  height: 200px;   

 `
export const H2 = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  
  
  color: #000000;

  @media(min-width: 320px) and (max-width:420px){
    margin-top: -5px;

  }
 
`

