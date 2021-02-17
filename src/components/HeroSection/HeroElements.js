import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight  } from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
        ),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, trasparent 100%);
        z-index: 2;
    } 
`;

export const HeroContent = styled.div`
    z-index:3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #050505;
    font-size: 129px;
    text-align: center;

    @media screen and ( max-width: 768px){
        font-size: 60px;
    }
    @media screen and ( max-width: 480px){
        font-size: 42px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #050505;
    font-size:20px;
    text-align: center;
    max-width: 600px;

    @media screen and ( max-width: 768px){
        font-size: 18px;
    }
    @media screen and ( max-width: 480px){
        font-size: 14px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction: column;
    align-items:center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size:20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size:20px;
`