import React, {useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowRight, ArrowForward } from './HeroElements';
import Video from '../../videos/Video.mp4'
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
                        primary="true" 
                        dark="true"
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