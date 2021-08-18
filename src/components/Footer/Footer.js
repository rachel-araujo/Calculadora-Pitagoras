import React from 'react'
import { Rodape } from './styled';
import GitHub from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import { Img } from './styled'


const Footer = () => {

    return (
        <>
            <Rodape>
                <a href="https://github.com/rachel-araujo" target="_blank">
                    <Img src={GitHub} />
                </a>

                <a href="https://www.linkedin.com/in/rachel-araujo-a6594766/" target="_blank">
                    <Img src={Linkedin} />
                </a>
            </Rodape>
        </>

    )


}
export default Footer