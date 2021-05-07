import React, {useState} from 'react';
import { HeroContainer, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowRight, ArrowForward } from './HeroElements';
import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return(
        <HeroContainer id="home">
            <HeroContent>
                <HeroP>Tus planes hacen posibles las metas.</HeroP>
                <HeroH1>
                planes
                </HeroH1>
                <HeroH1>
                &metas
                </HeroH1>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary={1}
                        dark={0}
                        smooth={true}
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80} 
                        >
                        Get started {hover ? <ArrowForward/> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    );
}

export default HeroSection;