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
  padding:20px;
  margin-top:40px;

  &:hover{
    box-shadow: 5px 10px 18px gray;
    cursor: pointer;
}

    .form{
      display:flex;
      justify-content: space-between;
      margin-top:10px;
      width: 40vw;
      width: 40vw;

      @media(min-width: 320px) and (max-width:420px){
        display:flex;
        flex-direction:column;
  
      }
      
    }

    .button{
      background-color:white;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;

      @media(min-width: 320px) and (max-width:420px){
        margin-top:5px;
      }
    }

   @media(min-width: 320px) and (max-width:420px){
      width: 300px;
      height: 400px;
      margin-left:50px;
    
  }
`

export const Form = styled.img`

display:flex;
align-items: center;
justify-content: space-between;
  
  
 `
export const Img = styled.img`

  width: 250px;
  height: 200px;

  @media(min-width: 320px) and (max-width:420px){
    width: 200px;
    height: 250px;
  
}
  
  
 `
