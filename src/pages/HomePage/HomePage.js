import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { useHistory } from "react-router-dom";

export const HomePage = ()=>{
    const history = useHistory()

    return (
        <>  
        <Header />

        <h1>Home Page</h1>
 
        
        <Footer />
           
        </>
    )

}
